import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='d-flex justify-content-center align-items-center'>
                <Container>
                    <div className='banner-content'>
                        <h1 className='display-2'>Wellcome to Hotel Resort</h1>
                    </div>

                </Container>

            </div>

        </div>
    );
};

export default Banner;