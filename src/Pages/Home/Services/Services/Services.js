import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useData from '../../../../hooks/useData';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const { data, loading } = useData('https://hotel-ressort.herokuapp.com/rooms');

    return (
        <div>
            <Container>
                <h1 className='mt-5'>We Offer</h1>
                {
                    loading ?
                        <div className="text-center mt-5">
                            <Spinner animation="border" variant="primary" />
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