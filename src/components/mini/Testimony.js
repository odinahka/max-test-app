import React from 'react';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {GrStar} from 'react-icons/gr'

const Testimony = ({name, image, comment}) => {
    return (
        <div className='w-48 flex flex-col items-center justify-center text-center py-4 px-3 h-[18rem] lg:h-[20rem] lg:w-72 bg-gray-50 rounded-md xl:h-[24rem] xl:w-64 shadow-lg relative'>
            <p className='font-medium' >{name}</p>
            <img src={image} alt='#' className='absolute -top-7'/>
            <div className='relative space-y-3'>
                <ImQuotesLeft className='absolute top-0 left-0'/>
                <ImQuotesRight className='absolute bottom-0 right-0'/>
                <p className='px-4 text-gray-600'>
                {comment}
                </p>
            </div>

            <div className='flex text-max_file_yellow_1 pt-3'>
                    <GrStar/>
                    <GrStar/>
                    <GrStar/>
                    <GrStar/>
                    <GrStar/>
            </div>
        </div>
    );
}

export default Testimony;
