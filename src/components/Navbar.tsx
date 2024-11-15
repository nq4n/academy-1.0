import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('tools')} 
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Tools
            </button>
            <button 
              onClick={() => scrollToSection('experts')} 
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Experts
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('tools')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Tools
            </button>
            <button 
              onClick={() => scrollToSection('experts')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Experts
            </button>
            <button className="w-full btn-primary mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}