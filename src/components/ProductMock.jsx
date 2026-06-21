import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, EASE } from './primitives.jsx';

/**
 * Crafted in-product mockup of FirmFlow — a content studio that turns source
 * material into an on-brand draft with disclaimers built in. C4 dark language
 * with FirmFlow's violet accent. (Swap for a real suite-app screenshot later.)
 */
const FORMATS = ['LinkedIn post', 'Newsletter', 'Client email'];

export default function ProductMock() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(60% 60% at 70% 20%, var(--accent-glow), transparent 70%)' }}
      />

      <motion.div
        {...rise(0.05)}
        className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-medium text-ink-subtle">FirmFlow · Content studio</span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            <SparkIcon /> AI
          </span>
        </div>

        {/* Format tabs */}
        <div className="flex gap-2 border-b border-line px-4 py-2.5">
          {FORMATS.map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                i === 0 ? 'bg-accent-soft text-accent' : 'text-ink-subtle'
              }`}
            >
              {f}
            </span>
          ))}
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-5">
          {/* Source input */}
          <motion.div {...rise(0.18)} className="sm:col-span-2 rounded-xl border border-line bg-bg-alt p-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">Source</p>
              <span className="rounded bg-bg px-1.5 py-0.5 text-[9px] font-semibold text-ink-faint">SOURCE ONLY</span>
            </div>
            <p className="mt-2 text-[11.5px] leading-snug text-ink-muted">
              ATO update: the Division 7A benchmark interest rate for 2025–26 has been set. Loans to shareholders must…
            </p>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent py-2 text-[12px] font-semibold text-[color:var(--accent-ink)]"
            >
              <SparkIcon /> Generate
            </button>
          </motion.div>

          {/* Generated output */}
          <motion.div {...rise(0.34)} className="sm:col-span-3 rounded-xl border border-accent-line bg-accent-soft p-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                <SparkIcon /> Your firm’s voice
              </span>
              <span className="text-[10px] text-ink-subtle">LinkedIn</span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-ink">
              The ATO has set the Division 7A benchmark rate for 2025–26. If your company has lent money to
              shareholders, here’s what it means for your minimum repayments this year — and the date you don’t
              want to miss. 👇
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-accent-line/60 pt-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent">
                <Check className="h-2.5 w-2.5" /> Disclaimer included
              </span>
              <span className="text-[10px] text-ink-subtle">Review before publishing</span>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          {...rise(0.56)}
          className="grid grid-cols-3 divide-x divide-line border-t border-line bg-white/[0.015] text-center"
        >
          <Stat value="Source" label="grounded" />
          <Stat value="On-brand" label="voice" />
          <Stat value="✓" label="disclaimer" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="px-2 py-3">
      <div className="text-sm font-bold text-ink">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-ink-faint">{label}</div>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
    </svg>
  );
}
