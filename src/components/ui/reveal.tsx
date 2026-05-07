import { useRef, type ReactNode } from 'react';
import { useInView } from 'framer-motion';

/**
 * CSS-driven reveal-on-scroll. Pure 2D translate + opacity — no perspective,
 * no rotate, no scale. Compositor-thread only. Once "in view" flips, the GPU
 * runs a single composited transition, then there is zero ongoing work.
 *
 * The trigger margin is tuned so the element is *visibly inside* the viewport
 * before the animation starts — otherwise with smooth-scroll the motion plays
 * before the user has settled on the section, making it feel like nothing
 * animated.
 */

const TRANSITION =
  'transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none';

// Element must be 120px above the viewport bottom before triggering — i.e.
// the user has scrolled it well into view.
const TRIGGER_MARGIN = '0px 0px -120px 0px';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  /** Kept for API compatibility — ignored. */
  rotateX?: number;
  rotateY?: number;
  className?: string;
  once?: boolean;
};

export const Reveal = ({
  children,
  delay = 0,
  y = 60,
  x = 0,
  className,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: TRIGGER_MARGIN });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay ? `${delay}s` : undefined,
        transform: inView
          ? 'translate3d(0,0,0)'
          : `translate3d(${x}px, ${y}px, 0)`,
        opacity: inView ? 1 : 0,
        willChange: inView ? 'auto' : 'opacity, transform',
      }}
      className={[TRANSITION, className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};

export const RevealStagger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export const RevealItem = ({
  children,
  index = 0,
  className,
  y = 60,
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
