import React from 'react';
import { Link, Navigate } from 'react-router';
import Navber from '../component/Navber';

const Blogs = () => {

    return (
        <div className='bg-black py-20  '>

            <Navber></Navber>
            <h1 className='text-white text-center text-3xl md:text-4xl'>No Blogs Available Now! </h1>
            <Link className=' btn text-center text-xl' to="/">Back To Home</Link>
        </div>
    );
};

export default Blogs; 