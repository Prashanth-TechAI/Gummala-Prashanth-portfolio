import { useRef, useState } from 'react';
import {
  motion, AnimatePresence,
  useMotionValue, useSpring, useTransform, useScroll,
} from 'framer-motion';
import {
  Mail, Phone, Linkedin, Download, Github, Smile, Instagram,
  Briefcase, UserX, ArrowDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import profilePhoto from '@/assets/profile-photo.jpg';
import resumeFile from '@/assets/resume.pdf';

const EASE = [0.16, 1, 0.3, 1] as const;

// Each greeting lives at its own corner so the three bubbles never sit on top
// of each other, and each is pushed clear of the circular photo frame.
const greetings = [
  {
    emoji: '👋',
    text: 'Hi there!',
    // top-left, anchored above the frame
    bubble: '-top-12 -left-2 sm:-top-14 sm:-left-6 lg:-top-16 lg:-left-10',
    tail: '-bottom-1 right-7 border-r border-b',
    anim: 'wave' as const,
  },
  {
    emoji: '🤔',
    text: 'What brings you here?',
    // top-right corner
    bubble: '-top-12 -right-2 sm:-top-14 sm:-right-6 lg:-top-16 lg:-right-10',
    tail: '-bottom-1 left-7 border-r border-b',
    anim: 'tilt' as const,
  },
  {
    emoji: '✨',
    text: "I'm Prashanth!",
    // bottom-left, sits below the frame and away from the "Available" badge
    bubble: '-bottom-12 -left-4 sm:-bottom-14 sm:-left-8 lg:-bottom-16 lg:-left-12',
    tail: '-top-1 right-7 border-l border-t',
    anim: 'sparkle' as const,
  },
] as const;

const socialLinks = [
  { icon: Mail, href: 'mailto:gummalaprashanth509@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:09701337681', label: 'Phone' },
  { icon: Instagram, href: 'https://www.instagram.com/prashanth__000_?igsh=MWY3bjhwODUzY2tqaQ==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/gummala-prashanth-1a34a3273', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Prashanth-TechAI', label: 'GitHub' },
  { icon: Smile, href: 'https://huggingface.co/prashanth970', label: 'Huggingface' },
];

const Hero = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetCountRef = useRef(0);
  const greetingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { toast } = useToast();

  const handlePhotoEnter = () => {
    if (greetCountRef.current >= greetings.length) return;
    if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    setGreetingIndex(greetCountRef.current);
    greetCountRef.current += 1;
    setShowGreeting(true);
    greetingTimerRef.current = setTimeout(() => setShowGreeting(false), 2800);
  };

  // Mouse parallax — the photo tilts subtly toward the cursor.
  // Spring interpolates so the motion stays buttery, never twitchy.
  const mouseX = useMotionValue(0); // -1 .. 1
  const mouseY = useMotionValue(0); // -1 .. 1
  const springCfg = { stiffness: 110, damping: 16, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springCfg);
  const translateX = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), springCfg);
  const translateY = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), springCfg);

  const handlePhotoMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const handlePhotoLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Hero scroll-exit — as user scrolls past, text content lifts and fades,
  // photo holds slightly longer then fades. Tied to section's own scroll progress.
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -80]);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const heroPhotoY = useTransform(heroProgress, [0, 1], [0, -40]);
  const heroPhotoScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroPhotoOpacity = useTransform(heroProgress, [0, 0.7, 1], [1, 0.85, 0.4]);

  const handleResumeClick = () => setShowOptions((v) => !v);
  const handleRecruiterClick = () => {
    window.open(resumeFile, '_blank');
    setShowOptions(false);
  };
  const handleNotRecruiterClick = () => {
    toast({
      title: 'Thanks for visiting!',
      description: "Feel free to explore the portfolio. If anything sparks a conversation, the contact section is just below.",
      duration: 4000,
    });
    setShowOptions(false);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex items-center min-h-[100svh] overflow-hidden isolate"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Static ambient orbs — no scroll-tied JS, modest blur */}
      <div
        className="absolute top-[14%] left-[6%] w-56 sm:w-72 aspect-square rounded-full bg-secondary/15 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-[8%] right-[4%] w-72 sm:w-96 aspect-square rounded-full bg-primary-light/30 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Hairline gold borders top & bottom */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="flex justify-center lg:justify-start"
            >
              <span className="pill-badge !bg-white/[0.06] !border-secondary/40 !text-secondary-light backdrop-blur-sm">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="text-display text-white mt-5 sm:mt-6"
            >
              <span className="whitespace-nowrap">
                Hi, I'm{' '}
                <span className="text-gold-gradient italic font-cormorant font-semibold pr-2">
                  Prashanth
                </span>
              </span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="mt-5 sm:mt-6 inline-flex flex-col items-center lg:items-start gap-3"
            >
              <h2 className="text-subheading text-white/85 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-1">
                <span>AI Developer</span>
                <span className="text-secondary/70 mx-1">◆</span>
                <span>Generative&nbsp;AI Engineer</span>
              </h2>
              <span className="block h-px w-32 sm:w-40 bg-gradient-to-r from-secondary via-secondary-light to-transparent" />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="text-body text-white/70 mt-6 sm:mt-7 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Gen-AI enthusiast with deep expertise in Generative&nbsp;AI, LLMs and Machine Learning.
              Skilled in Python and at home with advanced libraries like OpenCV, PyTorch and LangChain —
              crafting intelligent systems that quietly do extraordinary things.
            </motion.p>

            {/* Social row */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="mt-7 sm:mt-9 flex justify-center lg:justify-start gap-2.5 sm:gap-3 flex-wrap"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur-sm hover:bg-white/15 hover:border-secondary/40 hover:text-white hover:-translate-y-0.5 transition-[transform,background-color,border-color,color] duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start relative"
            >
              <Button
                size="lg"
                onClick={handleResumeClick}
                className="btn-secondary group w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                View Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-white/30 bg-white/[0.05] text-white hover:bg-white/15 hover:text-white hover:border-white/50 backdrop-blur-sm px-8 py-3.5 w-full sm:w-auto"
              >
                <a href="#projects">
                  Explore Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute -bottom-14 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 flex gap-2 z-30"
                  >
                    <Button
                      size="sm"
                      onClick={handleRecruiterClick}
                      className="btn-primary text-xs px-4 py-2 h-auto whitespace-nowrap"
                    >
                      <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                      I'm a Recruiter
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleNotRecruiterClick}
                      className="text-xs px-4 py-2 h-auto whitespace-nowrap rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      <UserX className="mr-1.5 h-3.5 w-3.5" />
                      Just Browsing
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Portrait column — also scroll-driven so it lifts gently as the user scrolls past */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            style={{ y: heroPhotoY, scale: heroPhotoScale, opacity: heroPhotoOpacity }}
            className="lg:col-span-6 flex justify-center lg:pl-12 xl:pl-20 order-first lg:order-none"
          >
            <div
              className="relative group"
              style={{ perspective: 1000 }}
              onMouseEnter={handlePhotoEnter}
              onMouseMove={handlePhotoMove}
              onMouseLeave={handlePhotoLeave}
            >
              {/* Tilt-tracking wrapper — only the photo frame tilts; the
                  greeting bubbles stay in screen space below. */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  x: translateX,
                  y: translateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative"
              >
                {/* Soft gold glow — brightens on hover */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'var(--gradient-radial-gold)' }}
                  aria-hidden
                />

                {/* Outer thin gold halo — thickens on hover */}
                <div
                  className="absolute -inset-1.5 rounded-full bg-gradient-gold opacity-90 blur-[1px] group-hover:opacity-100 group-hover:-inset-2 group-hover:blur-[2px] transition-[opacity,inset,filter] duration-500"
                  aria-hidden
                />

                {/* Photo frame */}
                <div className="relative rounded-full p-[3px] bg-gradient-gold shadow-emboss-lg group-hover:shadow-gold-glow transition-shadow duration-500">
                  <div className="relative rounded-full overflow-hidden ring-1 ring-black/10 bg-primary">
                    <img
                      src={profilePhoto}
                      alt="Gummala Prashanth"
                      width={384}
                      height={384}
                      className="block w-60 h-60 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 30%, transparent 60%, hsl(222 47% 6% / 0.45) 100%)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Cycling greeting bubbles — each greeting has its own corner so
                  they never sit on top of each other or merge with the photo. */}
              <AnimatePresence mode="wait">
                {showGreeting && (() => {
                  const g = greetings[greetingIndex];
                  const emojiAnim =
                    g.anim === 'wave'
                      ? { rotate: [0, 16, -8, 16, 0] }
                      : g.anim === 'tilt'
                      ? { rotate: [0, -8, 8, -4, 0] }
                      : { scale: [1, 1.2, 1] };
                  return (
                    <motion.div
                      key={greetingIndex}
                      initial={{ opacity: 0, y: 10, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className={`absolute z-30 pointer-events-none ${g.bubble}`}
                    >
                      <div className="relative px-3.5 py-2 rounded-2xl bg-white/[0.10] backdrop-blur-md border border-white/20 shadow-emboss-md flex items-center gap-1.5 whitespace-nowrap">
                        <motion.span
                          className="text-base leading-none origin-[70%_70%] inline-block"
                          animate={emojiAnim}
                          transition={{ duration: 1.2, ease: 'easeInOut', repeat: 1 }}
                        >
                          {g.emoji}
                        </motion.span>
                        <span className="text-xs font-medium text-white/95 tracking-wide">
                          {g.text}
                        </span>
                        <span
                          aria-hidden
                          className={`absolute h-2 w-2 rotate-45 bg-white/[0.10] border-white/20 ${g.tail}`}
                        />
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>

              {/* Floating "Available" badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0 card-glass px-3.5 py-2 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400 animate-soft-pulse" />
                <span className="text-[0.72rem] sm:text-xs font-medium text-white/90 tracking-wide">
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small screens to keep below-fold clean */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 group items-center justify-center"
        aria-label="Scroll to About"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2 group-hover:border-secondary transition-colors"
        >
          <span className="block h-2.5 w-px bg-white/70 group-hover:bg-secondary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
