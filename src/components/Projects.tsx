import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  githubUrl, 
  liveUrl 
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center text-gray-600 hover:text-purple-600">
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center text-gray-600 hover:text-purple-600">
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on Ethereum smart contracts",
      tags: ["Solidity", "React", "Web3.js", "TypeScript"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with advanced analytics",
      tags: ["React", "Node.js", "MongoDB", "API Integration"],
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=2802",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Restaurant Management System",
      description: "Secure cloud-based system for restaurant operations management",
      tags: ["Python", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1574966739987-27c7f024868f?auto=format&fit=crop&q=80&w=2942",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my journey in software development with a focus on blockchain and security
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;