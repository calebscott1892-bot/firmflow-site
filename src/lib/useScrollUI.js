import { useEffect, useState } from 'react';

/** True once the page has scrolled past `threshold` px (for header condense). */
export function useCondensed(threshold = 40) {
  const [condensed, setCondensed] = useState(false);
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return condensed;
}

/**
 * Scroll-spy: returns the id of the section currently in view.
 * `ids` is an array of section element ids (without the leading #).
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (visible.size) {
          // Pick the most-visible section.
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActive(top);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids.join(',')]);
  return active;
}
