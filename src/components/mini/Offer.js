import React from 'react';
import {BiSlideshow, BiSupport} from 'react-icons/bi'
import {BsFillGiftFill, BsBagCheck} from 'react-icons/bs'

const Offer = ({type, head, body}) => {
    return (
        <div className='w-48 flex flex-col items-center justify-center text-center py-4 px-3 h-44 lg:h-56 lg:w-56 bg-gray-50 rounded-md xl:h-64 xl:w-64 shadow-lg relative'>
            <div className=''>
           { type ==='consultation' && <BiSlideshow className='text-max_file_yellow_1 ring-2 h-6 w-6 rounded-full ring-max_file_yellow_1 absolute -top-2 right-[45%]'/>}
            {type ==='support' && <BiSupport className='text-max_file_yellow_1 ring-2 h-6 w-6 rounded-full ring-max_file_yellow_1 absolute -top-2 right-[45%]'/>}
            {type === 'resources' && <BsFillGiftFill className='text-max_file_yellow_1 ring-2 h-6 w-6 rounded-full ring-max_file_yellow_1 absolute -top-2 right-[45%]'/>}
            {type === 'assessment' && <BsBagCheck className='text-max_file_yellow_1 ring-2 h-6 w-6 rounded-full ring-max_file_yellow_1 absolute -top-2 right-[45%]'/>}
            </div>
            <h3>{head}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Offer;
