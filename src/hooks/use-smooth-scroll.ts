import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * useSmoothScroll — installs Lenis-driven inertial scrolling.
 *
 * Wheel and trackpad gestures glide with a ~1s ease-out, regardless of how
 * aggressively the user flicks. Touch keeps native momentum (mobile already
 * nails this; Lenis on touch fights native and feels worse).
 *
 * Anchor links are hijacked so they glide via lenis.scrollTo with the nav offset.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.05,
      // Subtle ease-out curve — feels controlled, not floaty.
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // Mobile already has buttery native momentum — Lenis on touch fights it.
      syncTouch: false,
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
      // Tighter lerp = more snappy, less floaty.
      lerp: 0.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Anchor link hijack — glide instead of jump.
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.4 });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, []);
};
