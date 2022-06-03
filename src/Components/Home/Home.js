import React from 'react';
import Feedback from '../Feedback/Feedback';
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
            <Feedback />
        </div>
    );
};

export default Home;