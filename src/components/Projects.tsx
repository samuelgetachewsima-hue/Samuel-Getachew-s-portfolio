import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'My Portfolio Website',
      role: 'Designed and developed the full website using HTML, CSS, and JavaScript',
      goal: 'Build a personal portfolio to showcase my skills, projects, and contact information',
      features: [
        'Hero section, About Me, Skills, Services, Projects, Contact form',
        'Fully responsive layout',
        'Clean, modern design with smooth navigation',
      ],
      outcome: 'A professional portfolio website that clearly presents my skills and work',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Freedom Hotel Website',
      role: 'Built the front-end layout, designed pages, and ensured responsiveness across devices',
      goal: 'Create a website for Freedom Hotel to attract clients and show services online',
      features: [
        'Home, Rooms, Services, Contact sections',
        'Image gallery for rooms and hotel facilities',
        'Booking/contact form integration (front-end only)',
      ],
      outcome: 'A fully responsive hotel website that enhances client visibility and bookings',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
    {
      title: 'Selam Photo Studio Website',
      role: 'Built all pages with HTML, CSS, and JavaScript',
      goal: 'Develop a website for Selam Photo Studio to showcase photography services and portfolios',
      features: [
        'Gallery section for photos and albums',
        'Services and pricing information',
        'Contact section for inquiries',
      ],
      outcome: 'A clean, responsive website that highlights the studio\'s work professionally',
      tags: ['HTML', 'CSS', 'JavaScript', 'Gallery'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completed projects that showcase my skills and experience
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <ExternalLink className="text-gray-400 hover:text-blue-600 transition-colors" size={24} />
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">GOAL</p>
                <p className="text-gray-700">{project.goal}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-cyan-600 mb-2">ROLE</p>
                <p className="text-gray-700">{project.role}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">FEATURES</p>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-green-600 mb-2">OUTCOME</p>
                <p className="text-gray-700">{project.outcome}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
