import { useNavigate } from 'react-router-dom';

const roles = [
  {
    title: 'Volunteer Software Engineer',
    icon: 'ri-code-s-slash-line',
    description: 'Help build open-source tools for carbon tracking and climate intelligence. Work with React, TypeScript, Node.js, and cloud technologies.',
    commitment: '10-15 hours/week',
    skills: ['React', 'TypeScript', 'Node.js', 'Cloud Services'],
    path: '/careers/volunteer-software-engineer',
  },
  {
    title: 'Volunteer UX Designer',
    icon: 'ri-palette-line',
    description: 'Design intuitive interfaces that make climate data accessible to everyone. Create user flows, prototypes, and visual designs for our platform.',
    commitment: '8-12 hours/week',
    skills: ['Figma', 'User Research', 'Prototyping', 'Visual Design'],
    path: '/careers/volunteer-ux-designer',
  },
];

export default function GetInvolvedSection() {
  const navigate = useNavigate();

  return (
    <section id="get-involved" className="py-12 sm:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Careers &amp; Volunteering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are always looking for passionate people to join our ranks. Explore current volunteer opportunities and find out how you can contribute your skills to make a real impact on climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-16">
          {roles.map((role) => (
            <div
              key={role.path}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 hover:border-teal-300 transition-all hover:shadow-2xl cursor-pointer group"
              onClick={() => navigate(role.path)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-2xl group-hover:bg-teal-200 transition-colors">
                  <i className={`${role.icon} text-4xl text-teal-600`}></i>
                </div>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                  Volunteer
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">{role.description}</p>
              <p className="text-sm text-gray-500 mb-5">
                <i className="ri-time-line text-teal-600 mr-1"></i>
                {role.commitment}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {role.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                View Details &amp; Apply
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Green Occasion?</h3>
            <p className="text-base text-gray-600">
              Be part of a movement that's making a real difference in the fight against climate change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-xl mx-auto mb-4">
                <i className="ri-hand-heart-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Make Real Impact</h4>
              <p className="text-sm text-gray-600">
                Your work directly contributes to reducing global carbon emissions
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-xl mx-auto mb-4">
                <i className="ri-group-line text-3xl text-emerald-600"></i>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Join a Community</h4>
              <p className="text-sm text-gray-600">
                Connect with like-minded individuals passionate about sustainability
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mx-auto mb-4">
                <i className="ri-rocket-line text-3xl text-green-600"></i>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Grow Your Skills</h4>
              <p className="text-sm text-gray-600">
                Work on cutting-edge technology and expand your expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}