import React from 'react';
import { FaGithub, FaWhatsappSquare } from 'react-icons/fa';
import { IoLocationSharp, IoMailUnreadSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = (e) => {

        // এখানে Netlify বা অন্য backend call করতে পারি

        // Success Alert দেখানো
        Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been successfully sent.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Form reset (optional)
        e.target.reset();
    };

    return (
        <section className="w-11/12 mx-auto py-12">

            {/* MAIN TITLE */}
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-10
                bg-gradient-to-r from-yellow-300 via-green-400 to-cyan-400
                bg-clip-text text-transparent">
                Contact
            </h2>
            <hr />

            <div className='flex flex-col mt-6 md:flex-row items-start md:items-center gap-12 justify-center'>

                {/* LEFT SIDE: TEXT & CONTACT INFO */}
                <div className="md:w-1/2 w-full space-y-6">

                    {/* Gradient Line */}
                    <h1 className='text-3xl md:text-4xl font-bold
                        bg-gradient-to-r from-indigo-300 via-green-400 to-cyan-400
                        bg-clip-text text-transparent'>
                        Let’s talk in the language of coding!
                    </h1>

                    <p className='text-lg text-gray-300 leading-relaxed'>
                        Have a project in mind? Whether it’s web development, design, or collaboration —
                        I’d love to hear about it.
                    </p>

                    {/* CONTACT INFO */}
                    <div className='space-y-4 mt-5'>
                        <span className='flex items-center gap-3 text-gray-300 text-xl hover:text-indigo-400 transition-colors'>
                            <IoMailUnreadSharp size={24} className='text-indigo-500' />
                            muntasirtanjil9@gmail.com
                        </span>
                        <span className='flex items-center gap-3 text-gray-300 text-xl hover:text-green-400 transition-colors'>
                            <FaWhatsappSquare size={24} className='text-green-400' />
                            +8801613790795
                        </span>
                        <span className='flex items-center gap-3 text-gray-300 text-xl hover:text-gray-100 transition-colors'>
                            <FaGithub size={24} />
                            muntasirtanjil
                        </span>
                        <span className='flex items-center gap-3 text-gray-300 text-xl hover:text-red-400 transition-colors'>
                            <IoLocationSharp size={24} className='text-red-500' />
                            Cumilla, Bangladesh
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE: FORM */}
                <div className="md:w-1/2 w-full flex justify-center mx-auto my-10">
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl w-full max-w-md"
                    >

                        {/* Hidden input for Netlify */}
                        <input type="hidden" name="form-name" value="contact" />

                        {/* FORM HEADING */}
                        <legend
                            className="text-2xl mb-5 font-bold
            bg-gradient-to-r from-yellow-300 via-green-400 to-cyan-400
            bg-clip-text text-transparent"
                        >
                            Send Message
                        </legend>

                        {/* NAME */}
                        <label className="label text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input text-black w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter your name"
                            required
                        />

                        {/* EMAIL */}
                        <label className="label text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input text-black w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter your email"
                            required
                        />

                        {/* MESSAGE */}
                        <label className="label text-gray-300 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            className="textarea text-black w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                        {/* BUTTON */}
                        <button
                            type="submit" // Submit type
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-300 via-green-400 to-cyan-400
                   text-black font-bold hover:scale-105 transition-transform shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
