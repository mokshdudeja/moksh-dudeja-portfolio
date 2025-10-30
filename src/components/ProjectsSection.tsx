import React from 'react';
import { ExternalLink, Github, Code, Cpu, Shield, Globe } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Web Application',
      description: 'A full-stack web application integrating machine learning models for intelligent data processing and user recommendations.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'Python', 'REST API'],
      status: 'In Development',
      category: 'AI/Web',
      icon: Cpu,
      metrics: 'Real-time ML inference',
      image: '/ai-concept.jpg'
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'A comprehensive security monitoring dashboard with threat detection capabilities and incident management features.',
      technologies: ['JavaScript', 'D3.js', 'Security APIs', 'Real-time Monitoring', 'Node.js'],
      status: 'Completed',
      category: 'Security',
      icon: Shield,
      metrics: 'Real-time threat monitoring',
      image: '/cybersecurity-concept.jpg'
    },
    {
      title: 'Responsive Web Platform',
      description: 'A modern, responsive web platform built with contemporary frameworks, focusing on user experience and performance optimization.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Responsive Design'],
      status: 'Completed',
      category: 'Web Development',
      icon: Globe,
      metrics: 'Mobile-first responsive design',
      image: '/office-workspace.jpg'
    },
    {
      title: 'Team Collaboration Tool',
      description: 'A JavaScript-based application for team collaboration with real-time messaging, file sharing, and project management features.',
      technologies: ['JavaScript', 'Firebase', 'WebRTC', 'File Management', 'Real-time Sync'],
      status: 'Completed',
      category: 'Collaboration',
      icon: Code,
      metrics: 'Real-time collaboration',
      image: '/ai-concept.jpg'
    },
    {
      title: 'Research Contribution - Radius Rapid',
      description: 'Contributed to an open-source project, implementing features and improving codebase quality through collaborative development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Open Source'],
      status: 'Contributing',
      category: 'Open Source',
      icon: Github,
      metrics: 'Active development',
      image: '/cybersecurity-concept.jpg'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-semantic-success text-white';
      case 'In Development':
        return 'bg-semantic-warning text-white';
      case 'Contributing':
        return 'bg-primary-500 text-white';
      default:
        return 'bg-neutral-500 text-white';
    }
  };

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI, web development, and cybersecurity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="bg-white rounded-card overflow-hidden border border-neutral-200 shadow-card hover:shadow-card-hover transition-all duration-250 transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary-500" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metric */}
                  <div className="mb-4">
                    <div className="text-sm text-semantic-success font-medium">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-button transition-colors duration-200">
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-neutral-200 hover:border-primary-500 text-neutral-700 hover:text-primary-500 font-medium px-4 py-2 rounded-button transition-colors duration-200">
                      <Github className="h-4 w-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-neutral-100 rounded-card p-8 border border-neutral-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects that challenge my skills and push the boundaries 
              of what's possible with AI, web development, and cybersecurity.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-button transition-all duration-200"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
