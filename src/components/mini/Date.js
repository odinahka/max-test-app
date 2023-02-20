import React from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'

const Date = ({datetype, date, day}) => {
    return (
        <div className='rounded-lg bg-gray-50 md:h-24 flex flex-col w-40 md:w-40 lg:w-44 lg:h-28 ml-2 px-3 space-y-2 justify-between py-3'>
            <p className='text-gray-500'>{datetype}</p>
            <div>
            <p className='flex flex-row hover:cursor-pointer'>{date}<RiArrowDownSLine className='mt-1 ml-2'/></p>
            <small className=''>{day}</small>
            </div>

        </div>
    );
}

export default Date;
