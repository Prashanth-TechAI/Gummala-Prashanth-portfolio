import { useEffect, useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '@/components/ui/reveal';

const Footer = () => {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#141414] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">
        <Reveal y={16} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Designing intelligent systems with care, craftsmanship, and a quiet kind of obsession.
          </p>
          <p className="flex flex-wrap items-center gap-2 text-sm text-white/50">
            © {year} Gummala Prashanth. Crafted with
            <Heart className="h-3.5 w-3.5 fill-current text-rose-400" />
            and curiosity.
          </p>
        </Reveal>
      </div>

      {/* Giant signature name, echoing the hero */}
      <div aria-hidden className="relative mt-10 select-none">
        <p className="whitespace-nowrap text-center font-anton uppercase leading-[0.8] text-white/[0.07] text-[21vw]">
          Prashanth
        </p>
        <p className="absolute right-[8%] top-[18%] -rotate-[4deg] font-script text-secondary text-[5vw]">
          AI Engineer
        </p>
      </div>
      {/* Back-to-top — fixed floating button, stacked above the WhatsApp FAB */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            onClick={handleTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="fixed right-6 bottom-[6.25rem] z-[1000] inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-emboss-lg ring-1 ring-white/40 hover:shadow-gold-glow"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={2.2} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
