import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Build Something Great</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Reach out for freelance projects or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:Samuelgetachewsima@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Samuelgetachewsima@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+251969355569" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  +251 96 935 5569
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={20} />
            </button>

            {submitMessage && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          © 2025 Samuel Getachew. Built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
