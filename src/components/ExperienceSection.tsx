import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Web Dev & AI Specialist',
      company: 'Webhack Solutions',
      duration: 'Current',
      location: 'Remote',
      description: 'Working on web development projects with AI integration, focusing on modern technologies and innovative solutions.',
      achievements: [
        'Developed responsive web applications using modern frameworks',
        'Integrated AI functionalities into existing web platforms',
        'Collaborated with cross-functional teams on client projects',
        'Implemented best practices for code quality and performance'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'AI Integration', 'Responsive Design']
    },
    {
      title: 'Campus Ambassador',
      company: 'Perplexity',
      duration: 'Current',
      location: 'Campus',
      description: 'Representing Perplexity AI on campus, promoting AI-powered search solutions and building community engagement.',
      achievements: [
        'Achieved 40% engagement increase for campus activities',
        'Organized and executed 200+ technical events and workshops',
        'Built strong community presence and student outreach',
        'Promoted AI literacy and adoption among peers'
      ],
      technologies: ['Community Building', 'Event Management', 'Public Speaking', 'AI Education']
    },
    {
      title: 'Generative AI Engineer Intern',
      company: 'AI Wallah',
      duration: 'Previous',
      location: 'Remote',
      description: 'Gained hands-on experience in generative AI technologies and machine learning pipelines.',
      achievements: [
        'Worked on generative AI model implementations',
        'Contributed to AI-based solution development',
        'Learned production deployment of AI models',
        'Collaborated on research and development projects'
      ],
      technologies: ['Generative AI', 'Machine Learning', 'Model Deployment', 'Python']
    },
    {
      title: 'Cybersecurity Intern',
      company: 'CyberZero.Club',
      duration: 'Completed',
      location: 'Program-based',
      description: 'Completed a comprehensive 45-day cybersecurity internship program focused on practical security skills.',
      achievements: [
        'Successfully completed 45-day structured cybersecurity program',
        'Learned fundamental security principles and practices',
        'Developed awareness of security best practices',
        'Gained hands-on experience with security tools and techniques'
      ],
      technologies: ['Cybersecurity', 'Security Tools', 'Risk Assessment', 'Best Practices']
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A timeline of my journey in web development, AI, and cybersecurity
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform md:-translate-x-2 flex-shrink-0"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-neutral-50 rounded-card p-6 border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-250">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-primary-600 mb-2">
                        {exp.company}
                      </p>
                      
                      {/* Duration and Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-neutral-600 flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
