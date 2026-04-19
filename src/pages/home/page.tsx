import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import NorthStarSection from './components/NorthStarSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import InitiativeSection from './components/InitiativeSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import Navbar from './components/Navbar';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <NorthStarSection />
      <WhatWeDoSection />
      <InitiativeSection />
      <GetInvolvedSection />
    </div>
  );
}