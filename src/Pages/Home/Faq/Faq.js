import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import faqimg from '../../../images/faq.png'

const Faq = () => {
    return (
        <div className='mt-5'>
            <Container>
                <h3 className='mt-5 component-headings pb-2'>Asked Questions</h3>
                <h1 className='fw-bold'>Frequently Asked Question</h1>
                <div className='row'>
                    <div className="col col-lg-6 col-12 gy-5">
                        <img src={faqimg} alt="" className='img-fluid' />
                    </div>
                    <div className="col col-lg-6 col-12 gy-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>When Should I Book a Service</Accordion.Header>
                                <Accordion.Body>
                                    With 114 world-class rooms, including 18 suites, the FARS Hotel & Resorts, Dhaka, is an urban retreat in one of the city's most vibrant districts. Decorated in a sleek, contemporary style, each of the rooms offers free high-speed WiFi Internet access along with international standard bath amenities, tea and coffees.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>When Should I arrive</Accordion.Header>
                                <Accordion.Body>
                                    Families appreciate the convenience of 6 interconnecting rooms. Guests may also request handicap-accessible, smoking and non-smoking rooms. All rooms include complimentary access to the hotel's fitness facilities, swimming pool.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>When Should Eat</Accordion.Header>
                                <Accordion.Body>
                                    Families appreciate the convenience of 6 interconnecting rooms. Guests may also request handicap-accessible, smoking and non-smoking rooms. All rooms include complimentary access to the hotel's fitness facilities, swimming pool.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>When Should I Travel</Accordion.Header>
                                <Accordion.Body>
                                    Families appreciate the convenience of 6 interconnecting rooms. Guests may also request handicap-accessible, smoking and non-smoking rooms. All rooms include complimentary access to the hotel's fitness facilities, swimming pool.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Faq;