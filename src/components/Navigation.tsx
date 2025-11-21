import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">Samuel Getachew</div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              Skills
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-gray-900">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
