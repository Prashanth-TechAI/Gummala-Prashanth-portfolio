import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'AI Developer',
      company: 'Telepathy Infotech Pvt Ltd',
      period: '2024/09 - Present',
      description:
        'Collaborating on real-world AI initiatives to develop, optimize, and deploy Gen AI models for solving complex business challenges.',
      type: 'current',
    },
    {
      title: 'Machine Learning Intern',
      company: 'Octopyder Services Pvt Ltd',
      period: '2024/05 - 2024/08',
      description:
        'Built an intrusion detection system for a client\'s webpage, enhancing security by identifying and mitigating potential threats effectively.',
      type: 'past',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary"
          >
            Career Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-heading text-foreground mb-4"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            Building expertise through hands-on experience in AI and machine learning
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-secondary font-medium mt-1">{exp.company}</p>
                      </div>
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;