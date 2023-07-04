import React from 'react';
import './movieDetail.css';
import GraveEncounterThumb from '../assets/GraveEncounterThumb.jpg'

function MovieDetail(props) {
    return (
        <>
            <div className='movieDetailCard'>
                <div className='img'>
                    <img
                        src={GraveEncounterThumb}
                        alt="First slide"
                        />
                </div>
                <div className='movieDetail'>
                    <h5>Grave Encounters</h5>
                    <p style={{fontSize:14,padding:0}}> Hello warudo</p>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;