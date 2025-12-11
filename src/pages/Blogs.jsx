import React from 'react';
import { Link, Navigate } from 'react-router';
import Navber from '../component/Navber';

const Blogs = () => {

    return (
        <div className='bg-black h-screen pt-20  '>

            <div className='space-y-5 w-11/12 mx-auto'>
                <Navber></Navber>
                <h1 className='text-white text-center text-3xl md:text-4xl '>No Blogs Available Now! </h1>
                <Link className=' btn text-center text-xl  bg-gradient-to-r from-green-400 to-yellow-300' to="/">Back To Home</Link>
            </div>
        </div>
    );
};

export default Blogs; 