import React from 'react';
import Navbar from '../components/Navbar';
import CarouselSlider from '../components/CarouselSlider';
import './Home.css'
import { Container } from 'react-bootstrap';

function Home(props) {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <div className='Banner' style={{ paddingTop: 10 }}>
                    <CarouselSlider></CarouselSlider>
                    <p>sad</p>
                </div>

            </Container>

        </div>
    );
}

export default Home;