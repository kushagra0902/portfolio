import { useRef, useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:kushagrakinra@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Clear form fields
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const socialLinks = [{
    icon: Github,
    href: 'https://github.com/kushagra0902',
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: 'https://linkedin.com/in/kushagra-kinra-965153370',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: 'mailto:kushagrakinra@gmail.com',
    label: 'Email'
  }];
  return <section ref={sectionRef} className="relative min-h-screen py-24 lg:py-32 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-autumn-bark mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-autumn-bark/70 max-w-2xl mx-auto">
            Ready to start a new project or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-8 rounded-2xl h-full" style={{
            background: 'hsla(0, 0%, 100%, 0.85)',
            backdropFilter: 'blur(12px)'
          }}>
              <h3 className="font-display text-2xl font-semibold text-autumn-bark mb-6">
                Get in Touch
              </h3>
              
              <p className="text-autumn-bark/70 mb-8 leading-relaxed">
                Whether you have a project in mind, a question, or just want to connect — 
                my inbox is always open. Let's create something amazing together.
              </p>

              {/* Email */}
              <div className="mb-8">
                <a href="mailto:hello@johndeveloper.com" className="inline-flex items-center text-lg font-medium text-autumn-leaf hover:text-autumn-amber transition-colors"><Mail className="w-5 h-5 mr-3" />
                  kushagrakinra@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map(social => {
                const Icon = social.icon;
                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-full bg-autumn-warmth flex items-center justify-center text-autumn-bark hover:bg-autumn-leaf hover:text-white transition-all duration-300 hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </a>;
              })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form className="p-8 rounded-2xl space-y-6" style={{
            background: 'hsla(0, 0%, 100%, 0.85)',
            backdropFilter: 'blur(12px)'
          }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-autumn-bark mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-white/50 border-autumn-warmth focus:border-autumn-leaf focus:ring-autumn-leaf/20"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-autumn-bark mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-white/50 border-autumn-warmth focus:border-autumn-leaf focus:ring-autumn-leaf/20"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-autumn-bark mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={5} 
                  className="bg-white/50 border-autumn-warmth focus:border-autumn-leaf focus:ring-autumn-leaf/20 resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-autumn-leaf hover:bg-autumn-amber text-white py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Opening...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-autumn-bark/60">
            © {new Date().getFullYear()} Kushagra Kinra. Built with passion and creativity.
          </p>
        </div>
      </div>
    </section>;
};
export default ContactSection;