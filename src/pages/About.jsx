import React from 'react';
import tanjil from '../assets/tanjil.png';
import Skill from './Skill';

const About = () => {
    return (
        <section className="mt-16 px-5 md:px-20 lg:px-32">
            <h2 className=" text-3xl md:text-4xl text-center mb-4 font-extrabold 
               bg-gradient-to-r from-yellow-300 via-green-400 to-cyan-400 
               bg-clip-text text-transparent">
                About Me


            </h2>
            <hr />
            <div className="flex flex-col mt-6 md:flex-row items-center md:items-start gap-10">

                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src={tanjil}
                        alt="Muntasir Tanjil"
                        className="w-64 md:w-80 rounded-2xl shadow-xl object-cover hover:scale-105 active:scale-105 focus:scale-105
 transition-transform duration-300"
                    />
                </div>

                {/* Text Content */}

                <div className="max-w-xl">
                    <h1 className="text-xl md:text-xl font-bold mb-4 bg-gradient-to-r from-[#ffffff] to-[#7de1ff] bg-clip-text text-transparent">
                        Personal Information
                    </h1>
                    <p className="text-gray-400 leading-relaxed text-justify">
                        I am passionate about exploring new technologies and solving real-world problems through code. My main focus is on building responsive, fast, and interactive web applications that deliver excellent user experiences.
                    </p>
                    <p className='text-gray-400 mt-4 leading-relaxed text-justify"'>
                        I have experience working in team environments and have participated in institute-level competitions, where I achieved 2nd position.
                    </p>
                    <p className="text-gray-400  leading-relaxed mt-4 text-justify">
                        <span className='font-bold text-lg'>Outside of coding</span>, I enjoy playing football, traveling, and spending quality time with friends. I am a hard-working individual who constantly seeks to learn, grow, and stay updated with the latest trends in  <span className='font-bold'>web development and AI</span>.
                    </p>
                </div>
            </div>
            <div className="mt-16 md:mt-20  md:px-20 ">
                {/* Section Heading */}
                <hr className='mb-5' />
                <h1 className="text-3xl text-center pb-6 md:text-4xl font-bold mb-4 
    bg-gradient-to-r from-[#00ff66] to-[#00eaff]
    bg-clip-text text-transparent">
                    My Education
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">

                    {/* Card 1 */}
                    <div className="flex-1 w-full md:w-1/2 border-l-4   border-[#2dff7c] rounded-xl p-6 bg-[#121212] text-white 
                  shadow-lg hover:shadow-2xl hover:scale-105 active:scale-105 focus:scale-105
 transition-transform duration-300">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            Secondary School Certificate <br /> (SSC)
                        </h2>
                        <p className="text-gray-300 mb-2">2022 – 2023</p>
                        <p className="text-gray-200 leading-relaxed">
                            Completed SSC with a strong academic foundation.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 w-full md:w-1/2 border-l-4 border-[#2dff7c] rounded-xl p-6 bg-[#0f0f0f] text-white 
                  shadow-lg hover:shadow-2xl hover:scale-105 active:scale-105 focus:scale-105
 transition-transform duration-300">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            Diploma in Computer Science & Technology
                        </h2>
                        <p className="text-gray-300 mb-2">Running</p>
                        <p className="text-gray-200 leading-relaxed">
                            Feni Polytechnic Institute
                        </p>
                    </div>

                </div>

            </div>


        </section>
    );
};

export default About;
