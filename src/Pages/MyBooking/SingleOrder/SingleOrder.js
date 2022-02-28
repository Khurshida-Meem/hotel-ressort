import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
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
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Suite</th>
                            <th>Arrival</th>
                            <th>Departure</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{contact}</td>
                            <td>{room}</td>
                            <td>{arrival}</td>
                            <td>{departure}</td>
                            <td>{status.status}</td>
                            <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>Cancel</button></td>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default SingleOrder;