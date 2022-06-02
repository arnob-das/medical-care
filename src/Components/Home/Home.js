import React, { useEffect } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
const Home = () => {

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <NavBar />
            <Header />
        </div>
    );
};

export default Home;