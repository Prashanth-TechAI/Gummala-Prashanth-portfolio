import { useState } from 'react';
import {
  Mail, Phone, Linkedin, Github, MessageSquare,
  Send, Smile, ArrowUpRight,
} from 'lucide-react';
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
  'w-full rounded-xl border border-[#E7E7EA] bg-[#F7F7F8] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-[#141414] focus:bg-white focus:outline-none';

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground';

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
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          word="Contact"
          script="hello"
          title="Let's create something memorable"
          subtitle="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left — contact channels on a black panel */}
          <Reveal y={24} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-[#141414]/10 bg-white/80 p-7 text-[#141414] sm:p-9">
              <h3 className="font-anton text-4xl uppercase leading-none">Contact information</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Reach out through any of these channels. I'm always excited to discuss new opportunities and
                meaningful AI work.
              </p>

              <ul className="mt-8 divide-y divide-[#141414]/10 border-y border-[#141414]/10">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <li key={info.label}>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-4"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#141414] text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-[#141414]">
                          <Icon className="h-4 w-4" strokeWidth={1.8} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">{info.label}</span>
                          <span className="block truncate font-medium">{info.value}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#141414]/35 transition-colors duration-300 group-hover:text-[#141414]" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                onClick={() => window.open('https://wa.me/919951879767', '_blank')}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-[#141414] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4 w-4" />
                Chat on WhatsApp
              </button>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal y={24} delay={0.1} className="lg:col-span-7">
            <div className="flex h-full flex-col rounded-3xl border border-[#E7E7EA] bg-white/90 p-7 sm:p-9">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">Send a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and I'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-1 flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
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
                    <label htmlFor="email" className={labelClass}>
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

                <div className="flex flex-1 flex-col">
                  <label htmlFor="message" className={labelClass}>
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
                    className={`${inputClass} min-h-[10rem] flex-1 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#141414] px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
