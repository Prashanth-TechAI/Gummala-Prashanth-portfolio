import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Briefcase, UserX, ArrowDown, Linkedin, Github, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import cutout from '@/assets/prashanth-cutout.webp';
import resumeFile from '@/assets/resume.pdf';

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '2+', label: 'Years in AI' },
  { value: '15+', label: 'Projects shipped' },
  { value: '10+', label: 'Technologies' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/gummala-prashanth-1a34a3273', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Prashanth-TechAI', label: 'GitHub' },
  { icon: Smile, href: 'https://huggingface.co/prashanth970', label: 'Hugging Face' },
];

/**
 * Hero — poster layout: a giant name set behind a cut-out portrait, a brush
 * script role overlapping both, soft colour glows at the edges, and only a few
 * lines of information. One entrance sequence on load; nothing moves after.
 */
const Hero = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { toast } = useToast();

  const handleRecruiterClick = () => {
    window.open(resumeFile, '_blank');
    setShowOptions(false);
  };
  const handleNotRecruiterClick = () => {
    toast({
      title: 'Thanks for visiting!',
      description: 'Feel free to explore the portfolio. If anything sparks a conversation, the contact section is just below.',
      duration: 4000,
    });
    setShowOptions(false);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden lg:h-[100svh] lg:min-h-[680px]"
    >
      {/* Soft grainy glows at the edges, as on the poster */}
      <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-48 top-[30%] h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #F4845F 0%, #F2A7C3 45%, transparent 72%)' }}
        />
        <div
          className="absolute -right-44 top-[12%] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #F4845F 0%, #E9B872 35%, #C9B6F2 60%, transparent 75%)' }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 pb-14 pt-24 lg:block lg:h-full lg:p-0">
        {/* Giant name, behind the portrait */}
        <div className="relative z-10 lg:absolute lg:left-1/2 lg:top-[14%] lg:-translate-x-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="whitespace-nowrap font-anton uppercase leading-[0.82] text-[#141414] text-[19vw] lg:text-[clamp(6rem,16.5vw,19rem)]"
          >
            <span className="sr-only">Gummala </span>
            Prashanth
          </motion.h1>
        </div>

        {/* Cut-out portrait, in front of the name */}
        <div className="relative z-20 -mt-[3vw] h-[62svh] max-h-[540px] lg:absolute lg:bottom-0 lg:left-[16%] lg:mt-0 lg:h-[86%] lg:max-h-none">
          <motion.img
            src={cutout}
            alt="Gummala Prashanth"
            width={755}
            height={1308}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className="h-full w-auto select-none object-contain object-bottom [filter:drop-shadow(14px_16px_18px_rgba(0,0,0,0.28))]"
            draggable={false}
            {...{ fetchpriority: 'high' }}
          />
        </div>

        {/* Brush-script role, overlapping name and portrait */}
        <div className="relative z-30 -mt-[18vw] lg:absolute lg:right-[5%] lg:top-[31%] lg:mt-0">
          <motion.p
            // The clip box reaches well past the text so descenders like the "g" are never cut.
            initial={{ clipPath: 'inset(-40% 100% -60% -10%)' }}
            animate={{ clipPath: 'inset(-40% -10% -60% -10%)' }}
            transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
            className="-rotate-[4deg] whitespace-nowrap pb-4 pr-6 font-script leading-none text-secondary text-[17vw] lg:text-[clamp(4.5rem,10.5vw,11.5rem)]"
            style={{ textShadow: '6px 8px 10px rgba(0,0,0,0.22)' }}
          >
            AI Engineer
          </motion.p>
        </div>

        {/* A few lines of information */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="relative z-30 mt-2 flex max-w-[34rem] flex-col items-center text-center lg:absolute lg:right-[6%] lg:top-[57%] lg:mt-0 lg:items-end lg:text-right"
        >
          {/* Status pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
            <span className="text-foreground/30">/</span>
            Bangalore, India
          </span>

          <p className="mt-5 text-xl font-medium leading-snug text-foreground sm:text-2xl">
            Generative AI engineer crafting intelligent systems with LLMs, voice agents and computer vision.
          </p>

          {/* Stats, set in the same condensed face as the name */}
          <dl className="mt-6 flex items-stretch divide-x divide-foreground/15">
            {stats.map((st) => (
              <div key={st.label} className="px-5 first:pl-0 last:pr-0 lg:text-right">
                <dt className="sr-only">{st.label}</dt>
                <dd className="font-anton text-4xl leading-none text-[#141414] sm:text-5xl">{st.value}</dd>
                <dd className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {st.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={() => setShowOptions((v) => !v)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-2 pr-6 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-[#141414] transition-transform duration-300 group-hover:rotate-[-8deg]">
                <Download className="h-4 w-4" />
              </span>
              View Resume
            </button>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/50 hover:bg-white"
            >
              Explore Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-1.5 sm:ml-2">
              {socials.map((so) => (
                <a
                  key={so.label}
                  href={so.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={so.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 bg-white/70 text-foreground/70 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <so.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute -bottom-14 left-1/2 z-40 flex -translate-x-1/2 gap-2 lg:left-auto lg:right-0 lg:translate-x-0"
                >
                  <Button size="sm" onClick={handleRecruiterClick} className="btn-primary h-auto whitespace-nowrap px-4 py-2 text-xs">
                    <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                    I'm a Recruiter
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleNotRecruiterClick}
                    className="h-auto whitespace-nowrap rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-xs text-foreground hover:bg-white"
                  >
                    <UserX className="mr-1.5 h-3.5 w-3.5" />
                    Just Browsing
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
