import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'BTech in Computer Science and Engineering (AI)',
      institution: 'Vivekananda Global University',
      period: '2021 - 2025',
      grade: 'CGPA: 8.76',
      type: 'degree',
      icon: GraduationCap,
    },
    {
      degree: 'Board of Intermediate Education',
      institution: 'Sri Nalanda Junior College',
      period: '2019 - 2021',
      grade: 'Percentage: 98.4%',
      type: 'intermediate',
      icon: Award,
    },
    {
      degree: 'Board of Secondary Education',
      institution: 'Radhika Concept School',
      period: '2018 - 2019',
      grade: 'CGPA: 9.7',
      type: 'secondary',
      icon: Award,
    },
  ];

  const getGradientColors = (type: string) => {
    switch (type) {
      case 'degree':
        return 'from-blue-500 to-purple-600';
      case 'intermediate':
        return 'from-green-500 to-teal-600';
      case 'secondary':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
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
            Academic Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-heading text-foreground mb-4"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            Strong academic foundation in computer science and artificial intelligence
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            const gradientClass = getGradientColors(edu.type);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradientClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-secondary font-medium mb-3">
                    {edu.institution}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">{edu.grade}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;