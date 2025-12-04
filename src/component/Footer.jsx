import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-gray-900 text-base-content p-4">
                <aside>
                    <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Muntasir Mahmud</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;