import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'WEDNES AI',
      description:
        'WEDNES AI is a no-code platform to build, preview, and download custom AI agents — including RAG agents, SQL/data agents, and image generation agents — through a simple step-by-step interface.',
      link: 'https://wednes-ai.vercel.app/',
      tags: ['No-Code', 'AI Agents', 'RAG', 'Platform'],
    },
    {
      title: 'Get JustDial',
      description:
        'Developed a web application that allows users to search for businesses and services on JustDial using AI-powered search and filtering capabilities.',
      link: 'https://github.com/Prashanth-TechAI/Get-Justdial',
      tags: ['AI', 'Web Scraping', 'Python', 'FastAPI'],
    },
    {
      title: 'AI Safe Drive',
      description:
        'Developed a driver monitoring system using deep CNNs to detect facial emotions, dynamically play music based on mood, and trigger an alarm if the driver falls asleep.',
      link: 'https://github.com/Prashanth-TechAI/AI-Safe-Drive',
      tags: ['Deep Learning', 'Computer Vision', 'Python', 'OpenCV'],
    },
    {
      title: 'AI Chatbot with Groq',
      description:
        'Implemented an AI-powered chatbot using Flask and the Groq API that resemble exaclty ChatGPT, featuring real-time responses and conversation history.',
      link: 'https://github.com/Prashanth-TechAI/-AI-Chatbot-with-Groq-API',
      tags: ['Flask', 'Groq API', 'NLP', 'Real-time'],
    },
    {
      title: 'Intrusion Detection System',
      description:
        'Built an IDS leveraging a Random Forest model to classify network traffic, achieving a 76% accuracy in anomaly detection.',
      link: 'https://github.com/Prashanth-TechAI/INTRUSION-DETECTION-SYSTEM',
      tags: ['Machine Learning', 'Random Forest', 'Security', 'Python'],
    },
    {
      title: 'Face Recognition System',
      description:
        'Created a real-time face recognition application with OpenCV, Dlib, Face Recognition libraries, and SQLite for secure user identification.',
      link: 'https://github.com/Prashanth-TechAI/Face-Recogntion-System',
      tags: ['OpenCV', 'Dlib', 'SQLite', 'Real-time'],
    },
    {
      title: 'Deepfake Detection System',
      description:
        'Developed an API-based platform to identify deepfake audio and video using advanced deep learning models, enhancing media authenticity checks.',
      link: 'https://github.com/Prashanth-TechAI/Deepfake-Detection-System',
      tags: ['Deep Learning', 'API', 'Media Processing', 'Authentication'],
    },
    {
      title: 'Jenni AI - Assistant',
      description:
        'Created an intelligent assistant that understands natural language voice commands for tasks like web searches, music playback, note-taking, and more.',
      link: 'https://github.com/Prashanth-TechAI/Jenni.AI',
      tags: ['NLP', 'Voice Recognition', 'AI Assistant', 'Python'],
    },
    {
      title: 'AI Human Emotion Detection',
      description:
        'Trained a deep CNN on the FER-2013 dataset to classify facial emotions into seven categories, enabling real-time emotion recognition.',
      link: 'https://github.com/Prashanth-TechAI/Human-Emotion-Detection',
      tags: ['CNN', 'Emotion Recognition', 'FER-2013', 'Deep Learning'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
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
            Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-heading text-foreground mb-4"
          >
            Notable Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of innovative AI solutions and cutting-edge technology implementations
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, x: -20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 60, x: -20 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  View Project
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;