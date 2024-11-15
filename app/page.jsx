"use client";
import { useEffect } from 'react'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Work from '@/components/work/Work'
import Contact from '@/components/Contact'
import FixedMenu from '@/components/FixedMenu';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';


const Home = () => {
  // Implement locomotive Scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      {/* Temporary Div */}
    
    </div>
  )
}

export default Home