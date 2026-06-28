/**
 * Prerender → static HTML (pure Node, no browser).
 *
 * 1. Renders <App/> to HTML via the SSR build (dist-server/entry-server.js).
 * 2. Injects the rendered markup into <div id="root"> in the client index.html.
 * 3. Injects <title>/meta/OG/Twitter/JSON-LD into <head> from src/lib/seo.js.
 * 4. Overwrites dist/index.html and cleans up the SSR build.
 *
 * Mirrors the intent of C4's scripts/prerender.mjs but, since this site is fully
 * static, uses Vite SSG instead of a Playwright capture — so it runs anywhere,
 * including CI with no browser.
 */
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { render, renderLanding } = await import(resolve(root, 'dist-server/entry-server.js'));
const { renderHead, renderLandingHead } = await import(resolve(root, 'src/lib/seo.js'));
const { seo } = await import(resolve(root, 'src/data/product.js'));
const { landings } = await import(resolve(root, 'src/data/landings.js'));

const templatePath = resolve(root, 'dist/index.html');
const template = await readFile(templatePath, 'utf8');

/** Inject rendered #root markup + <head> tags into the built client template. */
function compose(tpl, appHtml, head, extraHeadScript = '') {
  let out = tpl.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );
  const headBlock = extraHeadScript ? `${head}\n    ${extraHeadScript}` : head;
  if (out.includes('<!--app-head-->')) {
    out = out.replace('<!--app-head-->', headBlock);
  } else {
    out = out.replace('</head>', `    ${headBlock}\n  </head>`);
  }
  return out;
}

// ── Home page ──
let html = compose(template, render(), renderHead());
await writeFile(templatePath, html, 'utf8');

// ── Programmatic-SEO landing pages → dist/<path>/index.html ──
const landingPaths = [];
for (const landing of landings) {
  const appHtml = renderLanding(landing);
  const head = renderLandingHead(landing);
  // Tag the page so entry-client hydrates the matching LandingPage.
  const tag = `<script>window.__LANDING_PATH__=${JSON.stringify(landing.path)};</script>`;
  const pageHtml = compose(template, appHtml, head, tag);
  const dir = resolve(root, 'dist', landing.path);
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, 'index.html'), pageHtml, 'utf8');
  landingPaths.push(landing.path);
}

// robots.txt + sitemap.xml — URL single-sourced from seo.url.
const origin = new URL(seo.url).origin;
await writeFile(
  resolve(root, 'dist/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  'utf8'
);
const urlEntries = [
  `  <url>\n    <loc>${seo.url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  ...landingPaths.map(
    (p) =>
      `  <url>\n    <loc>${origin}/${p}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  ),
];
await writeFile(
  resolve(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`,
  'utf8'
);

await rm(resolve(root, 'dist-server'), { recursive: true, force: true });

console.log(
  `✓ Prerendered dist/index.html + ${landingPaths.length} landing page(s) [${landingPaths.join(', ')}] + robots.txt + sitemap.xml`
);
