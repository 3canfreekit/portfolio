import React from 'react';
import { Database, Lock, Binary, Server, Code2, Workflow } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-8 h-8 text-purple-600 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Skills = () => {
  const skills = [
    {
      icon: Binary,
      title: "Blockchain Development",
      description: "Deep understanding of blockchain architecture, smart contracts, and DeFi protocols"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Application security, penetration testing, and secure coding practices"
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Modern web development with React, Node.js, and related technologies"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experience with SQL and NoSQL databases, data modeling"
    },
    {
      icon: Server,
      title: "System Architecture",
      description: "Designing scalable and secure software systems"
    },
    {
      icon: Workflow,
      title: "Project Management",
      description: "Leadership experience from culinary background applied to tech projects"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with leadership experience from the culinary world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;