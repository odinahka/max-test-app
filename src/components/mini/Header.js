import React from 'react';

const Header = ({isSignedIn, setPage}) => {
    return (
        <div className='flex flex-row justify-between'>
            <div className='flex space-x-4'>
            <div className='bg-max_file_logo_blue relative px-4 rounded-r-[80px]' >
            <div className='h-full left-0 w-4 rounded-r-[180px] bg-white absolute'/>
            <img src={'maxfile/visaprof-logo 1.png'} alt='#'/>
            </div>
            <ul className='hidden text-center mt-6 lg:flex space-x-2 xl:space-x-5'>
                <li className='hover:cursor-pointer '>Agent Information</li>
                <li className='hover:cursor-pointer '>Country requirements</li>
                <li className='hover:cursor-pointer '>About Us</li>
                <li className='hover:cursor-pointer '>Contact Us</li>
            </ul>
            </div>
            <div className='mt-6 space-x-2'>
                {!isSignedIn && <>
                <button className='px-4 border border-max_file_yellow_1 rounded-lg' onClick={() => setPage('signIn')}>Sign In</button>
                <button className='px-4 border border-max_file_yellow_1 bg-max_file_yellow_1 text-white rounded-lg' onClick={() => setPage('signUp')}>Sign Up</button>
                </>}
                {isSignedIn && <button className='px-4 border border-max_file_yellow_1 rounded-lg' onClick={() => setPage('signIn')}>Sign Out</button>}
            </div>
        </div>
    );
}

export default Header;
