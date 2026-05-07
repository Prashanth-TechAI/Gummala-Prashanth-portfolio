import {
  motion, useInView, useScroll, useTransform, useMotionValueEvent,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Sparkles, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

/**
 * ScrollCounter — value ticks up as the user scrolls *through* the stats row.
 * The number is bound to scroll progress, not a one-shot timeline. This is the
 * Apple-page trick where stats animate while the section is in motion.
 */
const ScrollCounter = ({
  target,
  suffix = '',
  scrollRef,
}: {
  target: number;
  suffix?: string;
  scrollRef: React.RefObject<HTMLElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 90%', 'end 60%'],
  });
  const display = useTransform(scrollYProgress, (p) =>
    Math.round(Math.max(0, Math.min(1, p)) * target),
  );
  const [value, setValue] = useState(0);
  useMotionValueEvent(display, 'change', (v) => setValue(v));
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const stats = [
  { number: 2, label: 'Years Experience', suffix: '+' },
  { number: 15, label: 'Projects Shipped', suffix: '+' },
  { number: 10, label: 'Technologies Mastered', suffix: '+' },
  { number: 100, label: 'Client Satisfaction', suffix: '%' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  void isInView; // (no-op — kept for future viewport-driven copy)

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting intelligence with intent"
          subtitle="A short introduction — what drives me and what I'm building right now."
        />

        {/* Quote-style biography card */}
        <Reveal y={90} delay={0.1}>
          <div className="relative max-w-4xl mx-auto">
            <div className="card-premium gold-corners p-6 sm:p-8 md:p-12 overflow-hidden">
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              <Quote
                className="absolute -top-2 -left-2 h-24 w-24 text-secondary/[0.07] -rotate-12"
                aria-hidden
              />

              <div className="relative space-y-6">
                <p className="text-body sm:text-lg text-foreground/85 leading-relaxed">
                  I'm a results-driven{' '}
                  <span className="font-semibold text-gold-gradient">AI Developer</span>{' '}
                  with a passion for designing intelligent systems that solve real-world
                  challenges. My background spans Generative&nbsp;AI, machine learning,
                  deep learning, and natural language processing — letting me explore
                  emerging technologies and craft thoughtful, production-ready solutions.
                </p>

                <div className="ornament my-2 justify-start">
                  <span className="ornament-line w-10" />
                  <span className="ornament-dot" />
                </div>

                <p className="text-body sm:text-lg text-foreground/85 leading-relaxed">
                  I also founded{' '}
                  <span className="font-semibold text-secondary">WEDNES&nbsp;AI</span>{' '}
                  — a no-code platform to build and deploy AI agents like RAG agents,
                  SQL agents, image generation agents and smart assistants with the
                  ease of a few clicks.
                </p>

                <a
                  href="https://wednes-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-emboss hover:shadow-emboss-lg transition-all duration-500 hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4 text-secondary" />
                  See WEDNES AI in action
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats — numbers tick up as the user scrolls through this row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.1 + i * 0.12}
              x={i % 2 === 0 ? -80 : 80}
              y={20}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card-premium p-5 sm:p-7 text-center group h-full"
              >
                <div className="font-playfair text-4xl sm:text-5xl font-bold text-gold-gradient">
                  <ScrollCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    scrollRef={statsRef}
                  />
                </div>
                <div className="ornament mt-3 justify-center">
                  <span className="ornament-line !w-6" />
                  <span className="ornament-dot !h-1 !w-1" />
                  <span className="ornament-line !w-6" />
                </div>
                <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
