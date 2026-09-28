import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Floating pill navigation: detached from the page edges, frosted glass,
 * brand on the left, links in the middle, "Let's Talk" call to action on the right.
 * Hidden on the first screen (the hero stands alone); it slides in once the
 * visitor scrolls past most of the hero.
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  // Show the pill only after the visitor has scrolled past most of the hero.
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      setScrolled(past);
      if (!past) setIsMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Active-section highlight via IntersectionObserver — single threshold so
  // the callback only fires on band-crossings (cheap, no scroll-tied work).
  useEffect(() => {
    const sections = menuItems
      .map((m) => document.getElementById(m.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={false}
      // Once hidden, visibility:hidden also takes the links out of the tab order.
      animate={
        scrolled
          ? { y: 0, opacity: 1, visibility: 'visible' }
          : { y: '-130%', opacity: 0, transitionEnd: { visibility: 'hidden' } }
      }
      style={{ visibility: 'hidden' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!scrolled}
      className={[
        'fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4',
        scrolled ? '' : 'pointer-events-none',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border py-2 pl-3 pr-2 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 sm:pl-4',
          'border-white/70 bg-white/80 shadow-[0_14px_40px_-18px_rgba(20,20,20,0.35)]',
        ].join(' ')}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleMenuClick('#home'); }}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold shadow-sm ring-1 ring-white/60">
            <img src={logo} alt="" className="h-6 w-6 rounded-full" />
          </span>
          <span className="font-anton text-lg uppercase tracking-wide text-[#141414]">Prashanth</span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {menuItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                className={[
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300',
                  isActive ? 'bg-[#141414] text-white' : 'text-foreground/65 hover:text-foreground',
                ].join(' ')}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* Call to action */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleMenuClick('#contact'); }}
            className="group hidden items-center gap-2 rounded-full bg-[#141414] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(20,20,20,0.7)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Let's Talk
            <ArrowRight className="h-4 w-4 text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Menu toggle (below lg) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-white/70 text-foreground transition-colors hover:bg-white lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Menu panel (below lg) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/70 bg-white/90 p-2 shadow-[0_20px_50px_-24px_rgba(20,20,20,0.4)] backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {menuItems.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                    className={[
                      'rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300',
                      isActive ? 'bg-[#141414] text-white' : 'text-foreground/80 hover:bg-[#F2F2F4]',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleMenuClick('#contact'); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#141414] px-4 py-3 text-sm font-semibold text-white sm:hidden"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4 text-secondary" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
