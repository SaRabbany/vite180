import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/navbar/Navbar';
import CustomTools from './CustomTools';
import FAQ from './FAQ';
import Header from './Header';
import Membership from './Membership';
import Opportunities from './Opportunities';
import SliderHeader from './SliderHeader';

const Home = () => {
    return (
        <>
            {/* <Header/> */}
            <SliderHeader/>
            <Membership/>
            <Opportunities/>
            <CustomTools/>
            <FAQ/>
            <Footer/>
            
         </>
    );
};

export default Home;