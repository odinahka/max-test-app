import React from 'react';

const TopDestination = ({id, image, country}) => {
    return (
        <div className='w-48 flex flex-col items-center justify-center text-center py-4 px-3 h-44 lg:h-56 lg:w-56 rounded-md xl:h-64 xl:w-64 relative'>
           <img src={image} alt='#'/>
           <div  className={`${id % 2 !== 0 ? 'bg-max_file_yellow_1' : 'bg-max_file_logo_blue'} w-full py-2 rounded-b-lg text-white`}><p>{country}</p> </div>
           
        </div>
    );
}

export default TopDestination;
