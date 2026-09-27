import { ArrowDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const About = () => (
  <section id="about" className="relative py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeader
        word="About"
        script="me"
        title="Crafting intelligence with intent"
        subtitle="A short introduction — what drives me and what I'm building right now."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Bio */}
        <Reveal y={24} className="lg:col-span-7">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 sm:text-xl">
            <p>
              I'm a results-driven <span className="font-semibold text-foreground">AI Engineer</span> with a
              passion for designing intelligent systems that solve real-world challenges. My background spans
              Generative&nbsp;AI, machine learning, deep learning, and natural language processing — letting me
              explore emerging technologies and craft thoughtful, production-ready solutions.
            </p>
            <p>
              I also founded <span className="font-semibold text-foreground">WEDNES&nbsp;AI</span> — a no-code
              platform to build and deploy AI agents like RAG agents, SQL agents, image generation agents and
              smart assistants with the ease of a few clicks.
            </p>
          </div>
        </Reveal>

        {/* What he's working on right now */}
        <Reveal y={24} delay={0.1} className="lg:col-span-5">
          <a
            href="#experience"
            className="group relative block overflow-hidden rounded-3xl border border-[#141414]/10 bg-white/80 p-8 text-[#141414] shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)' }}
            />
            <p className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              Currently
            </p>
            <p className="relative mt-4 font-anton text-4xl uppercase leading-[0.95] sm:text-5xl">
              AI Engineer at AI&nbsp;Nexus
            </p>
            <p className="relative mt-5 leading-relaxed text-muted-foreground">
              Leading a real-estate AI initiative for the German market: voice agents handling live calls,
              AI-driven lead qualification and fully automated agent workflows.
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-2.5 text-sm font-semibold text-white">
              See my experience
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
