import React from 'react';
import PopularDestination from './mini/PopularDestination';
import TopDestination from './mini/TopDestination';

const topDestinations = [
    {
        image: 'maxfile/kenya.png', 
        country: 'Kenya (E-visa)'
    },
    {
        image: 'maxfile/uae.png', 
        country: 'United Arab Emirate'
    },
    {
        image: 'maxfile/nigeria.png', 
        country: 'Nigeria (visa on arrival)'
    },
    {
        image: 'maxfile/egypt.png', 
        country: 'Egypt'
    },
];

const popDestinations = [
    {
        image: 'maxfile/uae pop.png', 
        country: 'United Arab Emirates',
        price:'30,000'
    },
    {
        image: 'maxfile/maldives.png', 
        country: 'Maldives',
        price:'28,000'
    },
    {
        image: 'maxfile/southy.png', 
        country: 'South Africa',
        price:'23,600'
    },
    {
        image: 'maxfile/jordan.png', 
        country: 'Jordan',
        price:'25,000'
    },
];

const Destinations = () => {
    return (
        <div className='min-h-screen space-y-16 flex flex-col'>
            <div className='flex flex-1 flex-col items-center justify-center space-y-8'>
                <h2 className='font-extrabold'>Top <span className='text-max_file_yellow_1'>Destinations</span></h2>
                <div className='flex flex-col space-y-2  lg:space-y-0 lg:flex-row lg:space-x-6'>
                    {topDestinations.map((topDest, i) => <TopDestination key={i} id={i+1} image={topDest.image} country={topDest.country}/>)}
                </div>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center space-y-10'>
                <h2 className='font-extrabold'>Popular Destinations</h2>
                <div className='bg-max_file_yellow_1 container py-6 text-center bg-opacity-20 text-gray-500'><p>Tourist visa only</p></div>
                <div className='flex flex-col space-y-4  lg:space-y-0 lg:flex-row lg:space-x-6'>
                    {popDestinations.map((popDest, i) => <PopularDestination  key={i} country={popDest.country} image={popDest.image} price={popDest.price}/>)}
                    </div>
            </div>
        </div>
    );
}

export default Destinations;
