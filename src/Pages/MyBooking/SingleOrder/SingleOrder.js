import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './SingleOrder.css'

const SingleOrder = (props) => {

    const [orders, setOrders] = useState([]);
    const { _id, arrival, contact, departure, email, room, username, status } = props.order;
    useEffect(() => {
        fetch(`https://hotel-ressort.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    // delete booking
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hotel-ressort.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }

                });
        }
    }

    return (
        <div>
            <Container>
                <div className='booking-container m-2 p-3'>

                    <p>Name: {username}</p>
                    <p>Email: {email}</p>
                    <p>Contact: {contact}</p>
                    <p>Suite: {room}</p>
                    <p>Arrival: {arrival}</p>
                    <p>Departure: {departure}</p>
                    <p>Status: {status.status}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Cancel</button>
                </div>

            </Container>
        </div>
    );
};

export default SingleOrder;