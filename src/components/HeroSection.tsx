import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSkills = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="/moksh_profile.jpg"
              alt="Moksh Dudeja - AI/ML & Web Development Specialist"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-card transition-transform duration-300 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight tracking-tight">
          Moksh Dudeja
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-regular text-neutral-700 mb-6">
          AI/ML & Web Development Specialist
        </h2>

        {/* Tagline */}
        <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building intelligent solutions for tomorrow's digital world. Passionate about AI/ML technologies and modern web development.
        </p>

        {/* Brief Bio */}
        <p className="text-base text-neutral-500 mb-8 max-w-3xl mx-auto leading-relaxed">
          I'm a Computer Science student and emerging technologist with hands-on experience in artificial intelligence, 
          machine learning, and full-stack web development. Currently working as a Web Dev & AI Specialist at Webhack Solutions, 
          I'm committed to creating innovative solutions that bridge the gap between cutting-edge technology and practical applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToSkills}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-button transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-102 shadow-card-hover min-w-[160px]"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-neutral-200 hover:border-primary-500 text-neutral-700 hover:text-primary-500 font-semibold px-6 py-3 rounded-button transition-all duration-200 min-w-[160px]"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSkills}
          className="animate-bounce text-neutral-500 hover:text-primary-500 transition-colors duration-200"
          aria-label="Scroll to skills section"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
