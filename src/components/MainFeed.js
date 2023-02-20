import React from 'react';
import Header from './mini/Header';
import Hero from './Hero';
import Details from './Details';
import Offers from './Offers';
import Destinations from './Destinations';
import Testimonies from './Testimonies';
import FAQs from './FAQs';
import ContactUs from './ContactUs';
import Footer from './Footer';

const MainFeed = ({isSignedIn, setPage}) => {
    return (
        <div className='min-h-screen container'>
            <Header setPage={setPage} isSignedIn={isSignedIn}/>
            <Hero/>
            <Details/>
            <Offers/>
            <Destinations/>
            <Testimonies/>
            <FAQs/>
            <div className='divide-y-2'>
            <ContactUs/>
            <Footer/>
            </div>

        </div>
    );
}

export default MainFeed;
