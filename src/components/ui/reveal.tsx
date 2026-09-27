import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Scroll reveal with both an entrance and an exit.
 *
 * - Entering (from below): glides up from `y`, fades in and settles from 97% scale.
 * - Leaving through the top: drifts up a little and fades out, so content
 *   hands over to the next section instead of just scrolling away.
 * - Scrolling back reverses both, because the state follows the viewport.
 *
 * Only opacity and transform animate, so the work stays on the compositor.
 * Visitors who prefer reduced motion get the content immediately.
 */

type Phase = 'below' | 'in' | 'above';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  /** Kept for API compatibility — ignored. */
  rotateX?: number;
  rotateY?: number;
  className?: string;
  /** Play the entrance once and never exit. */
  once?: boolean;
};

export const Reveal = ({ children, delay = 0, y = 48, x = 0, className, once = false }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(() => (prefersReduced() ? 'in' : 'below'));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('in');
          if (once) observer.disconnect();
        } else {
          // Left through the top of the screen, or is still below it.
          setPhase(entry.boundingClientRect.top < 0 ? 'above' : 'below');
        }
      },
      // Enter once the element is clearly on screen; exit a little before it's gone.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const transform =
    phase === 'in'
      ? 'translate3d(0,0,0) scale(1)'
      : phase === 'below'
        ? `translate3d(${x}px, ${y}px, 0) scale(0.97)`
        : `translate3d(0, ${-Math.round(y * 0.5)}px, 0) scale(0.98)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: phase === 'in' ? 1 : 0,
        transform,
        transition: `opacity 0.9s ${EASE}, transform 1.1s ${EASE}`,
        // Entrance respects the stagger delay; exits leave together, immediately.
        transitionDelay: phase === 'in' && delay ? `${delay}s` : '0s',
        willChange: phase === 'in' ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export const RevealStagger = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const RevealItem = ({
  children,
  index = 0,
  className,
  y = 48,
  cap = 5,
  stagger = 0.08,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  y?: number;
  cap?: number;
  stagger?: number;
}) => (
  <Reveal delay={Math.min(index, cap) * stagger} y={y} className={className}>
    {children}
  </Reveal>
);
