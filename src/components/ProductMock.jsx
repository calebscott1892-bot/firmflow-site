import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CornerBrackets, Check, EASE } from './primitives.jsx';

/**
 * FirmFlow hero visual — an editorial "blueprint" of the content studio,
 * C4 engineering-drawing style: hairline borders, monospace labels, minimal
 * radius, accent used sparingly. Light, not a dark neon window.
 */
const FORMATS = ['LinkedIn post', 'Newsletter', 'Client email'];

export default function ProductMock() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } };

  return (
    <div className="relative">
      <motion.div {...rise(0.1)} className="relative rounded-[3px] border border-line bg-card" style={{ boxShadow: '0 24px 60px -34px rgba(26,26,26,0.28)' }}>
        <CornerBrackets inset={10} size={16} />

        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="mono inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            FirmFlow · Content studio
          </span>
          <span className="mono hidden text-[9px] uppercase tracking-[0.2em] text-ink-faint sm:inline">Sheet · FF-01</span>
        </div>

        {/* Format tabs */}
        <div className="flex gap-2 border-b border-line px-4 py-2.5">
          {FORMATS.map((f, i) => (
            <span key={f} className={`mono rounded-full px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] ${i === 0 ? 'bg-[color:var(--accent-soft)] text-accent' : 'text-ink-faint'}`}>
              {f}
            </span>
          ))}
        </div>

        <div className="space-y-3 p-4">
          {/* Source */}
          <motion.div {...rise(0.2)} className="rounded-[3px] border border-line bg-bg-alt p-3">
            <div className="flex items-center justify-between">
              <span className="mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink-subtle">Source</span>
              <span className="mono rounded-[2px] bg-card px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-ink-faint">Source only</span>
            </div>
            <p className="mt-2 text-[11.5px] leading-snug text-ink-muted">
              ATO update: the Division 7A benchmark interest rate for 2025–26 has been set. Loans to shareholders must…
            </p>
            <button type="button" tabIndex={-1} aria-hidden="true" className="mono mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-accent py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-ink)]">
              <Spark /> Generate
            </button>
          </motion.div>

          {/* Output */}
          <motion.div {...rise(0.34)} className="rounded-[3px] border border-accent-line bg-[color:var(--accent-soft)] p-3">
            <div className="flex items-center justify-between">
              <span className="mono inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
                <Spark /> Your firm’s voice
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.1em] text-ink-subtle">LinkedIn</span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-ink">
              The ATO has set the Division 7A benchmark rate for 2025–26. If your company has lent money to shareholders,
              here’s what it means for your minimum repayments — and the date you don’t want to miss.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-accent-line pt-3">
              <span className="mono inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[color:var(--accent-ink)]">
                <Check size={9} /> Disclaimer included
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.1em] text-ink-subtle">Review before publishing</span>
            </div>
          </motion.div>
        </div>

        <motion.div {...rise(0.5)} className="grid grid-cols-3 border-t border-line">
          <Stat n="Source" label="Grounded" />
          <Stat n="On-brand" label="Voice" divider />
          <Stat n="✓" label="Disclaimer" divider />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Stat({ n, label, divider }) {
  return (
    <div className={`px-3 py-4 ${divider ? 'border-l border-line' : ''}`}>
      <div className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{n}</div>
      <div className="mono mt-1 text-[9px] uppercase tracking-[0.16em] text-ink-faint">{label}</div>
    </div>
  );
}

function Spark() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
    </svg>
  );
}
