import { Code2, Lightbulb, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I started coding with HTML and CSS and quickly discovered a passion for building responsive websites.
              I focus on creating clean, user-friendly layouts that look good and work well on any device.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy solving problems, learning new skills, and continuously improving my front-end development abilities.
              My goal is to build websites that are simple, functional, and visually appealing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <Code2 className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600">Writing semantic, maintainable code that follows best practices.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <Lightbulb className="text-cyan-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solver</h3>
                <p className="text-gray-600">Finding creative solutions to technical challenges.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <Target className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Focused</h3>
                <p className="text-gray-600">Building experiences that users love and find intuitive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
