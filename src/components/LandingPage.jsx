import React from 'react';
import { product } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card, Button, ArrowRight, Plus, Motif } from './primitives.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

/**
 * Standalone, prerendered programmatic-SEO landing page.
 * Reached by a normal full-page-load <a href>; renders real server-side content.
 * Reuses the shared Nav / Footer / primitives + the brand --accent.
 */
export default function LandingPage({ data }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--accent-ink)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <Section className="relative overflow-hidden border-b border-line">
          <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container className="relative">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-7">
                <ol className="mono flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  <li>
                    <a href="/" className="transition-colors hover:text-ink">Home</a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-ink-subtle">{data.breadcrumbName}</li>
                </ol>
              </nav>
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-ink">
                {data.h1}
              </h1>
              <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.7] text-ink-muted">{data.lead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={product.ctaHref} variant="primary">
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
                <a
                  href="/#pricing"
                  className="mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
                >
                  See pricing
                </a>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* Body sections */}
        <Section className="border-b border-line">
          <Container>
            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {data.sections.map((s, i) => (
                <Reveal key={s.heading} delay={i % 2 === 0 ? 0 : 0.06}>
                  <div className="flex items-start gap-3">
                    <span className="mono mt-1 text-[11px] font-medium tracking-[0.14em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                        {s.heading}
                      </h2>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.75] text-ink-muted">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* Caveat strip — required disclaimer */}
        {product.caveat && (
          <div className="border-b border-line bg-bg-alt">
            <Container className="flex items-start gap-3 py-3.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent-line text-accent">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 8v5M12 17h.01" />
                </svg>
              </span>
              <p className="text-[12.5px] leading-[1.6] text-ink-muted">{product.caveat}</p>
            </Container>
          </div>
        )}

        {/* FAQ */}
        <Section id="faq" className="border-b border-line bg-bg-alt">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
                  Questions, answered.
                </h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted">
                  Start free in the app, or email the C4 team at{' '}
                  <a href="mailto:caleb@c4studios.com.au" className="text-accent underline decoration-accent-line underline-offset-2 hover:text-accent-strong">
                    caleb@c4studios.com.au
                  </a>
                  .
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <Card className="overflow-hidden">
                  {data.faqs.map((f, i) => (
                    <details key={f.q} className="group" style={i === 0 ? undefined : { borderTop: '1px solid var(--border-light)' }}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[15px] font-medium text-ink transition-colors hover:text-accent-strong [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <Plus size={15} className="shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-45" />
                      </summary>
                      <p className="max-w-[62ch] px-7 pb-6 text-[14px] leading-[1.75] text-ink-muted">{f.a}</p>
                    </details>
                  ))}
                </Card>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section className="bg-[color:var(--ink-bg)]">
          <Container>
            <Reveal>
              <div className="flex items-center gap-2 text-[color:var(--ink-muted)]">
                <Motif size={13} />
                <span className="mono text-[10px] uppercase tracking-[0.16em]">{product.name}</span>
              </div>
              <h2 className="mt-5 max-w-[22ch] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[color:var(--ink-text)]">
                Turn your expertise into content clients actually read.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.7] text-[color:var(--ink-muted)]">
                Start free. Paste your source material and get an on-brand draft in minutes.
              </p>
              <div className="mt-8">
                <Button href={product.ctaHref} variant="primary">
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
