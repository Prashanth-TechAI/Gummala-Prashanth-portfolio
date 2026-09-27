import { Reveal } from './reveal';

type SectionHeaderProps = {
  /** The giant condensed word, e.g. "About". */
  word: string;
  /** Gold brush-script word that overlaps the end of the giant word. */
  script: string;
  title: string;
  subtitle?: string;
};

/**
 * Section heading in the hero's poster language: a giant condensed word, a
 * gold brush-script word overlapping its end, and the section's title and
 * one-line summary set beside it.
 */
export const SectionHeader = ({ word, script, title, subtitle }: SectionHeaderProps) => (
  <header className="mb-14 grid items-end gap-8 md:mb-20 lg:grid-cols-12">
    <Reveal y={24} className="lg:col-span-7">
      <h2 className="relative inline-block pr-10 pb-6">
        <span className="block font-anton uppercase leading-[0.85] text-[#141414] text-[clamp(3.5rem,11vw,8.5rem)]">
          {word}
        </span>
        <span
          aria-hidden
          className="absolute -bottom-1 right-0 -rotate-[4deg] whitespace-nowrap font-script leading-none text-secondary text-[clamp(2rem,4.8vw,4.25rem)]"
          style={{ textShadow: '4px 6px 8px rgba(0,0,0,0.18)' }}
        >
          {script}
        </span>
        <span className="sr-only"> — {script}</span>
      </h2>
    </Reveal>

    <Reveal y={20} delay={0.1} className="lg:col-span-5 lg:pb-4 lg:text-right">
      <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">{title}</p>
      {subtitle && <p className="mt-3 leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  </header>
);
