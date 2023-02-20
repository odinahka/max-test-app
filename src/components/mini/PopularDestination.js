import React from 'react';

const PopularDestination = ({price, image, country}) => {
    return (
        <div className='w-48 flex flex-col items-center shadow-lg justify-center text-center py-4 h-44 lg:h-56 lg:w-56 rounded-lg xl:h-64 xl:w-64 bg-white relative'>
           <p className='py-2 font-medium'>{country}</p> 
           <div>
           <img src={image} alt='#'/>
           <div className='bg-max_file_yellow_1 text-left pl-2 rounded-b-lg'>
            <p className='text-white'>Processing time:</p>
            <p>2-3 working days</p>
            <p className='text-white'>N{price} per person</p>
           </div>
           </div>
        </div>
    );
}

export default PopularDestination;
