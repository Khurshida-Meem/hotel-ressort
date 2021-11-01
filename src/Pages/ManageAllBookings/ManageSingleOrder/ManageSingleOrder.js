import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageSingleOrder = (props) => {

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
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }

                });
        }
    }

    // approve status or update status in database
    const handleStatus = id => {
        const url = `https://hotel-ressort.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Successfully Updated')
                }
            })


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
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger me-2'>Delete</button>
                    <button onClick={() => handleStatus(_id)} className='btn btn-primary'>Approve</button>
                </div>

            </Container>
        </div>
    );
};

export default ManageSingleOrder;