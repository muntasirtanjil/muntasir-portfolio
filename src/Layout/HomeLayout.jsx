// HomeLayout.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';



import Navber from '../component/Navber';
import Header from '../component/Header';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../component/Footer';

const HomeLayout = () => {

  
  const location = useLocation();

  // Auto scroll when navbar sends { state: { scrollTo: "section" } }
  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      const target = document.getElementById(sectionId);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className='suse bg-black text-white'>
      <Navber />

      <section id="home" className='w-11/12 mx-auto pt-16 '>
        <Header />
      </section>

      <section id="about" className='w-10/12 mx-auto py-16'>
        <About />
      </section>

      <section id="skill" className='w-10/12 fade-up mx-auto py-16'>
        <Skill />
      </section>

      <section id="projects" className='w-10/12 mx-auto py-16'>
        <Projects />
      </section>

      <section id="contact" className='w-10/12 mx-auto py-16'>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomeLayout;
