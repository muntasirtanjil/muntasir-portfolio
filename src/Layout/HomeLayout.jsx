// HomeLayout.jsx
import React from 'react';
import Navber from '../component/Navber';
import Header from '../component/Header';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../component/Footer';

const HomeLayout = () => {
  return (
    <div className='suse bg-black text-white'>
      <Navber />

      <section id="home" className='w-11/12 mx-auto pt-16 '>
        <Header />
      </section>

      <section id="about" className='w-10/12 mx-auto py-16'>
        <About />
      </section>

      <section id="skill" className='w-10/12 mx-auto py-16'>
        <Skill />
      </section>

      <section id="projects" className='w-10/12 mx-auto py-16'>
        <Projects />
      </section>

      <section id="contact" className='w-10/12 mx-auto py-16'>
        <Contact />
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default HomeLayout;
