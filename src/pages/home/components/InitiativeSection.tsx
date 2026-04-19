export default function InitiativeSection() {
  return (
    <section id="initiative" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Our Initiative
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The "Green Occasion" Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why We Started
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl mb-6">
                  <i className="ri-earth-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Born in India, Driven by the World</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Green Occasion started as a conversation among <strong>techies and environmentalists</strong> who realized that you cannot manage what you cannot measure. What began as late-night discussions in Bangalore has grown into a global movement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-teal-100 rounded-full mt-1 flex-shrink-0">
                      <i className="ri-map-pin-line text-sm text-teal-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Indian Roots</div>
                      <div className="text-sm text-gray-600">Founded by passionate technologists in India</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mt-1 flex-shrink-0">
                      <i className="ri-global-line text-sm text-emerald-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Global Impact</div>
                      <div className="text-sm text-gray-600">Serving communities worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-12 text-white flex flex-col justify-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <i className="ri-heart-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Volunteer-Led Powerhouse</h3>
                <p className="text-base leading-relaxed mb-6 text-white/90">
                  We operate as a <strong>volunteer-led powerhouse</strong>. By removing the profit motive, we ensure our standards remain unbiased and our tech remains accessible to those who need it most.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-xs text-white"></i>
                    </div>
                    <span className="text-sm">Unbiased open standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-xs text-white"></i>
                    </div>
                    <span className="text-sm">Accessible technology for all</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-xs text-white"></i>
                    </div>
                    <span className="text-sm">From startups to global hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-xl mx-auto mb-4">
                <i className="ri-lightbulb-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation First</h4>
              <p className="text-sm text-gray-600">
                Pioneering new approaches to carbon measurement and reduction
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-xl mx-auto mb-4">
                <i className="ri-open-source-line text-3xl text-emerald-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Open Source</h4>
              <p className="text-sm text-gray-600">
                All our tools and standards are freely available to everyone
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mx-auto mb-4">
                <i className="ri-community-line text-3xl text-green-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Community Driven</h4>
              <p className="text-sm text-gray-600">
                Built by volunteers who believe in a sustainable future
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <p className="text-xl font-semibold mb-2">
              "You cannot manage what you cannot measure."
            </p>
            <p className="text-sm text-white/80">
              This simple truth drives everything we do at Green Occasion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}