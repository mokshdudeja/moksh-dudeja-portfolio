import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = {
    degree: 'Diploma in Computer Science Engineering',
    institution: 'DPG Degree College',
    location: 'Gurugram, India',
    period: '2025 - 2028',
    status: 'Current Student',
    gpa: 'Expected: 3.5+',
    description: 'Comprehensive program covering fundamental computer science principles, software development, algorithms, data structures, and emerging technologies.',
    highlights: [
      'Core computer science foundations: Data Structures, Algorithms, and Computer Architecture',
      'Software Development methodologies and best practices',
      'Database Management Systems and SQL',
      'Object-Oriented Programming and Software Engineering',
      'Web Technologies and Full-Stack Development',
      'Introduction to Artificial Intelligence and Machine Learning',
      'Cybersecurity fundamentals and secure coding practices'
    ],
    achievements: [
      'Active participant in college technical events and competitions',
      'Member of computer science student community',
      'Continuous learning through online certifications and workshops',
      'Academic excellence in programming and mathematics courses'
    ]
  };

  const certifications = [
    {
      title: 'Attention Mechanism',
      issuer: 'Google Cloud Skills Boost',
      date: 'December 2024',
      type: 'Course Completion',
      badge: 'Verified Badge'
    },
    {
      title: 'Introduction to Image Generation',
      issuer: 'Google Cloud Skills Boost',
      date: 'September 2024',
      type: 'Course Completion',
      badge: 'Verified Badge'
    },
    {
      title: 'Google Cloud Platform Fundamentals',
      issuer: 'Google Cloud',
      status: 'In Progress',
      type: 'Professional Certification'
    },
    {
      title: 'Microsoft Copilot Fundamentals',
      issuer: 'Microsoft',
      status: 'In Progress',
      type: 'Professional Certification'
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Formal education and continuous learning through professional certifications
          </p>
        </div>

        {/* Main Education */}
        <div className="bg-white rounded-card p-8 border border-neutral-200 shadow-card mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-primary-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {education.degree}
              </h3>
              <p className="text-xl font-semibold text-primary-600 mb-2">
                {education.institution}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {education.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  {education.status}
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-3 mb-4 inline-block">
                <span className="text-sm font-medium text-neutral-700">
                  Expected GPA: {education.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-700 mb-6 leading-relaxed">
            {education.description}
          </p>

          {/* Academic Highlights */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-neutral-900 mb-3">
              Academic Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {education.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  <span className="text-neutral-700 text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-3">
              Academic Achievements
            </h4>
            <div className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-semantic-success mr-2 mt-1">✓</span>
                  <span className="text-neutral-700 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-card p-8 border border-neutral-200 shadow-card">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    {cert.title}
                  </h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'In Progress' 
                      ? 'bg-semantic-warning text-white' 
                      : 'bg-semantic-success text-white'
                  }`}>
                    {cert.status || 'Completed'}
                  </span>
                </div>
                
                <p className="text-sm text-neutral-600 mb-2">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    {cert.date || cert.status}
                  </span>
                  <span className="text-xs text-primary-600 font-medium">
                    {cert.badge || cert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600">
              <span className="font-semibold">Bronze League</span> status on Google Cloud Skills Boost with 1,190 points
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
