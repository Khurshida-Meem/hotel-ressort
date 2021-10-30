import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './SingleService.css'

const SingleService = (props) => {

    const { _id, name, img, short_desc } = props.service;

    const history = useHistory();
    const handleDetailClick = () => {
        history.push(`/service/${_id}`)
    }
    return (
        <div>
            <Col>
                <Card className='card-container rounded'>
                    <div className="m-2 img-container">
                        <Card.Img variant="top rounded" src={img} height="200px" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>{name}</h4></Card.Title>
                        <Card.Text>
                            {short_desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-white">
                        <button onClick={handleDetailClick} className="btn btn-primary px-5 py-2 border-0 rounded fw-bold mb-2 "><i className="fas fa-info-circle"></i> Book Now</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;