import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Send, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mokshdudeja@example.com',
      link: 'mailto:mokshdudeja@example.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      link: null,
      description: 'Available for remote opportunities'
    },
    {
      icon: Phone,
      label: 'Status',
      value: 'Open to opportunities',
      link: null,
      description: 'Currently available'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mokshdudeja',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/mokshdudeja',
      color: 'hover:text-neutral-900'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/Mokshdudeja',
      color: 'hover:text-blue-400'
    },
    {
      icon: ExternalLink,
      label: 'CodePen',
      url: 'https://codepen.io/mokshdudeja',
      color: 'hover:text-black'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Let's Connect
            </h3>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-white rounded-card border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-200">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {info.label}
                      </h4>
                      <p className="text-neutral-700 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a
                    key={info.label}
                    href={info.link}
                    className="block group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-500 transition-all duration-200 hover:border-primary-500 hover:bg-primary-50 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Note */}
            <div className="mt-8 bg-semantic-success/10 border border-semantic-success/20 rounded-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-semantic-success rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-neutral-900">
                  Currently Available
                </h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Open to full-time opportunities, freelance projects, and interesting collaborations 
                in AI/ML, web development, and cybersecurity.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-card p-8 border border-neutral-200 shadow-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-button focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-button focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-button focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-400 text-white font-semibold px-6 py-3 rounded-button transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-semantic-success/10 border border-semantic-success/20 rounded-lg text-semantic-success text-sm">
                    Thanks for your message! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-semantic-error/10 border border-semantic-error/20 rounded-lg text-semantic-error text-sm">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
