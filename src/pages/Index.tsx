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
import { useVisitTracker } from '@/hooks/use-visit-tracker';

const Index = () => {
  // Track website visits and send email notifications
  useVisitTracker();

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Gummala Prashanth-AI Developer & Generative AI Expert</title>
      <meta
        name="description"
        content="Gummala Prashanth - Professional AI/ML Engineer specializing in Generative AI, LLMs, Machine Learning, and Deep Learning. Expert in Python, OpenCV, PyTorch, and LangChain."
      />
      <meta
        name="keywords"
        content="AI Engineer, Machine Learning, Generative AI, LLM Expert, Python Developer, Deep Learning, Computer Vision, Data Science"
      />
      <link rel="canonical" href="https://gummalaprashanth.netlify.app/" />

      {/* Portfolio Sections */}
      <Navigation />
      <main>
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