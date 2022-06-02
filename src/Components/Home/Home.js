import React from 'react';
import FindDoctor from '../FindDoctor/FindDoctor';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
const Home = () => {

    
    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <FindDoctor />
        </div>
    );
};

export default Home;