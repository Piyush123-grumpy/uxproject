import React from 'react';
import Navbar from '../components/Navbar';
import CarouselSlider from '../components/CarouselSlider';
function Home(props) {
    return (
        <div>
            <Navbar></Navbar>
            <CarouselSlider></CarouselSlider>
        </div>
    );
}

export default Home;