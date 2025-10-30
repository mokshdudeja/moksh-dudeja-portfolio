import React from 'react';
import { TrendingUp, Users, Award, Code, Target, Zap } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const keyMetrics = [
    {
      value: '95%',
      label: 'Deployment Success Rate',
      description: 'Successful project deployments and implementations',
      icon: Target,
      color: 'text-semantic-success'
    },
    {
      value: '40%',
      label: 'Engagement Increase',
      description: 'Measurable improvement in user engagement',
      icon: TrendingUp,
      color: 'text-primary-500'
    },
    {
      value: '200+',
      label: 'Event Attendees',
      description: 'Technical events organized and managed',
      icon: Users,
      color: 'text-semantic-warning'
    }
  ];

  const recognitions = [
    {
      title: 'Google Cloud Skills Boost',
      description: 'Bronze League with 1,190 points',
      type: 'Professional Certification',
      date: '2024',
      icon: Award
    },
    {
      title: 'Attention Mechanism',
      description: 'Course completion and verified badge',
      type: 'AI/ML Certification',
      date: 'Dec 2024',
      icon: Zap
    },
    {
      title: 'Image Generation',
      description: 'Introduction course completion',
      type: 'AI/ML Certification',
      date: 'Sep 2024',
      icon: Code
    },
    {
      title: 'Cybersecurity Program',
      description: '45-day structured internship completion',
      type: 'Security Certification',
      date: '2024',
      icon: Target
    }
  ];

  const gitHubAchievements = [
    {
      title: 'Yolo',
      description: 'GitHub achievement for exceptional performance',
      category: 'Community Impact'
    },
    {
      title: 'Pull Shark',
      description: 'Recognized for significant code contributions',
      category: 'Development'
    },
    {
      title: 'Pro Status',
      description: 'Advanced developer profile recognition',
      category: 'Professional'
    }
  ];

  return (
    <section id="achievements" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Quantifiable impact and professional recognitions in technology and community engagement
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Key Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="bg-neutral-100 rounded-card p-8 border border-neutral-200 text-center group hover:bg-white hover:shadow-card-hover transition-all duration-250"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center ${metric.color} group-hover:scale-110 transition-transform duration-250`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div className={`text-5xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {metric.label}
                  </h4>
                  
                  <p className="text-neutral-600 text-sm">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => {
              const IconComponent = recognition.icon;
              return (
                <div
                  key={recognition.title}
                  className="bg-white rounded-card p-6 border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-250 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-250">
                      <IconComponent className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-250" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {recognition.title}
                  </h4>
                  
                  <p className="text-neutral-600 mb-2 text-sm">
                    {recognition.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary-600 font-medium">
                      {recognition.type}
                    </span>
                    <span className="text-neutral-500">
                      {recognition.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            GitHub Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gitHubAchievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-neutral-50 rounded-card p-6 border border-neutral-200 text-center"
              >
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  {achievement.title}
                </div>
                <p className="text-neutral-600 mb-2 text-sm">
                  {achievement.description}
                </p>
                <span className="text-xs text-primary-600 font-medium">
                  {achievement.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary-50 rounded-card p-8 border border-primary-100 text-center">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Continuous Learning
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Committed to staying at the forefront of technology through ongoing education, 
            professional certifications, and hands-on project development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-button transition-all duration-200"
            >
              Let's Collaborate
            </button>
            <a
              href="https://github.com/mokshdudeja"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold px-6 py-3 rounded-button transition-all duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
