import React, {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {useForm} from 'react-hook-form';
import axios from 'axios';

const SignIn = ({setIsSignedIn, setPage}) => {
    const {register, handleSubmit,formState: {errors}} = useForm({
        mode: 'onBlur'
    })
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
    }
    const signUpOptions = {
        email: {required: ' email is required'},
        password: {required: ' password is required'},
    }
    const onSubmit = async(formData) => {
        
        const {email, password} = formData;
        
        const payload = {
            email,
            password
        };
        console.log(payload)
        
        try{
        const res = await axios.post(process.env.React_APP_API_URL + '/login', {
            payload
        });
        const response = res.data;
        console.log(response);
        }
        catch(err){
        
        }
        setIsSignedIn(true)
        setPage('main')
        
        }
    return (
        <div className='flex flex-2 flex-col justify-center min-h-screen'>
            <h2 className='font-extrabold'>Welcome back!</h2>
            <p className='text-slate-500'>We are always excited to have you back.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-10 mt-7'>
                    <div className='relative'>
                        <input {...register('email', signUpOptions.email)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' type={'email'} id='email' placeholder='Email address'/>
                        <label htmlFor='email' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Email address <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.email && errors.email.message}</small>
                    </div>

                    <div className='relative'>
                        <input {...register('password', signUpOptions.password)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' id='password' type={ open ? 'text' : 'password'} placeholder='Password'/>
                        <label htmlFor='password' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Password <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.password && errors.password.message}</small>
                        <div className='absolute top-2 text-2xl text-gray-500 right-2'>
                            {open  && <AiFillEyeInvisible onClick={toggle}/>}
                            {!open  && <AiFillEye onClick={toggle}/>}
                        </div>
                    </div>
                    <div className='flex items-start mb-6'>
                    <div className='flex-items-center h-5'>
                        <input id='keep_me_signed_in' type={'checkbox'} className='h-4 w-4 border border-max_file_yellow_1 bg-yellow-50 text-max_file_yellow_2'/>
                        <label className='ml-3 text-gray-500'>Keep me signed in</label>
                    </div>
                    </div>
                </div>
                <div className='space-x-3 flex flex-row'>
                    <button type='submit' className='text-white bg-max_file_yellow_2 px-4 py-1 rounded-lg'>Sign In</button>
                    <button className='text-gray-500 bg-gray-50 px-4 py-1 rounded-lg flex flex-row'>or sign in with <FcGoogle className='ml-1 md:mt-1 lg:mt-2 h-4 w-4 bg-white'/> </button>
                </div>
            </form>
            <div className='mt-5 text-center flex flex-row items-center justify-center space-x-2'>
                <p>Don't have an account?</p> 
                <button className='text-max_file_yellow_2' onClick={() => setPage('signUp')}>Sign Up</button>
            </div>
        </div>
    );
}

export default SignIn;
