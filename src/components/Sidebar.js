import React from 'react';

const Sidebar = () => {
    return (
        <div className='h-screen flex-1 flex flex-col relative'>
            <div className='absolute top-4 bg-max_file_logo_blue'>
                <img src={'maxfile/visaprof-logo 1.png'} alt='#'/>
            </div>
            <div  className='bg-gradient-to-b from-max_file_yellow_1 to-yellow-100'>
            <div className='rounded-b-[100%] h-40 w-4/5'/>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D19439" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,80C240,128,300,224,360,272C420,320,480,320,540,320C600,320,660,320,720,293.3C780,267,840,213,900,176C960,139,1020,117,1080,106.7C1140,96,1200,96,1260,128C1320,160,1380,224,1410,256L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
            <div className='flex-1 relative bg-gradient-to-b from-max_file_yellow_1 to-yellow-100 flex flex-col'>
             <div className='flex-1'/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#927628" fill-opacity="0.8" d="M0,32L40,48C80,64,160,96,240,117.3C320,139,400,149,480,176C560,203,640,245,720,256C800,267,880,245,960,240C1040,235,1120,245,1200,245.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
            </div>
</div>
    );
}

export default Sidebar;
