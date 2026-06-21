# FirmFlow — marketing site

Standalone marketing site for **FirmFlow**, a [C4 Studios](https://c4studios.com.au) product.
> AI content engine for professional services.

Part of the C4 product-site family (ReviewLoop · ReturnDesk · Complia · FirmFlow). Shared
design DNA (Inter, C4 warm-dark tokens, framer-motion); distinct identity here: **violet / AI content** accent.

## Stack
Vite + React + Tailwind + framer-motion, prerendered to static HTML (Vite SSG, pure Node — no
browser needed) with a `<noscript>` fallback, `robots.txt` and `sitemap.xml`.

## Commands
```bash
npm install
npm run dev       # local dev server
npm run build     # client + SSR build + prerender → dist/
npm run preview   # serve the built dist
```

## Single source of truth
All copy, pricing and links live in `src/data/product.js`, mirrored verbatim from the C4 repo
(`src/components/software/productData.js`). **Never hardcode a price or link elsewhere** — import
from there. Primary CTA → the C4 suite app (`?ref=firmflow`); lifetime CTA → `product.lifetime.href`.

## Deploy
Cloudflare Pages — build command `npm run build`, output dir `dist`. Intended domain:
`firmflow.c4studios.com.au`.
