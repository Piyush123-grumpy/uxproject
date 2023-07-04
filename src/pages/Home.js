import React from 'react';
import Navbar from '../components/Navbar';
import CarouselSlider from '../components/CarouselSlider';
import './Home.css'
import { Container } from 'react-bootstrap';
import CarouselSecond from '../components/CarouselSecond';

function Home(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <div className='Banner' style={{ paddingTop: 10 }}>
                    <CarouselSlider />
                    <CarouselSecond />
                </div>
            </Container>

        </div>
    );
}

export default Home;