import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Clean &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Responsive Web Experiences
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I build fast, user-friendly websites that work perfectly on any device.
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Samuel Getachew</span>, a Front-End Web Developer who turns ideas into real websites.
            I focus on clean code, responsive layouts, and smooth user experience. Explore my projects and see how I can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
            >
              View My Work
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
