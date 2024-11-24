import React from 'react';
import { ChefHat, Code, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Code className="w-8 h-8 text-purple-600" />
            <Shield className="w-8 h-8 text-blue-600" />
            <ChefHat className="w-8 h-8 text-gray-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Software Developer & Security Specialist
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From Executive Chef to Code Craftsman
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Combining the precision and creativity of fine dining with the art of software development.
            Specialized in blockchain technology and cybersecurity.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects"
               className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              View Projects
            </a>
            <a href="#contact"
               className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;