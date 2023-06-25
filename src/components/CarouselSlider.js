import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Avenger from '../assets/Avenger.jpg';
import GraveEncounter from '../assets/GraveEncounter.jpg'
import Spider from '../assets/Spider.jpg'

function CarouselSlider(props) {
    return (
        <>
            <Container>
                <Carousel style={{width:900}}>
                    <Carousel.Item > 
                        <img 
                            className="d-block w-100"
                            src={GraveEncounter}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                      
                            className="d-block w-100"
                            src={Avenger}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                       
                            className="d-block w-100"
                            src={Spider}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>

    );
}

export default CarouselSlider;