import { useState, useEffect } from 'react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center transition-all ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <img 
                src="https://static.readdy.ai/image/2eefbf55cd16506717139f8211e944ba/4383c94167703d17839eac4a2f6afde3.png" 
                alt="GreenOccasion Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-gray-900 transition-all ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                Green Occasion
              </span>
              <span className="text-xs text-emerald-600 font-medium -mt-0.5">
                Carbon Solutions
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('north-star')}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection('what-we-do')}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection('initiative')}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('get-involved')}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection('get-involved')}
              className="px-6 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-full hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
