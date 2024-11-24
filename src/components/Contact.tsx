import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can work together
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="mailto:your.email@example.com"
               className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-purple-600 mr-3" />
              <span>Email Me</span>
            </a>
            
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Linkedin className="w-6 h-6 text-purple-600 mr-3" />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Github className="w-6 h-6 text-purple-600 mr-3" />
              <span>GitHub</span>
            </a>
            
            <a href="https://hackmd.io/@YOUR_HACKMD" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="w-6 h-6 text-purple-600 mr-3" />
              <span>HackMD</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;