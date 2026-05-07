import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AmbientStage from '@/components/AmbientStage';
import { useVisitTracker } from '@/hooks/use-visit-tracker';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const Index = () => {
  // Inertial smooth scroll (Lenis) — Apple-grade glide on wheel/trackpad.
  useSmoothScroll();

  // Track website visits and send email notifications
  useVisitTracker();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed dark cinematic stage — sits behind everything, never scrolls */}
      <AmbientStage />

      {/* Portfolio Sections — sit ON TOP of the AmbientStage */}
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;