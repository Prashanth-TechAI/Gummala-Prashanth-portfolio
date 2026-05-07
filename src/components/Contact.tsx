import { useState } from 'react';
import {
  Mail, Phone, Linkedin, Github, MessageSquare,
  Send, Smile, ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/reveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gummalaprashanth509@gmail.com',
    href: 'mailto:gummalaprashanth509@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9701337681',
    href: 'tel:09701337681',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Gummala Prashanth',
    href: 'https://linkedin.com/in/gummala-prashanth-1a34a3273',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Prashanth-TechAI',
    href: 'https://github.com/Prashanth-TechAI',
  },
  {
    icon: Smile,
    label: 'Hugging Face',
    value: 'prashanth970',
    href: 'https://huggingface.co/prashanth970',
  },
];

const inputClass =
  'w-full rounded-xl bg-background/60 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 focus:outline-none focus:border-secondary/60 focus:bg-card focus:ring-2 focus:ring-secondary/30 shadow-emboss-sm';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const subject = `New message from ${formData.name}`;
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        '',
        'Message:',
        formData.message,
      ].join('\n');

      window.location.href = `mailto:gummalaprashanth509@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      await new Promise((r) => setTimeout(r, 300));

      toast({
        title: 'Opening your email app…',
        description:
          "If nothing happens, please make sure a default mail app is set on your device.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: 'Could not open your email app',
        description: 'Please reach out directly via the channels listed.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container relative mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's create something memorable"
          subtitle="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left — info */}
          <Reveal x={-72} y={0} rotateX={6} className="lg:col-span-5 space-y-7">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 tracking-tight">
                Contact information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach out through any of these channels. I'm always excited to discuss
                new opportunities and meaningful AI work.
              </p>
            </div>

            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={info.label}>
                    <Reveal delay={0.05 + index * 0.05} x={-12} y={0}>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-premium flex items-center gap-4 p-4 group"
                      >
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 ring-1 ring-secondary/20 group-hover:bg-secondary/15 group-hover:ring-secondary/40 transition-colors duration-500">
                          <Icon className="h-4 w-4 text-secondary" strokeWidth={1.8} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-overline text-secondary/80">{info.label}</div>
                          <div className="text-sm font-medium text-foreground truncate">
                            {info.value}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Button
              size="lg"
              className="btn-secondary group w-full"
              onClick={() => window.open('https://wa.me/919951879767', '_blank')}
            >
              <MessageSquare className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Chat on WhatsApp
            </Button>
          </Reveal>

          {/* Right — form */}
          <Reveal x={72} y={0} rotateX={6} delay={0.1} className="lg:col-span-7">
            <div className="card-premium p-6 sm:p-8 lg:p-9 relative overflow-hidden gold-corners">
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2 tracking-tight">
                Send a message
              </h3>
              <p className="text-sm text-muted-foreground mb-7">
                Fill in your details and I'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-overline text-secondary/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-overline text-secondary/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-overline text-secondary/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea or question…"
                    rows={6}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="btn-primary w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="h-4 w-4 mr-2 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
