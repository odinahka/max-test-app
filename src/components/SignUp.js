import React, {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {useForm} from 'react-hook-form';
import axios from 'axios';

const SignUp = ({setPage}) => {
    const {register, handleSubmit,setError, formState: {errors}} = useForm({
        mode: 'onBlur'
    })
    const [openPassword, setOpenPassword] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)
    const togglePassword = () => {
        setOpenPassword(!openPassword);
    }
    const toggleConfirm = () => {
        setOpenConfirm(!openConfirm);
    }

const onSubmit = async(formData) => {
if(formData.password !== formData.confirmPassword){
    passwordError();
    return
}

const {firstName, lastName, phoneNumber, email, password} = formData;

const payload = {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    isAgent: false
};
console.log(payload)

try{
const res = await axios.post(process.env.React_APP_API_URL, {
    payload
});
const response = res.data;
console.log(response);
}
catch(err){

}
setPage('signIn')

}

    const signUpOptions = {
        firstName: ' first name is required',
        lastName: ' last name is required', 
        email: ' email is required',
        password: ' password is required',
        confirmPassword: ' confirm password is required',
    }
    const passwordError = () => {
        setError('confirmPassword', {type: 'custom', message:'Password doesn\'t match'}, {shouldFocus:true})
    }

    return (
<div className='flex flex-2 flex-col justify-center min-h-screen'>
            <h2 className='font-extrabold'>Welcome!</h2>
            <p className='text-slate-500'>This will take a minute!</p>
            <div className='mt-4 flex flex-row space-x-3'>
                <h3>Sign up as an agent instead?</h3>
                <button className='mb-2 text-max_file_yellow_1'>Sign up as agent</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-10 md:grid-cols-2 mt-7'>
                <div className='relative'>
                        <input {...register('firstName', signUpOptions.firstName)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' type={'text'} id='firstname' placeholder='First name'/>
                        <label htmlFor='firstname' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>First name <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.firstName && errors.firstName.message}</small>
                    </div>
                    <div className='relative'>
                        <input {...register('lastName', signUpOptions.lastName)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' type={'text'} id='lastname' placeholder='Last name'/>
                        <label htmlFor='lastname' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Last name <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.lastName && errors.lastName.message}</small>
                    </div>

                    <div className='relative'>
                        <input {...register('email', signUpOptions.email)}  className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' type={'email'} id='email' placeholder='Email address'/>
                        <label htmlFor='email' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Email address <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.email && errors.email.message}</small>
                    </div>

                    <div className='relative'>
                        <input {...register('phoneNumber')} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' type={'tel'} id='phone' placeholder='+234'/>
                        <label htmlFor='phone' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>+234</label>
                    </div>

                    <div className='relative'>
                        <input {...register('password', signUpOptions.password)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' id='password' type={ openPassword ? 'text' : 'password'} placeholder='Password'/>
                        <label htmlFor='password' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Password <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.password && errors.password.message}</small>
                        <div className='absolute top-2 text-2xl text-gray-500 right-2'>
                            {openPassword  && <AiFillEyeInvisible onClick={togglePassword}/>}
                            {!openPassword  && <AiFillEye onClick={togglePassword}/>}
                        </div>
                    </div>
                    <div className='relative'>
                        <input {...register('confirmPassword', signUpOptions.confirmPassword)} className='peer rounded-lg placeholder-transparent bg-yellow-50 border border-max_file_yellow_1' id='confirm_password' type={ openConfirm ? 'text' : 'password'} placeholder='Confirm password'/>
                        <label htmlFor='confirm_password' className='peer-placeholder-shown:text-base  peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2  peer-focus:text-slate-400 peer-focus:-top-6  absolute transition-all left-7 -top-6 block mb-2 font-medium text-slate-500'>Confirm password <span className='text-red-500'>*</span></label>
                        <small className='text-red-500'>{errors?.confirmPassword && errors.confirmPassword.message}</small>
                        <div className='absolute top-2 text-2xl text-gray-500 right-2'>
                            {openConfirm  && <AiFillEyeInvisible onClick={toggleConfirm}/>}
                            {!openConfirm  && <AiFillEye onClick={toggleConfirm}/>}
                        </div>
                    </div>
                    <div className='flex items-start mb-6 md:col-span-2'>
                    <div className='flex-items-center h-5 flex'>
                        <input id='keep_me_signed_in' type={'checkbox'} className='h-4 w-4 border border-max_file_yellow_1 bg-yellow-50 text-max_file_yellow_2'/>
                        <div className='-mt-1 space-x-1'>
                        <label className='ml-3 text-gray-500'>I agree to the </label>
                        <button className='text-max_file_yellow_1'>terms and conditions</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='space-x-3 flex flex-row'>
                    <button type='submit' className='text-white bg-max_file_yellow_2 px-4 py-1 rounded-lg'>Sign Up</button>
                    <button className='text-gray-500 bg-gray-50 px-4 py-1 rounded-lg flex flex-row'>or sign up with <FcGoogle className='ml-1 md:mt-1 lg:mt-2 h-4 w-4 bg-white'/> </button>
                </div>
            </form>
            <div className='mt-5 text-center flex flex-row items-center justify-center space-x-2'>
                <p>Already have an account?</p> 
                <button className='text-max_file_yellow_2' onClick={() => setPage('signIn')}>Sign In</button>
            </div>
        </div>
    );
}

export default SignUp;
