import { Bot, TrendingUp, Camera } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const services = [
  {
    icon: Bot,
    title: 'Generative AI & LLM Solutions',
    description:
      'Custom generative-AI applications and fine-tuned large language models for chatbots, content generation, and advanced NLP — built with reliable RAG pipelines.',
  },
  {
    icon: TrendingUp,
    title: 'Machine Learning & Deployment',
    description:
      'End-to-end ML pipelines designed, trained and deployed for performance, scalability and real-time insight in production environments.',
  },
  {
    icon: Camera,
    title: 'Computer Vision & Image Analysis',
    description:
      'OCR systems, object detection, facial recognition, emotion detection — deep-learning vision applications shaped to the problem at hand.',
  },
];

const Services = () => (
  <section id="services" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="Services"
        script="expertise"
        title="What I offer"
        subtitle="Comprehensive AI and ML solutions, tailored carefully to the shape of your problem."
      />

      {/* One black band split into three columns, instead of three separate boxes */}
      <Reveal y={24}>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#141414] text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)' }}
          />
          <div className="relative grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group flex flex-col p-8 sm:p-10 lg:p-12">
                  <Icon className="h-7 w-7 text-secondary" strokeWidth={1.6} />
                  <h3 className="mt-10 font-anton text-3xl uppercase leading-[1.02] sm:text-4xl">
                    {service.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-5 block h-0.5 w-10 bg-secondary transition-[width] duration-500 group-hover:w-24"
                  />
                  <p className="mt-6 leading-relaxed text-white/65">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
