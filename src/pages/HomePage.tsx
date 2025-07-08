import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Stats from '../components/Stats';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import ParticleNetwork from '../components/ParticleNetwork';
import TutorWidget from '../components/TutorWidget';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <PricingSection />
      <Footer />
      <TutorWidget />
    </div>
  );
};

export default HomePage;