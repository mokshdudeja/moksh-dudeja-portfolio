import React from 'react';
import { Brain, Code, Database, Shield } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Neural Networks', 'Data Science', 'Python'],
      description: 'Building intelligent systems and algorithms'
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Full-Stack Development', 'API Integration'],
      description: 'Creating modern, responsive web applications'
    },
    {
      title: 'Programming',
      icon: Database,
      skills: ['Python', 'JavaScript', 'Java', 'SQL', 'Git/GitHub', 'Problem Solving'],
      description: 'Software development and version control'
    },
    {
      title: 'Technologies',
      icon: Shield,
      skills: ['IoT', 'Cybersecurity', 'Cloud Computing', 'Firebase', 'Deployment', 'System Architecture'],
      description: 'Emerging technologies and security practices'
    }
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, web development, and emerging technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-card p-8 border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-250 transform hover:-translate-y-1 hover:scale-102 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-250">
                    <IconComponent className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-250" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-neutral-700 font-medium"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-neutral-100 rounded-card p-8 border border-neutral-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Continuous Learning
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Actively expanding expertise through Google Cloud certifications, hands-on projects, 
              and participation in cybersecurity and AI-focused programs. Currently learning Java 
              and enhancing cloud deployment skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
