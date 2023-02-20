import React from 'react';

const Info = ({head, foot}) => {
    return (
        <div className='flex flex-col flex-1 items-center justify-center space-y-8 text-white'>
           <h3 className='font-bold'>{head}</h3>
           <p>{foot}</p> 
        </div>
    );
}

export default Info;
