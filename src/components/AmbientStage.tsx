import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SHAPE_EASE = [0.23, 0.86, 0.39, 0.96] as const;

const Shape = ({
  className,
  delay = 0,
  width,
  height,
  rotate = 0,
  gradient,
}: {
  className?: string;
  delay?: number;
  width: number;
  height: number;
  rotate?: number;
  gradient: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -120, rotate: rotate - 12 }}
    animate={{ opacity: 1, y: 0, rotate }}
    transition={{
      duration: 2,
      delay,
      ease: SHAPE_EASE,
      opacity: { duration: 1.1 },
    }}
    className={cn('absolute', className)}
  >
    <div
      style={{ width, height }}
      className={cn(
        'rounded-full bg-gradient-to-r to-transparent border border-white/[0.12]',
        gradient,
      )}
    />
  </motion.div>
);

/**
 * AmbientStage — fixed-to-viewport cinematic backdrop.
 * Trimmed for scroll perf: fewer layers, no blend modes, no expensive masks.
 */
const AmbientStage = memo(() => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
  >
    {/* Deep cinematic base */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% 20%, hsl(222 35% 11%) 0%, hsl(222 50% 6%) 55%, hsl(222 60% 3%) 100%)',
      }}
    />

    {/* Subtle grid — single composited image, no mask */}
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(36 28% 96% / 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(36 28% 96% / 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    />

    {/* Star points — single background-image with multiple radial gradients */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 12% 14%, hsl(36 28% 96% / 0.55), transparent 60%),
          radial-gradient(1.5px 1.5px at 28% 22%, hsl(38 65% 75% / 0.6), transparent 60%),
          radial-gradient(1px 1px at 48% 10%, hsl(36 28% 96% / 0.45), transparent 60%),
          radial-gradient(2px 2px at 72% 18%, hsl(38 65% 70% / 0.5), transparent 60%),
          radial-gradient(1px 1px at 88% 26%, hsl(36 28% 96% / 0.45), transparent 60%),
          radial-gradient(1.5px 1.5px at 18% 56%, hsl(36 28% 96% / 0.4), transparent 60%),
          radial-gradient(1px 1px at 50% 64%, hsl(38 65% 70% / 0.5), transparent 60%),
          radial-gradient(1.5px 1.5px at 80% 56%, hsl(36 28% 96% / 0.45), transparent 60%),
          radial-gradient(1px 1px at 30% 84%, hsl(36 28% 96% / 0.4), transparent 60%),
          radial-gradient(2px 2px at 65% 88%, hsl(38 65% 70% / 0.55), transparent 60%)
        `,
      }}
    />

    {/* Three floating glass pills (was five — fewer is faster) */}
    <Shape
      delay={0.3}
      width={520}
      height={120}
      rotate={12}
      gradient="from-indigo-500/[0.15]"
      className="left-[-8%] top-[18%]"
    />
    <Shape
      delay={0.5}
      width={420}
      height={100}
      rotate={-15}
      gradient="from-rose-500/[0.15]"
      className="right-[-6%] top-[70%]"
    />
    <Shape
      delay={0.4}
      width={260}
      height={70}
      rotate={-8}
      gradient="from-amber-500/[0.18]"
      className="right-[18%] top-[10%]"
    />

    {/* Two large glow blooms — gold + cool blue */}
    <div
      className="absolute -top-[14vh] -left-[12vw] w-[44rem] h-[44rem] rounded-full blur-3xl"
      style={{
        background:
          'radial-gradient(circle, hsl(38 65% 58% / 0.16) 0%, transparent 70%)',
      }}
    />
    <div
      className="absolute top-[30vh] -right-[12vw] w-[48rem] h-[48rem] rounded-full blur-3xl"
      style={{
        background:
          'radial-gradient(circle, hsl(220 65% 40% / 0.22) 0%, transparent 70%)',
      }}
    />

    {/* Edge vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, hsl(222 60% 2% / 0.55) 100%)',
      }}
    />
  </div>
));
AmbientStage.displayName = 'AmbientStage';

export default AmbientStage;
