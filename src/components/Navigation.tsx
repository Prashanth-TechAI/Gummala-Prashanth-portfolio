import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  // Keep the nav transparent while the dark hero is on screen; only switch to
  // the opaque/light style once the hero's bottom edge has passed under the nav.
  useEffect(() => {
    const NAV_OFFSET = 72; // ~ nav height; flip just before the next section meets the top
    const onScroll = () => {
      const hero = document.getElementById('home');
      if (hero) {
        setScrolled(hero.getBoundingClientRect().bottom <= NAV_OFFSET);
      } else {
        setScrolled(window.scrollY > 40);
      }
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
    const ids = menuItems.map((m) => m.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/95 border-b border-border/60 shadow-emboss-sm'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleMenuClick('#home'); }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 group"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold shadow-emboss-sm ring-1 ring-white/40">
              <img src={logo} alt="" className="h-7 w-7 rounded-full" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span
                className={[
                  'font-playfair text-lg font-bold tracking-tight transition-colors duration-500',
                  scrolled ? 'text-foreground' : 'text-white',
                ].join(' ')}
              >
                Prashanth
              </span>
              <span className="text-overline text-secondary mt-1">AI · Developer</span>
            </span>
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeId === id;
              const inactiveColor = scrolled
                ? 'text-foreground/75 hover:text-foreground'
                : 'text-white/75 hover:text-white';
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                  className={[
                    'relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 rounded-full',
                    isActive ? 'text-secondary' : inactiveColor,
                  ].join(' ')}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={[
                      'absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-secondary to-transparent transition-opacity duration-300',
                      isActive ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={[
              'md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-0 shadow-emboss-sm transition-colors duration-300 hover:text-secondary',
              scrolled
                ? 'border-border/60 bg-card/60 text-foreground'
                : 'border-white/25 bg-white/10 text-white',
            ].join(' ')}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="rounded-2xl border border-border/60 bg-card/90 backdrop-blur-0 shadow-emboss p-2">
                {menuItems.map((item, index) => {
                  const id = item.href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                      className={[
                        'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300',
                        isActive
                          ? 'text-secondary bg-secondary/[0.07]'
                          : 'text-foreground/85 hover:text-foreground hover:bg-accent',
                      ].join(' ')}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rotate-45 bg-secondary" />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
