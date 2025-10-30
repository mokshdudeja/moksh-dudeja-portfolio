import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Moksh Dudeja</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              AI/ML & Web Development Specialist passionate about building intelligent solutions 
              for tomorrow's digital world.
            </p>
            <div className="flex items-center text-sm text-neutral-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#achievements', label: 'Achievements' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-neutral-400">
              <p>mokshdudeja@example.com</p>
              <p>Gurugram, India</p>
              <p className="text-sm mt-4">
                Currently available for opportunities in AI/ML, 
                web development, and cybersecurity.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Moksh Dudeja. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 border border-neutral-700 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-200">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Additional Credits */}
        <div className="text-center text-xs text-neutral-500 mt-6 pt-6 border-t border-neutral-800">
          <p>
            Built with React, TypeScript, Tailwind CSS, and Lucide Icons • 
            Designed with Modern Minimalism principles • 
            Deployed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
