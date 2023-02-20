import React from 'react';
import Testimony from './mini/Testimony';

const testimonies = [
    {
     image: 'maxfile/leke.png',
     name: 'Mr Leke',
     comment: 'I\'m happy I chose to process my visa with you guys, not a single regret. Visa came right on time with no hassle'
    },
    {
        image: 'maxfile/eke.png',
        name: 'Mathew Eke',
        comment: 'The processing was fast and I got the visa right on time. Service is 100. Will definitely be doing more business with you'
    },
       {
        image: 'maxfile/debbie.png',
        name: 'Debbie',
        comment: 'VISAPROF for the win... Wow!! How were you able to do this so fast. If I didn\' get this visa, I would have had to cancel my trip'
       },
]

const Testimonies = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-12 mt-20'>
            <h2 className='font-extrabold '>What <span className='text-max_file_yellow_1'>our clients</span> have to say?</h2>
            <div className='flex flex-col space-y-12  lg:space-y-0 lg:flex-row lg:space-x-6'>
                {testimonies.map((testimony, i) => <Testimony key={i} comment={testimony.comment} image={testimony.image} name={testimony.name}/>)}
            </div>
        </div>
    );
}

export default Testimonies;
