import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='d-flex justify-content-center align-items-center'>
                <Container>
                    <div className='banner-content'>
                        <h1 className='display-2 text-white banner-header'>Wellcome to Hotel <span className='primary'>Resort</span> </h1>
                    </div>
                    <div>
                        <p className='text-center banner-p'>Make your summer more colorful than ever</p>

                    </div>
                    <div className='text-center'>
                        <button className='primary-btn px-5 py-2 rounded  fw-bold banner-btn'>Book Now</button>
                    </div>

                </Container>

            </div>

        </div>
    );
};

export default Banner;