import { ArrowUpRight, Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const projects = [
  {
    title: 'WEDNES AI',
    description:
      'A no-code platform to build, preview, and download custom AI agents — RAG agents, SQL/data agents, image generation agents — through a simple step-by-step interface.',
    link: 'https://wednes-ai.vercel.app/',
    tags: ['No-Code', 'AI Agents', 'RAG', 'Platform'],
    featured: true,
  },
  {
    title: 'Get JustDial',
    description:
      'Web application that lets users search businesses and services on JustDial with AI-powered search and intelligent filtering.',
    link: 'https://github.com/Prashanth-TechAI/Get-Justdial',
    tags: ['AI', 'Web Scraping', 'Python', 'FastAPI'],
  },
  {
    title: 'AI Safe Drive',
    description:
      'Driver-monitoring system using deep CNNs — detects facial emotion, plays mood-matched music, and triggers an alarm if the driver is drowsy.',
    link: 'https://github.com/Prashanth-TechAI/AI-Safe-Drive',
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'OpenCV'],
  },
  {
    title: 'AI Chatbot with Groq',
    description:
      'A ChatGPT-like AI chatbot built with Flask and the Groq API, featuring real-time streaming responses and persistent conversation history.',
    link: 'https://github.com/Prashanth-TechAI/-AI-Chatbot-with-Groq-API',
    tags: ['Flask', 'Groq API', 'NLP', 'Real-time'],
  },
  {
    title: 'Intrusion Detection System',
    description:
      'IDS using a Random-Forest classifier on network traffic — 76% accuracy on anomaly detection across the test corpus.',
    link: 'https://github.com/Prashanth-TechAI/INTRUSION-DETECTION-SYSTEM',
    tags: ['Machine Learning', 'Random Forest', 'Security', 'Python'],
  },
  {
    title: 'Face Recognition System',
    description:
      'Real-time face recognition with OpenCV, dlib, and face_recognition, backed by SQLite for secure user identification.',
    link: 'https://github.com/Prashanth-TechAI/Face-Recogntion-System',
    tags: ['OpenCV', 'Dlib', 'SQLite', 'Real-time'],
  },
  {
    title: 'Deepfake Detection',
    description:
      'API-based platform identifying deepfake audio and video with deep-learning models — practical media-authenticity checks.',
    link: 'https://github.com/Prashanth-TechAI/Deepfake-Detection-System',
    tags: ['Deep Learning', 'API', 'Media', 'Authentication'],
  },
  {
    title: 'Jenni AI — Assistant',
    description:
      'An intelligent voice assistant that handles natural-language commands for web search, music, note-taking, and more.',
    link: 'https://github.com/Prashanth-TechAI/Jenni.AI',
    tags: ['NLP', 'Voice', 'Assistant', 'Python'],
  },
  {
    title: 'Human Emotion Detection',
    description:
      'Deep CNN trained on FER-2013 to classify facial emotions across seven categories — real-time emotion recognition.',
    link: 'https://github.com/Prashanth-TechAI/Human-Emotion-Detection',
    tags: ['CNN', 'Emotion Recognition', 'FER-2013', 'Deep Learning'],
  },
];

const Projects = () => (
  <section id="projects" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

    <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Selected Work"
        title="Notable projects"
        subtitle="A curated selection of AI systems I've designed, shipped, and learned from."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={Math.min(index, 4) * 0.08}
            x={index % 2 === 0 ? -90 : 90}
            y={20}
          >
            <article className="card-premium p-7 group flex flex-col relative overflow-hidden h-full">
              {/* Featured ribbon */}
              {project.featured && (
                <div className="absolute -top-px right-6 px-3 py-1 rounded-b-md bg-gradient-gold shadow-emboss-sm flex items-center gap-1.5">
                  <Star className="h-3 w-3 text-primary" fill="currentColor" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
                    Featured
                  </span>
                </div>
              )}

              {/* Soft gold wash on hover */}
              <div
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'var(--gradient-gold-soft)' }}
                aria-hidden
              />

              <div className="relative flex flex-col flex-1">
                {/* Project number */}
                <div className="text-overline text-secondary/70 mb-3">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 tracking-tight leading-tight group-hover:text-secondary transition-colors duration-500">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.7rem] font-medium tracking-wide rounded-full border border-border/60 bg-accent/60 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start link-gold text-sm font-medium text-foreground hover:text-secondary transition-colors duration-300"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Bottom hairline */}
              <span
                className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-700 group-hover:scale-x-100"
                aria-hidden
              />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
