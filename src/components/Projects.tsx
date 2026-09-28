import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import wednesShot from '@/assets/wednes-ai-screenshot.webp';
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
    title: 'PanelMind AI',
    description:
      'UPSC interview simulator: five LiveKit voice agents question the candidate aloud from their DAF, turn-taking enforced by a state machine (291 ms median turn), then five independent evaluators mark all seven official traits out of 275.',
    link: 'https://github.com/Prashanth-TechAI/Panel-Mind.ai',
    tags: ['Voice Agents', 'LiveKit', 'FastAPI', 'Next.js', 'PostgreSQL'],
  },
  {
    title: 'AI Newsdeck',
    description:
      'AI news-monitoring dashboard. A LangGraph agent plans each keyword search, checks results are on-topic, then Claude summarises, scores and ranks every article, refreshed hourly.',
    link: 'https://github.com/Prashanth-TechAI/AI-Newsdeck',
    tags: ['LangGraph', 'FastAPI', 'Claude', 'PostgreSQL', 'React'],
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
    minor: true,
    description:
      'A ChatGPT-like AI chatbot built with Flask and the Groq API, featuring real-time streaming responses and persistent conversation history.',
    link: 'https://github.com/Prashanth-TechAI/-AI-Chatbot-with-Groq-API',
    tags: ['Flask', 'Groq API', 'NLP', 'Real-time'],
  },
  {
    title: 'Face Recognition System',
    minor: true,
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
    title: 'Intrusion Detection System',
    minor: true,
    description:
      'Random-Forest classifier that monitors network traffic and flags anomalous, potentially malicious requests to a client website.',
    link: 'https://github.com/Prashanth-TechAI/INTRUSION-DETECTION-SYSTEM',
    tags: ['Machine Learning', 'Random Forest', 'Security', 'Python'],
  },
  {
    title: 'Jenni AI — Assistant',
    minor: true,
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

const featured = projects.find((p) => p.featured)!;
const others = projects.filter((p) => !p.featured);
const hiddenCount = others.filter((p) => p.minor).length;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  // Hidden projects are appended after the main list, never interleaved with it.
  const visible = showAll
    ? [...others.filter((p) => !p.minor), ...others.filter((p) => p.minor)]
    : others.filter((p) => !p.minor);

  return (
  <section id="projects" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="Projects"
        script="work"
        title="Notable projects"
        subtitle="A curated selection of AI systems I've designed, shipped, and learned from."
      />

      {/* Featured: black banner with the live product in a browser frame */}
      <Reveal y={24}>
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[2rem] bg-[#141414] text-white"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)' }}
          />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-5">
              <p className="-rotate-[3deg] font-script text-3xl text-secondary">Featured</p>
              <h3 className="mt-5 font-anton uppercase leading-[0.85] text-[clamp(3.5rem,8vw,6.5rem)]">
                {featured.title}
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-white/70">{featured.description}</p>
              <p className="mt-5 text-sm text-white/45">{featured.tags.join('  ·  ')}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-[#141414] transition-transform duration-300 group-hover:-translate-y-0.5">
                Visit live site
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            {/* Browser frame; tilts upright and lifts on hover */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:rotate-[1.5deg] lg:group-hover:rotate-0 lg:group-hover:-translate-y-1">
                <div className="flex items-center gap-2 border-b border-black/5 bg-[#F2F2F4] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-black/50">
                    wednes-ai.vercel.app
                  </span>
                </div>
                <img
                  src={wednesShot}
                  alt="WEDNES AI home page: Build AI Agents with SQL Agents"
                  width={1440}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        </a>
      </Reveal>

      {/* The rest: large editorial rows; each row turns black on hover */}
      <ul className="mt-10 border-t border-[#141414]/15">
        {visible.map((project) => (
          <li key={project.title} className="border-b border-[#141414]/15">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid items-center gap-3 rounded-2xl px-4 py-7 transition-colors duration-300 hover:bg-white/70 sm:px-6 lg:grid-cols-12 lg:gap-8"
            >
              <h3 className="font-anton text-3xl uppercase leading-none text-[#141414] transition-colors duration-300 group-hover:text-secondary sm:text-4xl lg:col-span-4">
                {project.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground lg:col-span-5">
                {project.description}
              </p>
              <div className="flex items-center justify-between gap-4 lg:col-span-3">
                <p className="text-sm text-foreground/55">
                  {project.tags.slice(0, 2).join(' · ')}
                </p>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-[#141414] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Smaller projects stay tucked away until asked for */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="inline-flex items-center gap-2 rounded-full border border-[#141414]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[#141414]/50 hover:bg-white"
        >
          {showAll ? 'Show fewer projects' : `Show ${hiddenCount} more projects`}
          <ChevronDown className={['h-4 w-4 transition-transform duration-300', showAll ? 'rotate-180' : ''].join(' ')} />
        </button>
      </div>
    </div>
  </section>
  );
};

export default Projects;
