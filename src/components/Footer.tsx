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
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Top hairline gold */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      {/* Soft gold radial */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] pointer-events-none opacity-20"
        style={{ background: 'var(--gradient-radial-gold)' }}
        aria-hidden
      />

      <div className="container relative mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14">
        <Reveal y={16} className="flex flex-col items-center gap-5 text-center">
          {/* Monogram */}
          <div className="font-playfair text-3xl font-bold tracking-tight">
            <span className="text-gold-gradient">G</span>
            <span className="text-primary-foreground/90">P</span>
          </div>

          {/* Ornament */}
          <div className="ornament">
            <span className="ornament-line w-16" />
            <span className="ornament-dot" />
            <span className="ornament-line w-16" />
          </div>

          {/* Tagline */}
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            Designing intelligent systems with care, craftsmanship, and a quiet kind
            of obsession.
          </p>

          {/* Copyright */}
          <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-primary-foreground/60 tracking-wide">
            © {year} Gummala Prashanth. Crafted with
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-current animate-soft-pulse" />
            and curiosity.
          </p>
        </Reveal>
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
