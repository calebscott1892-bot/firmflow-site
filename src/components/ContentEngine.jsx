import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CornerBrackets, Check, EASE } from './primitives.jsx';

/*
 * FirmFlow hero, alive — a self-running content engine.
 *
 * The product's whole job made visible: a source snippet appears, a "Generating"
 * beat passes, then it FANS OUT into a small pack of on-brand drafts whose text
 * streams in line by line, finishing with a "Grounded in your source" check.
 * Then it parks, holds, and loops. Generative but credible — no sparkle overload.
 *
 * SSR-safe: server renders the final parked state (source + all three tiles fully
 * typed + grounded check), so prerendered HTML is meaningful and reduced-motion
 * users get the complete, readable artifact with zero animation.
 */

const SOURCE = {
  label: 'Pasted source',
  kind: 'ATO update · memo',
  text: 'ATO update: the Division 7A benchmark interest rate for 2025–26 has been set at 8.77%. Loans to shareholders must meet minimum yearly repayments or risk being treated as a deemed dividend.',
};

const TILES = [
  {
    id: 'linkedin',
    format: 'LinkedIn post',
    lines: [
      'The Division 7A benchmark rate for 2025–26 is now 8.77%.',
      'If your company has lent money to shareholders, your minimum repayments just moved.',
      'Miss them and the loan can be treated as a deemed dividend. Here’s the date you don’t want to slip.',
    ],
  },
  {
    id: 'newsletter',
    format: 'Client newsletter',
    lines: [
      'In this month’s update: the 2025–26 Division 7A rate has landed at 8.77%.',
      'We’ve broken down what it means for shareholder loans and the repayments due before year end.',
    ],
  },
  {
    id: 'email',
    format: 'Follow-up email',
    lines: [
      'Hi {first_name}, a quick heads-up — the Division 7A rate for 2025–26 is set at 8.77%.',
      'If we manage a shareholder loan for you, let’s confirm your minimum repayment before the deadline.',
    ],
  },
];

// ── timing (ms) ──
const T = {
  sourceIn: 600,
  genBeat: 1100,
  tileStagger: 220,
  lineDelay: 90,     // per character while streaming
  lineGap: 320,      // pause between lines
  grounded: 700,
  hold: 4200,        // park before looping
};

function fullText(tile) {
  return tile.lines.join(' ');
}

export default function ContentEngine() {
  const reduce = useReducedMotion();

  // phase: 'source' → 'generating' → 'streaming' → 'grounded' (parked)
  // SSR / reduced-motion start fully parked so the static artifact is complete.
  const [phase, setPhase] = useState('grounded');
  const [typed, setTyped] = useState(() =>
    Object.fromEntries(TILES.map((t) => [t.id, fullText(t)]))
  );
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const after = (ms, fn) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  useEffect(() => {
    if (reduce) return; // honour reduced motion — keep the parked state
    let cancelled = false;

    const runCycle = () => {
      if (cancelled) return;
      clearTimers();

      // 1. reset to empty source
      setTyped(Object.fromEntries(TILES.map((t) => [t.id, ''])));
      setPhase('source');

      // 2. generating beat
      after(T.sourceIn, () => setPhase('generating'));

      // 3. fan out + stream each tile
      after(T.sourceIn + T.genBeat, () => {
        setPhase('streaming');
        let clockBase = T.sourceIn + T.genBeat;

        TILES.forEach((tile, ti) => {
          const tileStart = ti * T.tileStagger;
          const text = fullText(tile);
          let elapsed = tileStart;

          // stream char-by-char in small bursts (3 chars per tick = credible cadence)
          const burst = 3;
          for (let i = burst; i <= text.length; i += burst) {
            const slice = text.slice(0, i);
            elapsed += T.lineDelay;
            after(elapsed, () => {
              setTyped((prev) => ({ ...prev, [tile.id]: slice }));
            });
          }
          // ensure the final full text lands
          elapsed += T.lineDelay;
          after(elapsed, () => {
            setTyped((prev) => ({ ...prev, [tile.id]: text }));
          });

          // last tile sets the grounded check + schedules the loop
          if (ti === TILES.length - 1) {
            after(elapsed + T.grounded, () => setPhase('grounded'));
            after(elapsed + T.grounded + T.hold, runCycle);
          }
        });
        // clockBase referenced to keep lints calm; timing already absolute via `after`
        void clockBase;
      });
    };

    // small delay so the entrance reveal lands before the demo kicks off
    const boot = setTimeout(runCycle, 900);

    return () => {
      cancelled = true;
      clearTimeout(boot);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const generating = phase === 'generating';
  const showTiles = phase === 'streaming' || phase === 'grounded';
  const grounded = phase === 'grounded';

  return (
    <div className="relative">
      {/* soft accent halo behind the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-70"
        style={{ background: 'radial-gradient(58% 52% at 72% 26%, var(--accent-soft), transparent 72%)' }}
      />

      <div className="relative overflow-hidden rounded-[10px] border border-line bg-card" style={{ boxShadow: 'var(--shadow-panel)' }}>
        <CornerBrackets inset={10} size={16} />

        {/* panel header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="mono inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              {!reduce && (
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                  animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            FirmFlow · Content engine
          </span>
          <span className="mono hidden text-[9px] uppercase tracking-[0.2em] text-ink-faint sm:inline">Sheet · FF-01</span>
        </div>

        {/* ── Source ── */}
        <div className="px-4 pt-4">
          <div className="rounded-[4px] border border-line bg-bg-alt p-3">
            <div className="flex items-center justify-between">
              <span className="mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink-subtle">{SOURCE.label}</span>
              <span className="mono rounded-[2px] bg-card px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                {SOURCE.kind}
              </span>
            </div>
            <p className="mt-2 text-[11.5px] leading-snug text-ink-muted">{SOURCE.text}</p>
          </div>
        </div>

        {/* ── Generating beat / fan-out connector ── */}
        <div className="relative flex items-center justify-center py-3" aria-hidden="true">
          <div className="h-5 w-px bg-accent-line" />
          <AnimatePresence>
            {generating && !reduce && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="mono absolute inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-card px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent"
              >
                <Spark spin />
                Generating
                <Dots />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* ── The pack of drafts ── */}
        <div
          className="space-y-2.5 px-4 pb-4"
          role="img"
          aria-label="FirmFlow turning one pasted source into a pack of on-brand drafts: a LinkedIn post, a client newsletter and a follow-up email, each grounded in the source."
        >
          {TILES.map((tile, i) => {
            const text = typed[tile.id] ?? '';
            const isTyping = showTiles && !reduce && text.length < fullText(tile).length;
            return (
              <motion.div
                key={tile.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={
                  reduce
                    ? {}
                    : showTiles
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.45, delay: showTiles ? i * 0.08 : 0, ease: EASE }}
                className="rounded-[4px] border border-line bg-card p-3"
                style={grounded ? { borderColor: 'var(--accent-line)' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span className="mono inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
                    <FormatDot />
                    {tile.format}
                  </span>
                  <span className="mono text-[8.5px] uppercase tracking-[0.12em] text-ink-faint">Draft</span>
                </div>
                <p className="mt-2 min-h-[2.4em] text-[11.5px] leading-relaxed text-ink">
                  {text}
                  {isTyping && <span className="caret" aria-hidden="true" />}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Grounded footer ── */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={grounded ? 'done' : 'pending'}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="mono inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: grounded ? 'var(--ok)' : 'var(--text-subtle)' }}
            >
              {grounded ? (
                <>
                  <span
                    className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-white"
                    style={{ background: 'var(--ok)' }}
                  >
                    <Check size={9} />
                  </span>
                  Grounded in your source
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Reading your source
                </>
              )}
            </motion.span>
          </AnimatePresence>
          <span className="mono text-[9px] uppercase tracking-[0.12em] text-ink-faint">Review before publishing</span>
        </div>
      </div>
    </div>
  );
}

function FormatDot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />;
}

function Spark({ spin = false }) {
  const reduce = useReducedMotion();
  const Tag = spin && !reduce ? motion.svg : 'svg';
  const anim = spin && !reduce ? { animate: { rotate: 360 }, transition: { duration: 2.4, repeat: Infinity, ease: 'linear' } } : {};
  return (
    <Tag width="10" height="10" viewBox="0 0 24 24" fill="currentColor" {...anim}>
      <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
    </Tag>
  );
}

function Dots() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-0.5 w-0.5 rounded-full bg-accent"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </span>
  );
}
