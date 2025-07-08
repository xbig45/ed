import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomePage;