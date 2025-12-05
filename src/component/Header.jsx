import React, { useState, useEffect } from 'react';
import myPic from '../assets/myPic.png';
import { VscGithubInverted } from 'react-icons/vsc';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FiDownload, FiMail } from 'react-icons/fi';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // page load er por 100ms delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id='home' className='w-11/12 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-5 justify-between md:pt-12 text-white'>

            {/* TEXT SECTION */}
            <div className={`md:w-1/2 w-full space-y-5 text-center md:text-left order-2 md:order-1
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>

                <h1 className='text-4xl rancho md:text-6xl font-semibold leading-tight'>
                    Hey, I'm <span className='bg-gradient-to-r from-yellow-300 via-green-400 to-cyan-400 bg-clip-text text-transparent'>Muntasir Mahmud</span>
                </h1>

                <h2 className='text-xl md:text-2xl font-semibold text-gray-200'>
                    Full-Stack Developer & Web Enthusiast
                </h2>

                <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
                    “I build modern, user-centric web applications that combine clean engineering with thoughtful design.
                    My goal is to create digital products that are both functional and make a real impact.”
                </p>

                <div className="flex items-center gap-4 pt-3.5">
                    <a href="https://wa.me/8801613790795" target="_blank" className="text-green-500 hover:text-green-600">
                        <FaSquareWhatsapp size={32} />
                    </a>
                    <a href="https://github.com/muntasirtanjil" target="_blank" className="hover:text-gray-400">
                        <VscGithubInverted size={32} />
                    </a>
                    <a href="mailto:muntasirtanjil9@gmail.com" className="hover:text-red-600">
                        <FiMail size={32} />
                    </a>
                    <a
                        href="/muntasir-resume.pdf"
                        download
                        className="flex items-center gap-2 btn btn-outline border-[#2dff7c] hover:bg-[#2dff7c] hover:text-black transition-colors duration-200"
                    >
                        <FiDownload size={20} /> Download Resume
                    </a>

                </div>
            </div>

            {/* IMAGE SECTION */}
            <div className={`md:w-1/2 w-full flex justify-center mt-8 md:mt-0 order-1 md:order-2
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
                <img
                    src={myPic}
                    alt="Muntasir"
                    className='w-60 h-full md:w-70 md:h-object-cover hover:scale-105 active:scale-105 focus:scale-105
 transition-transform duration-300'
                />
            </div>
        </section>
    );
};

export default Header;
