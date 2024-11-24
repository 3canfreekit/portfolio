import React from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
              
              <div className="flex items-center space-x-3 ml-6">
                <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://hackmd.io/@YOUR_HACKMD" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600 transition-colors">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#about" className="block px-3 py-2 hover:text-purple-600">About</a>
            <a href="#skills" className="block px-3 py-2 hover:text-purple-600">Skills</a>
            <a href="#projects" className="block px-3 py-2 hover:text-purple-600">Projects</a>
            <a href="#experience" className="block px-3 py-2 hover:text-purple-600">Experience</a>
            <a href="#contact" className="block px-3 py-2 hover:text-purple-600">Contact</a>
            
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://hackmd.io/@YOUR_HACKMD" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;