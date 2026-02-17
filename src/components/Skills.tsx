import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Book,
  Database,
  GitBranch,
  Rocket,
  Laptop,
  Sliders,
  Globe,
  Palette,
  Users,
  FileText,
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Python [ Pandas, NumPy, Matplotlib, Scikit-learn, PyTorch, Tensorflow, Keras ..etc ]',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: Globe,
      title: 'Cloud Services',
      description: 'AWS, Microsoft Azure, Google cloud vision API, Groq Cloud, NVIDIA NIM',
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB, Pinecone, Qdrant, Redis, Neo4j',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git, GitHub, Gitlab, Huggingface',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      icon: Rocket,
      title: 'Advanced AI Techniques',
      description: 'Gen AI, ML, LLMs, Transformers, RAG, Agentic RAG, OCR Models, STT, TTS, VLMs',
      color: 'text-red-500',
      bg: 'bg-red-500/10',
    },
    {
      icon: Laptop,
      title: 'Development Environments',
      description: 'Google Colab, VS Code, Jupyter Notebook, Cursor, Windsurf',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
    },
    {
      icon: Users,
      title: 'AI Agents',
      description: 'CrewAI, Smola Agents, OpenAI agent SDK, Agno AI',
      color: 'text-teal-500',
      bg: 'bg-teal-500/10',
    },
    {
      icon: Sliders,
      title: 'UI Tools',
      description: 'Streamlit, Gradio',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10',
    },
    {
      icon: Book,
      title: 'AWS Services',
      description: 'AWS Textract, BEDROCK, S3, EC2, AWS REKOGNITION',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      icon: Palette,
      title: 'Frameworks',
      description: 'Flask, Django, FastAPI, LangChain, LlamaIndex, Langraph, Langsmith, Livekit',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
    },
    {
      icon: FileText,
      title: 'API Doc & Testing',
      description: 'Swagger, Postman, Thunderclient',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: Rocket,
      title: 'Tools',
      description: 'MLFlow, Prefect, Celery, Jinja Templates, HuggingfaceHub, Docker, Grafana, Gunicorn,..etc',
      color: 'text-violet-500',
      bg: 'bg-violet-500/10',
    },
    {
      icon: Users,
      title: 'Soft Skills',
      description: 'Problem Solving, Teamwork, Communication',
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary"
          >
            Skills & Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-heading text-foreground mb-4"
          >
            Technical Arsenal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building intelligent solutions
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, x: -20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 60, x: -20 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 float-gentle"
              >
                {/* Background Effect */}
                <div className={`absolute inset-0 ${skill.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg ${skill.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${skill.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current ${skill.color} opacity-0 group-hover:opacity-20 transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;