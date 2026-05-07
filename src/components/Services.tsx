import { Bot, TrendingUp, Camera } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

// Card N comes from: left, bottom, right
const dirFor = (i: number): { x: number; y: number } => {
  const m = i % 3;
  if (m === 0) return { x: -90, y: 0 };
  if (m === 2) return { x: 90, y: 0 };
  return { x: 0, y: 80 };
};

const services = [
  {
    icon: Bot,
    title: 'Generative AI & LLM Solutions',
    description:
      'Custom generative-AI applications and fine-tuned large language models for chatbots, content generation, and advanced NLP — built with reliable RAG pipelines.',
    accent: 'from-indigo-400/40 to-violet-500/40',
  },
  {
    icon: TrendingUp,
    title: 'Machine Learning & Deployment',
    description:
      'End-to-end ML pipelines designed, trained and deployed for performance, scalability and real-time insight in production environments.',
    accent: 'from-emerald-400/40 to-teal-500/40',
  },
  {
    icon: Camera,
    title: 'Computer Vision & Image Analysis',
    description:
      'OCR systems, object detection, facial recognition, emotion detection — deep-learning vision applications shaped to the problem at hand.',
    accent: 'from-amber-400/40 to-rose-500/40',
  },
];

const Services = () => (
  <section id="services" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
    {/* Hairline gold dividers top & bottom */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Services"
        title="What I offer"
        subtitle="Comprehensive AI and ML solutions, tailored carefully to the shape of your problem."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          const d = dirFor(i);
          return (
            <Reveal key={service.title} x={d.x} y={d.y} delay={i * 0.1}>
              <article className="card-premium p-8 h-full flex flex-col group overflow-hidden">
                {/* Soft gradient wash on hover */}
                <div
                  className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                  aria-hidden
                />

                {/* Icon plate — embossed gold */}
                <div className="relative mb-7">
                  <div className="inline-flex p-[1px] rounded-2xl bg-gradient-gold shadow-emboss-sm">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card">
                      <Icon className="h-6 w-6 text-secondary" strokeWidth={1.6} />
                    </div>
                  </div>
                </div>

                <h3 className="relative font-playfair text-2xl font-semibold text-foreground mb-4 leading-tight tracking-tight">
                  {service.title}
                </h3>

                <p className="relative text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom hairline that draws on hover */}
                <span
                  className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-700 group-hover:scale-x-100"
                  aria-hidden
                />
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
