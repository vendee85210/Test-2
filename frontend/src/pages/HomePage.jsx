import React from 'react';
import HeroSection from '../components/home/HeroSection';

import DreamHolidaysSection from '../components/home/DreamHolidaysSection';
import RegionalShowcase from '../components/home/RegionalShowcase';
import WhyChooseUs from '../components/home/WhyChooseUs';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DreamHolidaysSection />
      <RegionalShowcase />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;