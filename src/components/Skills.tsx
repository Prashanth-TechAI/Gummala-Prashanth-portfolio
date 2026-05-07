import {
  Code, Book, Database, GitBranch, Rocket, Laptop,
  Sliders, Globe, Palette, Users, FileText,
  AudioLines, Cloud, Cpu,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const skills = [
  {
    icon: Code,
    title: 'Programming',
    description:
      'Python · Pandas · NumPy · Matplotlib · Scikit-learn · PyTorch · TensorFlow · Keras',
  },
  {
    icon: Globe,
    title: 'Cloud Services',
    description:
      'AWS · Microsoft Azure · Google Cloud Vision · Groq · NVIDIA NIM · OpenAI',
  },
  {
    icon: Cloud,
    title: 'AWS Services',
    description: 'Textract · Bedrock · S3 · EC2 · Rekognition · Lambda · SES',
  },
  {
    icon: Database,
    title: 'Databases',
    description:
      'MySQL · PostgreSQL · MongoDB · Pinecone · Qdrant · Redis · Neo4j',
  },
  {
    icon: Rocket,
    title: 'Advanced AI',
    description:
      'Gen AI · LLMs · Transformers · RAG · Agentic RAG · OCR · STT · TTS · VLMs',
  },
  {
    icon: AudioLines,
    title: 'Voice AI',
    description:
      'Deepgram (STT) · ElevenLabs (TTS) · LiveKit · Real-time voice agents',
  },
  {
    icon: Users,
    title: 'AI Agents',
    description: 'CrewAI · Smola Agents · OpenAI Agent SDK · Agno AI · LangGraph',
  },
  {
    icon: Palette,
    title: 'Frameworks',
    description:
      'Flask · Django · FastAPI · LangChain · LlamaIndex · LangGraph · LangSmith · LiveKit',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Git · GitHub · GitLab · HuggingFace',
  },
  {
    icon: Laptop,
    title: 'Dev Environments',
    description:
      'Claude Code · Cursor · Windsurf · VS Code · Jupyter · Google Colab',
  },
  {
    icon: Sliders,
    title: 'UI Tools',
    description: 'Streamlit · Gradio',
  },
  {
    icon: FileText,
    title: 'API & Testing',
    description: 'Swagger · Postman · Thunder Client',
  },
  {
    icon: Cpu,
    title: 'Tools & Ops',
    description:
      'MLflow · Prefect · Celery · Jinja · HF Hub · Docker · Grafana · Gunicorn',
  },
  {
    icon: Book,
    title: 'Soft Skills',
    description: 'Problem solving · Teamwork · Communication',
  },
];

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
  >
    <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Skills & Expertise"
        title="The technical arsenal"
        subtitle="A carefully assembled toolkit for shipping intelligent, production-grade systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Reveal
              key={skill.title}
              delay={Math.min(index, 4) * 0.08}
              x={index % 2 === 0 ? -80 : 80}
              y={20}
            >
              <article className="card-premium p-6 group relative overflow-hidden h-full">
                <div
                  className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'var(--gradient-gold-soft)' }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 ring-1 ring-secondary/20 mb-4 group-hover:bg-secondary/15 group-hover:ring-secondary/40 transition-colors duration-500">
                    <Icon className="h-5 w-5 text-secondary" strokeWidth={1.7} />
                  </div>

                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 tracking-tight">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <span
                  className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent transition-transform duration-700 group-hover:scale-x-100"
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

export default Skills;
