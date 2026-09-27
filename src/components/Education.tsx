import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const education = [
  {
    degree: 'BTech — Computer Science & Engineering (AI)',
    institution: 'Vivekananda Global University',
    period: '2021 — 2025',
    grade: 'CGPA · 8.76',
  },
  {
    degree: 'Board of Intermediate Education',
    institution: 'Sri Nalanda Junior College',
    period: '2019 — 2021',
    grade: 'Percentage · 98.4%',
  },
  {
    degree: 'Board of Secondary Education',
    institution: 'Radhika Concept School',
    period: '2018 — 2019',
    grade: 'CGPA · 9.7',
  },
];

const Education = () => (
  <section id="education" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="Education"
        script="academics"
        title="Education"
        subtitle="A grounding in computer science and artificial intelligence."
      />

      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {education.map((edu, index) => {
          const [gradeLabel, gradeValue] = edu.grade.split(' · ');
          return (
            <Reveal key={edu.degree} y={24} delay={index * 0.06}>
              <article className="card-clean flex h-full flex-col p-7 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">{edu.period}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-foreground">{edu.degree}</h3>
                <p className="mt-2 text-muted-foreground">{edu.institution}</p>

                {/* Grade, set large in the name's condensed face */}
                <div className="mt-8 flex items-end justify-between border-t border-[#E7E7EA] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {gradeLabel}
                  </span>
                  <span className="font-anton text-5xl leading-none text-[#141414]">{gradeValue}</span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;
