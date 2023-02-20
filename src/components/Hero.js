import React from 'react';
import {VscArrowSwap} from 'react-icons/vsc';
import Class from './mini/Class';
import Date from './mini/Date';
import Visa from './mini/Visa';
import Travelling from './mini/Travelling';
const travelling = [{type: 'Travelling from?', location: 'Lagos, Nigeria'}, {type: 'Travelling to?', location: 'Nairobi, Kenya'}]
const dates = [{dateType: 'Departure date', date:'27th Jul 2022', day: 'Wednesday'}, {dateType: 'Return date', date:'07th Aug 2022', day: 'Thursday'}]
const Hero = () => {
    return (
        <div className='bg-background_pic bg-cover lg:bg-center h-[778px] flex flex-col justify-center relative space-y-10'>
            <h2 className='uppercase text-white text-extrabold pr-40 md:pr-[23rem] lg:pr-[38rem] xl:pr-[45rem] pl-4'>Prompt and easy steps for visa processing</h2>
            <div className='h-contain w-container backdrop-blur-lg backdrop-grayscale backdrop-opacity-90 filter flex flex-col space-y-3 py-3 xl:flex-row items-center justify-evenly'>
                <div className=' flex flex-row  items-center relative'>
                {travelling.map((travel, i) => <Travelling key={i} travelling={travel.type} location={travel.location}/>)}
                <VscArrowSwap className='absolute bg-gray-400 h-6 w-6 rounded-full p-1 left-[47%]'/>
                </div>
                <div className=' flex flex-row items-center relative'>
                    {dates.map((date, i) => <Date key={i} datetype={date.dateType} date={date.date} day={date.day}/>)}
                </div>
                <div className=' flex flex-row items-center relative'>
                    <Class/>
                    <Visa/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
