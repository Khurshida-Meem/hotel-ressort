import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
// import SingleOrder from '../SingleOrder/SingleOrder';

const MyBooking = () => {
    const [orders, setOrders] = useState([]);
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const email = [user.email];

    useEffect(() => {
        fetch('https://hotel-ressort.herokuapp.com/bookings/byEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setOrders(data)
                }

            })
    }, [orders])

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
            <Container className='page-size'>
                <h1 className="my-3">My Bookings</h1>
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
                        {orders.map(order => <tr key={order._id}>
                            <td>{order.username}</td>
                            <td>{order.email}</td>
                            <td>{order.contact}</td>
                            <td>{order.room}</td>
                            <td>{order.arrival}</td>
                            <td>{order.departure}</td>
                            <td>{order.status.status}</td>
                            <td>
                                <td><button onClick={() => handleDelete(order._id)} className='btn btn-danger'>Cancel</button></td>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>


        </div>
    );
};

export default MyBooking;