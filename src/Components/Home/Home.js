import React from 'react';
import FindDoctor from '../FindDoctor/FindDoctor';
import Header from '../Header/Header';
import MakeASchedule from '../MakeASchedule/MakeASchedule';
import NavBar from '../NavBar/NavBar';
import OurRatings from '../OurRatings/OurRatings';
import Services from '../Services/Services';
const Home = () => {

    
    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <FindDoctor />
            <MakeASchedule />
            <OurRatings />
        </div>
    );
};

export default Home;