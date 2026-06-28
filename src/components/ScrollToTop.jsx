import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE } from './primitives.jsx';

/**
 * Floating "back to top" button. Appears after ~600px of scroll, fixed
 * bottom-right, accent-styled. Smooth-scrolls to top (instant when the user
 * prefers reduced motion).
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="fixed bottom-6 right-6 z-50 inline-grid h-12 w-12 place-items-center rounded-full bg-accent text-[color:var(--accent-ink)] shadow-[var(--shadow-lift)] transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:brightness-[1.06]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
