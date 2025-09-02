import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, Github, Smile, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import resumeFile from '@/assets/resume.pdf'; // ✅ Import resume

const Hero = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:gummalaprashanth509@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
    {
      icon: Phone,
      href: 'tel:09701337681',
      label: 'Phone',
      color: 'hover:text-green-500',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/prashanth__000_?igsh=MWY3bjhwODUzY2tqaQ==',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/gummala-prashanth-1a34a3273',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: Github,
      href: 'https://github.com/Prashanth-TechAI',
      label: 'GitHub',
      color: 'hover:text-purple-500',
    },
    {
      icon: Smile,
      href: 'https://huggingface.co/prashanth970',
      label: 'Huggingface',
      color: 'hover:text-yellow-500',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-secondary-light rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-3 items-center"
        >
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:-mr-6" // ⬅️ pull text slightly right (towards image)
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-sm font-medium text-secondary"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                Gummala Prashanth
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-subheading text-white/90 mb-6"
            >
              AI Developer  |  Generative AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-body text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              Gen-AI enthusiast with expertise in Generative AI, LLMs, Machine Learning.
              Skilled in Python and excel at designing robust database systems and advanced libraries like
              OpenCV, PyTorch, and LangChain.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6 mb-8"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all duration-300 ${social.color} hover:bg-white/20`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="btn-secondary group"
                onClick={() => window.open(resumeFile, '_blank')} // ✅ Open resume
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end lg:-ml-6" // ⬅️ pull image slightly left (towards text)
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-2xl opacity-30 animate-glow" />
              <img
                src={profilePhoto}
                alt="Gummala Prashanth"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
