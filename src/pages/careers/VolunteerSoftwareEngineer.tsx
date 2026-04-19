import { useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';

export default function VolunteerSoftwareEngineerPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i> Back to Home
          </button>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl shrink-0">
              <i className="ri-code-s-slash-line text-5xl text-white"></i>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                  Volunteer
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                  Remote
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Volunteer Software Engineer</h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Build open-source tools that help measure, track, and reduce carbon emissions globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column — details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Role</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a Volunteer Software Engineer at Green Occasion, you will be at the heart of building technology solutions
                that directly combat climate change. You'll work alongside passionate volunteers to develop open-source tools
                for carbon tracking, emission analytics, and sustainability reporting.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is a remote, volunteer position perfect for engineers who want to use their skills for meaningful
                environmental impact while gaining experience with modern tech stacks and real-world sustainability challenges.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Do</h2>
              <ul className="space-y-4">
                {[
                  'Build and maintain web applications using React, TypeScript, and Node.js',
                  'Develop APIs and data pipelines for carbon emission tracking',
                  'Collaborate with designers and researchers to ship user-focused features',
                  'Write clean, tested, and well-documented code',
                  'Participate in code reviews and technical design discussions',
                  'Contribute to open-source projects that benefit the climate community',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-teal-100 rounded-full shrink-0 mt-0.5">
                      <i className="ri-check-line text-sm text-teal-600"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {[
                  'Proficiency in JavaScript/TypeScript and at least one frontend framework (React preferred)',
                  'Experience with backend technologies (Node.js, Python, or similar)',
                  'Familiarity with Git, CI/CD, and modern development workflows',
                  'Strong problem-solving skills and attention to detail',
                  'Ability to commit 10-15 hours per week',
                  'Passion for sustainability and environmental issues',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full shrink-0 mt-0.5">
                      <i className="ri-star-line text-sm text-emerald-600"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form */}
            <ApplicationForm roleTitle="Volunteer Software Engineer" />
          </div>

          {/* Right column — sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Role Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-xl text-teal-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Commitment</p>
                    <p className="text-sm font-semibold text-gray-900">10-15 hours/week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-xl text-teal-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-semibold text-gray-900">Fully Remote</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-team-line text-xl text-teal-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Team</p>
                    <p className="text-sm font-semibold text-gray-900">Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-briefcase-line text-xl text-teal-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="text-sm font-semibold text-gray-900">Volunteer (Unpaid)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Git', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
              <h4 className="text-sm font-bold text-teal-700 mb-3">What You'll Gain</h4>
              <ul className="space-y-2">
                {[
                  'Real-world open-source experience',
                  'Work with a global team of changemakers',
                  'Letter of recommendation',
                  'Networking with industry professionals',
                  'Portfolio-worthy project contributions',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="ri-leaf-line text-teal-500"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
