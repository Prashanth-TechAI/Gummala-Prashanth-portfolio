import { Reveal } from './reveal';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  invert?: boolean;
};

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  invert = false,
}: SectionHeaderProps) => (
  <div
    className={[
      'mb-14 md:mb-20 max-w-3xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
    ].join(' ')}
  >
    <Reveal y={20} delay={0.05}>
      <span className="pill-badge">{eyebrow}</span>
    </Reveal>

    <Reveal y={28} delay={0.15}>
      <h2
        className={[
          'text-heading mt-6',
          invert ? 'text-primary-foreground' : 'text-foreground',
        ].join(' ')}
      >
        {title}
      </h2>
    </Reveal>

    <Reveal y={20} delay={0.25}>
      <div
        className={[
          'ornament mt-5',
          align === 'center' ? 'justify-center' : 'justify-start',
        ].join(' ')}
      >
        <span className="ornament-line" />
        <span className="ornament-dot" />
        <span className="ornament-line" />
      </div>
    </Reveal>

    {subtitle && (
      <Reveal y={16} delay={0.35}>
        <p
          className={[
            'text-body mt-6 leading-relaxed',
            invert ? 'text-primary-foreground/75' : 'text-muted-foreground',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          ].join(' ')}
        >
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);
