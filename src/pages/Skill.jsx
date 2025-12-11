import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import css from '../assets/css-removebg-preview.png'
import js from '../assets/javaScript-removebg-preview.png'
import tailwind from '../assets/tailwind-removebg-preview.png'
import react from '../assets/react_logo-removebg-preview.png'
import nextJS from '../assets/nextJS-removebg-preview.png'
import html from '../assets/ChatGPT Image Dec 11, 2025, 12_08_17 PM.png'


import nodeJs from '../assets/node_js-removebg-preview.png'
import expressJS from '../assets/express-removebg-preview.png'
import mongoDB from '../assets/mongo_DB-removebg-preview.png'

import firebase from '../assets/fitrebase-removebg-preview.png'
import nextAuth from '../assets/nextAuth-removebg-preview.png'


import figma from '../assets/figma-removebg-preview.png'
import git from '../assets/git-removebg-preview.png'
import { LiaToolsSolid } from 'react-icons/lia';





const Skill = () => {
    return (
        <div>
            <h1 className="text-3xl text-center pb-6 md:text-4xl font-bold mb-4 
               bg-gradient-to-r from-[#2dff7c] to-[#00c3ff]
               bg-clip-text text-transparent bg-[length:200%_200%]">
                My Expertise
            </h1>


            <div className='flex flex-col justify-center '>
                <h2 className="text-4xl text-center  font-bold 
               bg-gradient-to-r from-yellow-300 via-green-400 to-cyan-400 
               bg-clip-text text-transparent inline-block ">
                    Frontend Development
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mt-10">

                    {/* Skill Card */}
                    {[
                        { img: html, name: "HTML" },
                        { img: css, name: "CSS" },
                        { img: tailwind, name: "Tailwind CSS" },
                        { img: js, name: "JavaScript" },
                        { img: react, name: "React.JS" },
                        { img: nextJS, name: "Next.JS" },
                    ].map((skill, index) => (
                        <div key={index}
                            className="flex flex-col items-center  justify-center w-32 h-32 
                    border-1 border-gray-600 rounded-2xl 
                    p-4 transition-transform duration-300 
                    hover:scale-105  active:scale-105 focus:scale-105
 hover:border-[#2dff7c] cursor-pointer 
                    bg-[#121212] shadow-md hover:shadow-lg">

                            <img className="w-12 h-12 mb-2" src={skill.img} alt={skill.name} />
                            <h1 className="text-sm md:text-base font-semibold text-center">
                                {skill.name}
                            </h1>
                        </div>
                    ))}

                </div>


            </div>
            {/* backend  */}
            <div className='flex flex-col justify-center text-center mt-10'>
                <h2 class="text-4xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                    Backend Development
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mt-10">

                    {/* Skill Card */}
                    {[
                        { img: nodeJs, name: "Node js" },
                        { img: expressJS, name: "express JS" },
                        { img: mongoDB, name: "MongoDB" },

                    ].map((skill, index) => (
                        <div key={index}
                            className="flex flex-col items-center justify-center w-32 h-32 
                    border-1 border-gray-600 rounded-2xl 
                    p-4 transition-transform duration-300 
                    hover:scale-105 active:scale-105 focus:scale-105
 hover:border-indigo-500 cursor-pointer 
                    bg-[#121212] shadow-md hover:shadow-lg">

                            <img className="w-12 h-12 mb-2" src={skill.img} alt={skill.name} />
                            <h1 className="text-sm md:text-base font-semibold text-center">
                                {skill.name}
                            </h1>
                        </div>
                    ))}

                </div>
            </div>
            {/* authentication */}
            <div className='flex flex-col mt-10 justify-center'>
                <h1 class="text-2xl md:text-4xl font-bold 
           bg-gradient-to-r from-red-500 via-orange-400 to-green-400 
           bg-clip-text text-transparent text-center inline-block">
                    Authentication
                </h1>

                <div className="flex flex-wrap justify-center gap-6 mt-10">


                    {[

                        { img: firebase, name: "Firebase" },
                        { img: nextAuth, name: "NextAuth" },
                    ].map((skill, index) => (
                        <div key={index}
                            className="flex flex-col items-center    justify-center w-32 h-32 
                    border-1 border-gray-600 rounded-2xl 
                    p-4 transition-transform duration-300 
                    hover:scale-105 active:scale-105 focus:scale-105
 hover:border-[#2dff7c] cursor-pointer 
                    bg-[#121212] shadow-md hover:shadow-lg">

                            <img className="w-12 h-12 mb-2" src={skill.img} alt={skill.name} />
                            <h1 className="text-sm md:text-base font-semibold text-center">
                                {skill.name}
                            </h1>
                        </div>
                    ))}

                </div>
            </div>

            {/* other toos */}

            <div className='flex flex-col mt-10 justify-center'>
                <span className='flex justify-center items-center ju gap-2 text-center'>
                    <LiaToolsSolid size={32} className="text-gradient" />
                    <span className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent'>
                        Others Tools
                    </span>
                </span>



                <div className="flex flex-wrap justify-center gap-6 mt-10">


                    {[

                        { img: git, name: "Git" },
                        { img: figma, name: "Figma" },
                    ].map((skill, index) => (
                        <div key={index}
                            className="flex flex-col items-center    justify-center w-32 h-32 
                    border-1 border-gray-600 rounded-2xl 
                    p-4 transition-transform duration-300 
                    hover:scale-105 active:scale-105 focus:scale-105
 hover:border-[#2dff7c] cursor-pointer 
                    bg-[#121212] shadow-md hover:shadow-lg">

                            <img className="w-12 h-12 mb-2" src={skill.img} alt={skill.name} />
                            <h1 className="text-sm md:text-base font-semibold text-center">
                                {skill.name}
                            </h1>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    );
};

export default Skill;