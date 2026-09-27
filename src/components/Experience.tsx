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
    period: 'Mar 2026 — Present',
    location: 'Bangalore · On-site',
    description:
      'Leading a real-estate AI initiative for the German market — building fully automated workflows powered by AI agents, voice agents handling live call systems, and AI-driven lead qualification pipelines.',
    type: 'current',
  },
  {
    title: 'AI Developer',
    company: 'Telepathy Infotech Pvt Ltd',
    employmentType: 'Full-time',
    period: 'Sep 2024 — Feb 2026',
    description:
      'Collaborated on real-world AI initiatives — developing, optimising and deploying generative-AI models that solved complex business challenges end-to-end.',
    type: 'past',
  },
  {
    title: 'Machine Learning Intern',
    company: 'Octopyder Services Pvt Ltd',
    employmentType: 'Internship',
    period: 'May 2024 — Aug 2024',
    description:
      "Built an intrusion-detection system for a client's webpage — strengthening security by identifying and mitigating threats before they took hold.",
    type: 'past',
  },
];

const Experience = () => (
  <section id="experience" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="Experience"
        script="career"
        title="Professional experience"
        subtitle="Building craft through hands-on work in AI and machine learning."
      />

      {/* Timeline: dates on the left rail, role and details on the right */}
      <ol className="relative">
        {experiences.map((exp, index) => (
          <Reveal key={exp.title} y={20} delay={index * 0.06}>
            <li className="grid gap-4 border-t border-[#E7E7EA] py-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {exp.period}
                </p>
                {exp.location && <p className="mt-2 text-sm text-muted-foreground">{exp.location}</p>}
                {exp.type === 'current' && (
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#141414] px-3 py-1 text-xs font-semibold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                    Current role
                  </span>
                )}
              </div>

              <div className="lg:col-span-8">
                <h3 className="font-anton text-4xl uppercase leading-none text-[#141414] sm:text-5xl">{exp.title}</h3>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  {exp.company}
                  {exp.employmentType && (
                    <span className="font-normal text-muted-foreground"> · {exp.employmentType}</span>
                  )}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">{exp.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
