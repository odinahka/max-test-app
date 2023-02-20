import React from 'react';
import Offer from './mini/Offer';

const offers = [
    {
        type: 'consultation',
        head: 'Visa Consultation',
        body: 'Our qualified and dependable visa consultants can assist you in obtaining a favorable result in your case.'
    },
    {
        type: 'resources',
        head: 'Resources',
        body: 'We provide our clients with important information and resources and also the travel requirements needed.'
    },
    {
        type: 'support',
        head: 'Support',
        body: 'We provide required document support to ease the application process.'
    },
    {
        type: 'assessment',
        head: 'Free Assessment',
        body: 'We help those who want to know their eligibility status by assisting with free visa assessment.'
    }
]
const Offers = () => {
    return (
        <div className='min-h-screen flex flex-col space-y-8 justify-evenly'>
            <h2 className='text-center font-extrabold'>What we offer our clients</h2>
            <div className='flex flex-col space-y-4 items-center lg:justify-center lg:flex-row lg:space-y-0 lg:space-x-4 flex-1'>
                {offers.map((offer, i) => <Offer key={i} type={offer.type} head={offer.head} body={offer.body}/>)}
            </div>
        </div>
    );
}

export default Offers;
