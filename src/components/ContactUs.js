import React from 'react';
import {useForm} from 'react-hook-form';
const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = formData => {
        window.location.href = `mailto:odinakafocha@gmail.com?subject=${'Contact for assessment'}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h2 className='font-extrabold '>Get free assessment today</h2>
            <p className='text-max_file_yellow_1'> Feel free to enquire about any questions you have</p>
            <div className='flex flex-col space-y-10 pt-32'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 container w-[100%]'>
                <input {...register('name')} placeholder='Full name' className='rounded-lg bg-white border border-white shadow' type="text"  autoComplete='off'/>
                <input {...register('email')} placeholder='Email address' className='rounded-lg bg-white border border-white shadow' type="text"  autoComplete='off'/>
                <textarea {...register('message')} placeholder='Type message here' className='h-[140px] rounded-lg bg-white border border-white shadow' autoComplete='off'/>
                <div className='flex flex-col items-center'>
                <button type='submit' className='bg-[#E7AB79] w-32 py-4 px-10 rounded-md text-white font-bold'>Send</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default ContactUs;
