import React from 'react';
import NavBar from './components/organisms/NavBar';
import HeroSection from './components/organisms/HeroSection';
import AboutSection from './components/organisms/AboutSection';
import ServicesSection from './components/organisms/ServicesSection';
import ProcessSection from './components/organisms/ProcessSection';
import TestimonialsSection from './components/organisms/TestimonialsSection';
import FaqSection from './components/organisms/FaqSection';
import ContactSection from './components/organisms/ContactSection';
import Footer from './components/organisms/Footer';
import heroBg from './assets/herobg.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="relative bg-[#f0f5ff] bg-[length:100%_100%] bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <NavBar />
        <HeroSection />
      </div>
      
      <main>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
