import { useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';

export default function VolunteerUXDesignerPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i> Back to Home
          </button>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl shrink-0">
              <i className="ri-palette-line text-5xl text-white"></i>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Volunteer UX Designer</h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Design intuitive, beautiful interfaces that make climate data accessible to everyone.
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
                As a Volunteer UX Designer at Green Occasion, you'll shape how millions of people interact with climate
                data. You'll design dashboards, mobile experiences, and web applications that turn complex carbon emission
                data into clear, actionable insights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is a remote, volunteer position ideal for designers who want to apply their craft to one of the
                most pressing challenges of our time — making sustainability understandable and engaging.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Do</h2>
              <ul className="space-y-4">
                {[
                  'Conduct user research to understand the needs of diverse climate-conscious audiences',
                  'Create wireframes, prototypes, and high-fidelity designs in Figma',
                  'Design data visualizations that make carbon metrics intuitive and engaging',
                  'Develop and maintain design systems for consistency across products',
                  'Collaborate closely with engineers to ensure pixel-perfect implementation',
                  'Run usability tests and iterate based on real user feedback',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full shrink-0 mt-0.5">
                      <i className="ri-check-line text-sm text-purple-600"></i>
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
                  'Strong portfolio demonstrating UX/UI design skills',
                  'Proficiency in Figma or similar design tools',
                  'Experience with user research, personas, and journey mapping',
                  'Understanding of accessibility standards (WCAG)',
                  'Ability to commit 8-12 hours per week',
                  'Passion for sustainability and environmental causes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full shrink-0 mt-0.5">
                      <i className="ri-star-line text-sm text-indigo-600"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form */}
            <ApplicationForm roleTitle="Volunteer UX Designer" />
          </div>

          {/* Right column — sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Role Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-xl text-purple-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Commitment</p>
                    <p className="text-sm font-semibold text-gray-900">8-12 hours/week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-xl text-purple-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-semibold text-gray-900">Fully Remote</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-team-line text-xl text-purple-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Team</p>
                    <p className="text-sm font-semibold text-gray-900">Design</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-briefcase-line text-xl text-purple-600"></i>
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="text-sm font-semibold text-gray-900">Volunteer (Unpaid)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tools & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Systems', 'Accessibility', 'Data Visualization', 'Usability Testing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h4 className="text-sm font-bold text-purple-700 mb-3">What You'll Gain</h4>
              <ul className="space-y-2">
                {[
                  'Portfolio pieces with real-world impact',
                  'Work with a global volunteer team',
                  'Letter of recommendation',
                  'Networking with design professionals',
                  'Experience designing for social good',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="ri-palette-line text-purple-500"></i> {item}
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
