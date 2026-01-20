import React from 'react';
import Hero from '../components/Hero';
import InsightsSection from '../components/InsightsSection';
import CodeSection from '../components/CodeSection';
import FeaturesAndPromo from '../components/FeaturesAndPromo';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <InsightsSection />
      <CodeSection />
      <FeaturesAndPromo />
    </>
  );
};

export default Home;