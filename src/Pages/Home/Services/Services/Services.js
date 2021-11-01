import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../../hooks/useData';
import SingleService from '../SingleService/SingleService';
import Loader from "react-loader-spinner";

const Services = () => {
    const { data } = useData('https://hotel-ressort.herokuapp.com/rooms');
    console.log(data.length)
    return (
        <div>
            <Container>
                <h1 className='mt-5'>We Offer</h1>

                {
                    !data.length ?
                        <div className='text-center'>
                            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                        </div> :
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                data.map(service => <SingleService
                                    key={service._id}
                                    service={service}
                                ></SingleService>)
                            }
                        </Row>
                }

            </Container>


        </div>
    );
};

export default Services;