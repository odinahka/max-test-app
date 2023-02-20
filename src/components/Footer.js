import React from 'react';

import {AiFillLinkedin, AiOutlineWhatsApp, AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='flex  flex-col pt-6 space-y-4 min-h-[200px]'>
            <div className='flex space-x-8 justify-evenly'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <AiFillLinkedin className='text-blue-700'/>
                <AiOutlineWhatsApp className='text-green-600'/>
                <BsTwitter className='text-blue-500'/>
                <FaFacebookF className='text-blue-600'/>
                <AiFillInstagram className='text-pink-600'/>

            </div>
            <div>
                <h3>Company</h3>
                <p className='text-gray-500'>Home</p>
                <p className='text-gray-500'>About Us</p>
            </div>
            <div>
                <h3>Legal</h3>
                <p className='text-gray-500'>Term of service</p>
                <p className='text-gray-500'>Privacy policy</p>
            </div>
            <div>
                <h3>Community</h3>
                <p className='text-gray-500'>Blog</p>
                <p className='text-gray-500'>FAQs</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p className='text-gray-500'>info@visaprof.com</p>
                <p className='text-gray-500'>07017401336</p>
            </div>
            </div>
            <div className='h-[70px] bg-max_file_logo_blue container text-white flex items-center justify-center'>
                <p>&#169; {new Date().getFullYear()} VISAPROF Visa processing firm. All rights reserved </p>
            </div>
        </div>
    );
}

export default Footer;
