import { useState, useEffect } from 'react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Our Mission', id: 'north-star' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Our Story', id: 'initiative' },
    { label: 'Get Involved', id: 'get-involved' },
  ];

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`flex items-center justify-center transition-all ${isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'}`}>
              <img 
                src="https://static.readdy.ai/image/2eefbf55cd16506717139f8211e944ba/4383c94167703d17839eac4a2f6afde3.png" 
                alt="GreenOccasion Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-gray-900 transition-all ${isScrolled ? 'text-base sm:text-xl' : 'text-lg sm:text-2xl'}`}>
                Green Occasion
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-600 font-medium -mt-0.5">
                Carbon Solutions
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('get-involved')}
              className="px-5 py-2 bg-teal-600 text-white text-sm font-medium rounded-full hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Join Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
              isScrolled || mobileOpen ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('get-involved')}
              className="w-full mt-2 px-4 py-3 bg-teal-600 text-white text-base font-semibold rounded-full hover:bg-teal-700 transition-colors cursor-pointer"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
