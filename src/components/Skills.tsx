export default function Skills() {
  const skills = [
    { name: 'HTML & CSS', description: 'Semantic, clean, and responsive layouts' },
    { name: 'JavaScript', description: 'Dynamic and interactive front-end features' },
    { name: 'TypeScript', description: 'Type-safe JavaScript for scalable projects' },
    { name: 'React.js', description: 'Component-based, modern front-end development' },
    { name: 'Next.js', description: 'Server-side rendering and optimized React apps' },
    { name: 'Tailwind CSS', description: 'Utility-first, fast, and responsive styling' },
    { name: 'Framer Motion', description: 'Smooth animations and interactive UI effects' },
    { name: 'Responsive Design', description: 'Mobile-first design across all devices' },
    { name: 'Git & GitHub', description: 'Version control, collaboration, and deployment' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Front-end technologies and tools I use to build modern web experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
