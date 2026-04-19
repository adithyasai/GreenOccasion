import { useState, type FormEvent } from 'react';

const WEB3FORMS_ACCESS_KEY = '98a8e568-dd4c-4d93-9e46-d705c5ab9ea0';

interface ApplicationFormProps {
  roleTitle: string;
}

export default function ApplicationForm({ roleTitle }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    motivation: '',
    availability: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Application: ${roleTitle}`,
          from_name: formData.fullName,
          to: 'adithyasai7979@gmail.com',
          cc: 'srimouni3001@gmail.com',
          role: roleTitle,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError('Failed to submit application. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-gray-100 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
          <i className="ri-check-double-line text-4xl text-emerald-600"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Thank you for applying for the <strong>{roleTitle}</strong> position. We'll review your application and get back to you within 5-7 business days.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors"
        >
          <i className="ri-home-line"></i> Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for this Role</h3>
      <p className="text-gray-600 mb-8">Fill out the form below and we'll get in touch with you.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="linkedIn" className="block text-sm font-semibold text-gray-700 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </div>

        <div>
          <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-700 mb-2">
            Portfolio / GitHub URL
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            placeholder="https://github.com/yourusername"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
            Relevant Experience <span className="text-red-500">*</span>
          </label>
          <textarea
            id="experience"
            name="experience"
            required
            rows={4}
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
            placeholder="Briefly describe your relevant experience and skills..."
          />
        </div>

        <div>
          <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
            Why do you want to volunteer? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="motivation"
            name="motivation"
            required
            rows={3}
            value={formData.motivation}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
            placeholder="Tell us what motivates you to join Green Occasion..."
          />
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
            Weekly Availability <span className="text-red-500">*</span>
          </label>
          <select
            id="availability"
            name="availability"
            required
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
          >
            <option value="">Select your availability</option>
            <option value="5-10">5-10 hours/week</option>
            <option value="10-15">10-15 hours/week</option>
            <option value="15-20">15-20 hours/week</option>
            <option value="20+">20+ hours/week</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-4 bg-teal-600 text-white text-base font-bold rounded-full hover:bg-teal-700 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              Submitting...
            </>
          ) : (
            <>
              <i className="ri-send-plane-line"></i>
              Submit Application
            </>
          )}
        </button>

        {error && (
          <p className="text-red-600 text-sm text-center mt-3">
            <i className="ri-error-warning-line mr-1"></i>{error}
          </p>
        )}
      </form>
    </div>
  );
}
