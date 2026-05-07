import { Calendar, Briefcase, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

type Experience = {
  title: string;
  company: string;
  employmentType?: string;
  period: string;
  location?: string;
  description: string;
  type: 'current' | 'past';
};

const experiences: Experience[] = [
  {
    title: 'AI Engineer',
    company: 'AI Nexus Innovations Hub',
    employmentType: 'Full-time',
    period: 'Mar 2026 — Present · 3 mos',
    location: 'Bangalore · On-site',
    description:
      'Leading a real-estate AI initiative for the German market — building fully automated workflows powered by AI agents, voice agents handling live call systems, and AI-driven lead qualification pipelines.',
    type: 'current',
  },
  {
    title: 'AI Developer',
    company: 'Telepathy Infotech Pvt Ltd',
    employmentType: 'Full-time',
    period: 'Sep 2024 — Feb 2026 · 1 yr 6 mos',
    description:
      'Collaborated on real-world AI initiatives — developing, optimising and deploying generative-AI models that solved complex business challenges end-to-end.',
    type: 'past',
  },
  {
    title: 'Machine Learning Intern',
    company: 'Octopyder Services Pvt Ltd',
    employmentType: 'Internship',
    period: '2024 / 05 — 2024 / 08',
    description:
      "Built an intrusion-detection system for a client's webpage — strengthening security by identifying and mitigating threats before they took hold.",
    type: 'past',
  },
];

const Experience = () => (
  <section
    id="experience"
    className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
  >
    <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Career Journey"
        title="Professional experience"
        subtitle="Building craft through hands-on work in AI and machine learning."
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline rail — gold gradient */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, hsl(var(--gold) / 0.6) 12%, hsl(var(--gold) / 0.6) 88%, transparent 100%)',
          }}
          aria-hidden
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Reveal
              key={exp.title}
              delay={index * 0.12}
              x={isLeft ? -110 : 110}
              y={0}
              className={[
                'relative flex items-start mb-14 last:mb-0',
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse',
              ].join(' ')}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                <span className="relative flex items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-secondary/25 animate-soft-pulse" />
                  <span
                    className="relative h-3 w-3 rotate-45 bg-gradient-gold ring-4 ring-background"
                    style={{ boxShadow: 'var(--shadow-gold-sm)' }}
                  />
                </span>
              </div>

              {/* Content card */}
              <div
                className={[
                  'ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)]',
                  isLeft ? 'md:mr-auto md:pr-2' : 'md:ml-auto md:pl-2',
                ].join(' ')}
              >
                <div className="card-premium p-7 sm:p-8 group relative overflow-hidden">
                  {/* Soft gold wash on hover */}
                  <div
                    className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'var(--gradient-gold-soft)' }}
                    aria-hidden
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 ring-1 ring-secondary/20">
                          <Briefcase className="h-4 w-4 text-secondary" strokeWidth={1.7} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-playfair text-xl font-semibold text-foreground leading-tight tracking-tight">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium text-sm mt-1 leading-snug">
                            {exp.company}
                            {exp.employmentType && (
                              <>
                                <span className="mx-1.5 text-secondary/40">·</span>
                                <span className="text-muted-foreground font-normal">
                                  {exp.employmentType}
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                      </div>

                      {exp.type === 'current' && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-soft-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bottom hairline */}
                  <span
                    className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-700 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
