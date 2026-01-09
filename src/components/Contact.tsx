import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, MapPin, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { s } from 'node_modules/framer-motion/dist/types.d-Cjd591yU';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gummalaprashanth509@gmail.com',
      href: 'mailto:gummalaprashanth509@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9701337681',
      href: 'tel:09701337681',
      color: 'text-green-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Gummala Prashanth',
      href: 'https://linkedin.com/in/gummala-prashanth-1a34a3273',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Prashanth-TechAI',
      href: 'https://github.com/Prashanth-TechAI',
      color: 'text-purple-500',
    },
        {
      icon: Smile,
      label: 'Huggingface',
      value: 'prashanth-970',
      href: 'https://huggingface.co/prashanth970',
      color: 'text-yellow-500',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Frontend-only email: opens the user's mail app with details filled in
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const to = 'gummalaprashanth509@gmail.com'; // your email
      const subject = `New message from ${formData.name}`;
      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        '',
        'Message:',
        formData.message,
      ];
      const body = bodyLines.join('\n');

      // Build mailto URL (URL-encoded)
      const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.location.href = mailtoUrl;

      // Optional: small delay so the toast doesn't block navigation on some browsers
      await new Promise((r) => setTimeout(r, 300));

      toast({
        title: 'Opening your email app…',
        description: "If nothing happens, please make sure a default mail app is set on your device.",
      });

      // reset fields
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not open your email app.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary"
          >
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-heading text-foreground mb-4"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to discuss your next AI project or have questions about my work? Let's talk!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always excited to discuss 
                new opportunities and innovative AI solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:shadow-elegant transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300`}>
                      <Icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="btn-secondary group w-full"
                onClick={() => window.open('https://wa.me/919951879767', '_blank')}
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-elegant"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or ask me anything..."
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="btn-primary w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
