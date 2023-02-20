import React from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'

const Travelling = ({travelling, location}) => {
    return (
        <div className='rounded-lg bg-gray-50 mt-3 lg:h-28 flex flex-col h-[84px] md:h-24 w-40 md:w-40 lg:w-44 ml-2 px-3 space-y-2 justify-between py-3'>
            <p className='text-gray-500'>{travelling}</p>
            <p className='flex flex-row space-x-1 hover:cursor-pointer'>{location}<RiArrowDownSLine className='mt-1 ml-2'/></p>
        </div>
    );
}

export default Travelling;
