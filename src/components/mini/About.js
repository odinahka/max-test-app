import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col mt-[200px] space-y-6 md:mt-[250px] lg:flex-row lg:mt-0 items-center'>
            <div className='flex-1 flex flex-col items-center'>
                <h2>Africa's <span className='text-max_file_yellow_1'>leading</span> visa consultants</h2>
                <p className='text-center lg:text-left'>VISAPROF is a pioneer in Nigeria's online travel industry. The organization started in 2020 on the basis of an idea conceived by its promoters. VISAPROF is trusted by over 200 clients. We assist applicants in navigating the visa process to any country in which they choose to stay or visit.</p>
            </div>
            <div className='flex flex-1 relative'>
                <img className='z-10' src='maxfile/chess-img.png' alt='#'/>
                <img className='z-0 absolute top-[15%] right-[10%]' src='maxfile/doodle.png' alt='#'/>
            </div>
        </div>
    );
}

export default About;
