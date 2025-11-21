import { Smartphone, Briefcase, FileText, Palette, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Responsive Website Development',
      description: 'Build mobile-friendly and clean websites that work seamlessly across all devices.',
    },
    {
      icon: Briefcase,
      title: 'Portfolio & Personal Websites',
      description: 'Showcase your work professionally with a custom-built portfolio that stands out.',
    },
    {
      icon: FileText,
      title: 'Landing Pages for Businesses',
      description: 'Create attractive and functional landing pages that convert visitors into customers.',
    },
    {
      icon: Palette,
      title: 'Website Redesigns',
      description: 'Improve existing websites with better layouts, responsiveness, and modern design.',
    },
    {
      icon: Wrench,
      title: 'Bug Fixes & Front-End Optimization',
      description: 'Fix errors, improve design quality, and optimize performance for better user experience.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional web development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            Your website deserves to look great—let's build it together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
