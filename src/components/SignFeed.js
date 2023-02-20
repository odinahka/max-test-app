import React from 'react';
import Sidebar from './Sidebar';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInFeed = ({page, setIsSignedIn, setPage}) => {
    return (
        <div className='flex container space-x-3 md:space-x-6 lg:space-x-12'>
            <Sidebar/>
            {page === 'signIn' && <SignIn setIsSignedIn={setIsSignedIn} setPage ={setPage}/>}
            {page === 'signUp' && <SignUp setPage={setPage}/>}
        </div>
    );
}

export default SignInFeed;
