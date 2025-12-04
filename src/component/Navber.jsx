// Navber.jsx
import React, { useState } from 'react';
import logo from '../assets/1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navber = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-3 px-6 backdrop-blur-md bg-white/30 shadow-md text-white">

            {/* Logo */}
            <div>
                <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                <a href="#home" className="hover:text-[#2dff7c] transition-colors duration-200">Home</a>
                <a href="#about" className="hover:text-[#2dff7c] transition-colors duration-200">About Me</a>
                <a href="#skill" className="hover:text-[#2dff7c] transition-colors duration-200">Skill</a>
                <a href="#projects" className="hover:text-[#2dff7c] transition-colors duration-200">Projects</a>
                <a href="#contact" className="hover:text-[#2dff7c] transition-colors duration-200">Contact</a>

            </div>
            <div className='hidden md:flex'>
                <NavLink to='/blogs' className="btn btn-outline border-[#2dff7c] hover:bg-[#2dff7c] hover:text-black text-[#2dff7c] transition-colors duration-200">Blogs</NavLink>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden relative z-50" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full right-0 w-48 flex flex-col gap-3 bg-black/30 backdrop-blur-md transition-transform duration-300 transform ${isOpen ? 'translate-x-0 py-4' : 'translate-x-full py-0'}`}>
                <a href="#home" className="px-4 py-2 text-center hover:text-[#2dff7c] " onClick={() => setOpen(false)}>Home</a>
                <a href="#about" className="px-4 py-2 text-center hover:text-[#2dff7c] " onClick={() => setOpen(false)}>About Me</a>
                <a href="#skill" className="px-4 py-2 text-center hover:text-[#2dff7c] " onClick={() => setOpen(false)}>Skill</a>
                <a href="#projects" className="px-4 py-2 text-center hover:text-[#2dff7c] " onClick={() => setOpen(false)}>Projects</a>
                <a href="#contact" className="px-4 py-2 text-center hover:text-[#2dff7c] " onClick={() => setOpen(false)}>Contact</a>

                <NavLink to='/blogs' className="btn btn-outline border-[#2dff7c] hover:bg-[#2dff7c] hover:text-black text-[#2dff7c] transition-colors duration-200">Blogs</NavLink>

            </div>
        </div>
    );
};

export default Navber;
