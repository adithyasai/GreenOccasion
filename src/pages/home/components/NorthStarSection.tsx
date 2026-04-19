export default function NorthStarSection() {
  return (
    <section id="north-star" className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Our North Star
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Vision & Mission
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto italic">
            "We don't just want to plant trees; we want to re-engineer how the world breathes."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-2xl mb-6">
                <i className="ri-eye-line text-4xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A world where <strong>every ton of carbon is measured</strong>, <strong>managed</strong>, and <strong>minimized</strong>.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-teal-50 rounded-full">
                    <i className="ri-check-line text-lg text-teal-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Complete carbon accountability</span>
                </div>
                <div className="flex items-center space-x-3 mt-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-teal-50 rounded-full">
                    <i className="ri-check-line text-lg text-teal-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Optimized sustainable actions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-2xl mb-6">
                <i className="ri-compass-3-line text-4xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                To empower <strong>people and organizations</strong> with simple, transparent tools to <strong>track emissions</strong> and take <strong>meaningful climate action</strong>.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-50 rounded-full">
                    <i className="ri-check-line text-lg text-emerald-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Data-driven insights</span>
                </div>
                <div className="flex items-center space-x-3 mt-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-50 rounded-full">
                    <i className="ri-check-line text-lg text-emerald-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">Open-source technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="grid grid-cols-3 gap-4 sm:inline-flex sm:items-center sm:space-x-8 bg-white rounded-2xl px-4 sm:px-12 py-6 sm:py-8 shadow-lg max-w-md sm:max-w-none mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-teal-600">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Volunteer-Driven</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-teal-600">Open</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Source Standards</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-teal-600">Global</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Impact Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}