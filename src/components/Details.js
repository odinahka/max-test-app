import React from 'react';
import About from './mini/About';
import Info from './mini/Info';


const info = [{head: '200', foot: 'clients who have trusted us'}, {head: '98%', foot: 'Successful visa process rate'}, {head: '60hrs', foot: 'Application approval time'}]
const Details = () => {
    return (
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <div className='absolute rounded-lg -top-10 lg:left-[18%] flex flex-col lg:flex-row px-4 py-3 space-y-4 bg-max_file_yellow_1 container lg:w-4/6 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black divide-opacity-25'>
              {info.map((inf, i) => <Info key={i} head={inf.head} foot={inf.foot} />)}
            </div>
            <About/>
        </div>
    );
}

export default Details;
