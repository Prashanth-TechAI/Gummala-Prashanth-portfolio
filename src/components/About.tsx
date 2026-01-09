import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedNumber = ({
  target,
  suffix = '',
  start = 0,
  duration = 1.8,
  inView = false,
}: {
  target: number;
  suffix?: string;
  start?: number;
  duration?: number;
  inView?: boolean;
}) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(start, target, {
      duration,
      ease: 'easeOut',
      onUpdate: latest => setValue(Number(latest.toFixed(0))),
    });

    return () => controls.stop();
  }, [inView, start, target, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary"
          >
            About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-heading text-foreground mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant border border-border/50 text-left space-y-4">
              <p className="text-body text-muted-foreground leading-relaxed text-base sm:text-lg">
                I'm a results-driven AI Developer with a passion for designing intelligent systems
                that address real-world challenges. My background in Gen AI, machine learning, deep learning,
                and natural language processing allows me to explore emerging technologies and
                create innovative solutions. I thrive in collaborative environments where I can
                contribute to groundbreaking projects and continually expand my skill set.
              </p>

              {/* WEDNES AI mention */}
              <p className="text-body text-muted-foreground leading-relaxed text-base sm:text-lg">
                I also founded <span className="font-semibold text-secondary">WEDNES AI</span> — 
                a no-code AI platform to build and deploy AI agents like RAG Agents, SQL agents, Image Gen Agents
                and smart assistants with ease.
              </p>
              <a
                href="https://wednes-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
              >
                See a Demo
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {[
              { number: 2, label: 'Years Experience', suffix: '+' },
              { number: 15, label: 'Projects Completed', suffix: '+' },
              { number: 10, label: 'Technologies Mastered', suffix: '+' },
              { number: 100, label: 'Client Satisfaction', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:shadow-elegant transition-all duration-300"
              >
                <div className="text-3xl font-bold text-secondary mb-2">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={isInView} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
