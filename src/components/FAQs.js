import React from 'react';
import {AiFillMinusCircle} from 'react-icons/ai';
import {BsFillPlusCircleFill} from 'react-icons/bs'

const FAQs = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center space-y-3 mt-4'>
            <h2 className='font-extrabold '>Frequently asked <span className='text-max_file_yellow_1'>questions</span></h2>
            <div className='space-y-10 divide-y-2 py-7 px-4 shadow-lg'>
                <div className='flex pt-10'>
                    <div >
                        <h3>What are the requirements to get a visa?</h3>
                        <p className='text-gray-500'>The requirement depends on the country you're  applying to. Log in to see different countries and their requirements.</p>
                    </div>
                    <AiFillMinusCircle className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
                <div className='flex justify-between pt-10'>
                    <div>
                        <h3>How long doees the visa processing take?</h3>
                    </div>
                    <BsFillPlusCircleFill className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
                <div className='flex justify-between pt-10'>
                    <div>
                        <h3>Can I still be approved if I have no travel history?</h3>
                    </div>
                    <BsFillPlusCircleFill className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
                <div className='flex justify-between pt-10'>
                    <div>
                        <h3>How does VISAPROF obtain a visa for me?</h3>
                    </div>
                    <BsFillPlusCircleFill className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
                <div className='flex justify-between pt-10'>
                    <div>
                        <h3>Do I need my passport at the early stages of the application?</h3>
                    </div>
                    <BsFillPlusCircleFill className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
                <div className='flex justify-between pt-10'>
                    <div>
                        <h3>Must I be vaccinated to travel abroad?</h3>
                    </div>
                    <BsFillPlusCircleFill className='h-10 w-10 hover:cursor-pointer text-max_file_yellow_1'/>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
