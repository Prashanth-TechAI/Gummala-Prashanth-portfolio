import {
  siCelery, siCrewai, siDeepgram, siDjango, siDocker, siElevenlabs, siFastapi, siFlask, siGit, siGithub,
  siGooglecloud, siGradio, siGrafana, siGunicorn, siHuggingface, siJupyter, siKeras, siLangchain, siLanggraph,
  siLivekit, siMlflow, siMongodb, siMysql, siNeo4j, siNumpy, siNvidia, siOpencv, siPandas, siPostgresql,
  siPostman, siPrefect, siPython, siPytorch, siQdrant, siRedis, siScikitlearn, siStreamlit, siTensorflow,
  type SimpleIcon,
} from 'simple-icons';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

type Tool = { name: string; icon: SimpleIcon };

// Brand colours that would vanish on a white tile (white, pale yellow, neon green) fall back to ink.
const ink = (hex: string) => {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.72 ? '#141414' : `#${hex}`;
};

// Four rows, AI first. Brands without an official open logo are listed by name, not faked.
const rows: { title: string; tools: Tool[]; more?: string }[] = [
  {
    title: 'AI & LLMs',
    tools: [
      { name: 'Hugging Face', icon: siHuggingface },
      { name: 'NVIDIA NIM', icon: siNvidia },
      { name: 'LangChain', icon: siLangchain },
      { name: 'LangGraph', icon: siLanggraph },
      { name: 'CrewAI', icon: siCrewai },
      { name: 'LiveKit', icon: siLivekit },
      { name: 'Deepgram', icon: siDeepgram },
      { name: 'ElevenLabs', icon: siElevenlabs },
    ],
    more: 'OpenAI, Groq, AWS Bedrock, LlamaIndex, LangSmith, Agno, smolagents · RAG, Agentic RAG, VLMs, STT/TTS',
  },
  {
    title: 'ML & Vision',
    tools: [
      { name: 'Python', icon: siPython },
      { name: 'PyTorch', icon: siPytorch },
      { name: 'TensorFlow', icon: siTensorflow },
      { name: 'Keras', icon: siKeras },
      { name: 'scikit-learn', icon: siScikitlearn },
      { name: 'Pandas', icon: siPandas },
      { name: 'NumPy', icon: siNumpy },
      { name: 'OpenCV', icon: siOpencv },
      { name: 'Cloud Vision', icon: siGooglecloud },
      { name: 'Jupyter', icon: siJupyter },
    ],
    more: 'Matplotlib, OCR, AWS Textract, AWS Rekognition',
  },
  {
    title: 'Data',
    tools: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'MySQL', icon: siMysql },
      { name: 'MongoDB', icon: siMongodb },
      { name: 'Redis', icon: siRedis },
      { name: 'Neo4j', icon: siNeo4j },
      { name: 'Qdrant', icon: siQdrant },
    ],
    more: 'Pinecone',
  },
  {
    title: 'Backend & MLOps',
    tools: [
      { name: 'FastAPI', icon: siFastapi },
      { name: 'Flask', icon: siFlask },
      { name: 'Django', icon: siDjango },
      { name: 'Docker', icon: siDocker },
      { name: 'MLflow', icon: siMlflow },
      { name: 'Prefect', icon: siPrefect },
      { name: 'Celery', icon: siCelery },
      { name: 'Grafana', icon: siGrafana },
      { name: 'Gunicorn', icon: siGunicorn },
      { name: 'Streamlit', icon: siStreamlit },
      { name: 'Gradio', icon: siGradio },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Postman', icon: siPostman },
    ],
    more: 'AWS (S3, EC2, Lambda, SES), Azure, Swagger',
  },
];

const Skills = () => (
  <section id="skills" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="Skills"
        script="toolkit"
        title="The technical arsenal"
        subtitle="A carefully assembled toolkit for shipping intelligent, production-grade systems."
      />

      <div className="border-t border-[#141414]/10">
        {rows.map((row, i) => (
          <Reveal key={row.title} y={20} delay={i * 0.05}>
            <div className="grid gap-5 border-b border-[#141414]/10 py-8 lg:grid-cols-12 lg:gap-10">
              <h3 className="font-anton text-3xl uppercase leading-none text-[#141414] lg:col-span-3 lg:pt-1">
                {row.title}
              </h3>

              <div className="lg:col-span-9">
                <ul className="flex flex-wrap gap-2.5">
                  {row.tools.map((tool) => (
                    <li
                      key={tool.name}
                      style={{ '--brand': ink(tool.icon.hex) } as React.CSSProperties}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-[#141414]/[0.08] bg-white/80 py-2 pl-2.5 pr-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#141414]/20 hover:shadow-[0_12px_24px_-16px_rgba(0,0,0,0.35)]"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden>
                        <path
                          d={tool.icon.path}
                          className="fill-[var(--brand)]"
                        />
                      </svg>
                      <span className="text-sm font-medium text-foreground/85">{tool.name}</span>
                    </li>
                  ))}
                </ul>
                {row.more && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/70">+ </span>
                    {row.more}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
