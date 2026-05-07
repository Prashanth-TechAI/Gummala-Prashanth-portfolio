import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

// Card N comes from: left, bottom, right
const dirFor = (i: number): { x: number; y: number } => {
  const m = i % 3;
  if (m === 0) return { x: -90, y: 0 };
  if (m === 2) return { x: 90, y: 0 };
  return { x: 0, y: 80 };
};

const education = [
  {
    degree: 'BTech — Computer Science & Engineering (AI)',
    institution: 'Vivekananda Global University',
    period: '2021 — 2025',
    grade: 'CGPA · 8.76',
    icon: GraduationCap,
  },
  {
    degree: 'Board of Intermediate Education',
    institution: 'Sri Nalanda Junior College',
    period: '2019 — 2021',
    grade: 'Percentage · 98.4%',
    icon: BookOpen,
  },
  {
    degree: 'Board of Secondary Education',
    institution: 'Radhika Concept School',
    period: '2018 — 2019',
    grade: 'CGPA · 9.7',
    icon: Award,
  },
];

const Education = () => (
  <section id="education" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Academic Journey"
        title="Education"
        subtitle="A grounding in computer science and artificial intelligence."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-6xl mx-auto">
        {education.map((edu, index) => {
          const Icon = edu.icon;
          const d = dirFor(index);
          return (
            <Reveal key={edu.degree} delay={index * 0.1} x={d.x} y={d.y}>
              <div className="card-premium p-8 group relative overflow-hidden h-full">
              {/* Soft gold wash */}
              <div
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'var(--gradient-gold-soft)' }}
                aria-hidden
              />

              <div className="relative">
                {/* Embossed gold icon plate */}
                <div className="inline-flex p-[1px] rounded-2xl bg-gradient-gold shadow-emboss-sm mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card">
                    <Icon className="h-6 w-6 text-secondary" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="text-overline text-secondary/80 mb-2">{edu.period}</div>

                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 leading-tight tracking-tight">
                  {edu.degree}
                </h3>

                <p className="text-secondary font-medium mb-5">
                  {edu.institution}
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 ring-1 ring-secondary/20">
                  <Award className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-xs font-semibold text-secondary tracking-wide">
                    {edu.grade}
                  </span>
                </div>
              </div>

              {/* Bottom hairline */}
              <span
                className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-700 group-hover:scale-x-100"
                aria-hidden
              />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;
