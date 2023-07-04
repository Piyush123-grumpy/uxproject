import React from 'react';
import './carouselSecond.css'
import MovieDetail from './MovieDetail';
function CarouselSecond(props) {
    return (
        <div className='secondCarousel'>
            <p className='upNext'>Up Next</p>
            <div className='movieDetailContainer'>
                <MovieDetail></MovieDetail>
            </div>
            <div className='movieDetailContainer'>
                <MovieDetail></MovieDetail>
            </div>
            <div className='movieDetailContainer'>
                <MovieDetail></MovieDetail>
            </div>
            <div className='browseTrailers'><p className='browseTrailers'>Browser Trailers</p> </div>
        </div>
    );
}

export default CarouselSecond;