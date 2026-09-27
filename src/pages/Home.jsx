import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Accounts from '../components/sections/Accounts';
import Team from '../components/sections/Team';
import Director from '../components/sections/Director';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Accounts />
      <Team />
      <Director />
      <Contact />
    </>
  );
};

export default Home;