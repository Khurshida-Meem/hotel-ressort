import React from 'react';
import { Container } from 'react-bootstrap';
import about1 from '../../../images/about-1.jpg'
import about2 from '../../../images/about-2.jpg'
import about3 from '../../../images/about-3.jpg'
import about4 from '../../../images/about-4.jpg'

const AboutUs = () => {
    return (
        <div>
            <Container>
                <div className='d-lg-flex mt-5'>
                    <div>
                        <h3 className='mt-5 component-headings pb-2'>About Us</h3>
                        <h1 className='fw-bold'>Learn About Us</h1>
                        <p className='pe-4 word-break'>
                            With 114 world-class rooms, including 18 suites, the FARS Hotel & Resorts, Dhaka, is an urban retreat in one of the city's most vibrant districts. Decorated in a sleek, contemporary style, each of the rooms offers free high-speed WiFi Internet access along with international standard bath amenities, tea and coffees. Families appreciate the convenience of 6 interconnecting rooms. Guests may also request handicap-accessible, smoking and non-smoking rooms. All rooms include complimentary access to the hotel's fitness facilities, swimming pool.
                        </p>
                    </div>
                    <div>
                        <div className='row'>
                            <div className="col">
                                <img src={about1} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col-4">
                                <img src={about2} alt="" className='img-fluid' />
                            </div>
                            <div className="col-4">
                                <img src={about3} alt="" className='img-fluid' />
                            </div>
                            <div className="col-4">
                                <img src={about4} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;