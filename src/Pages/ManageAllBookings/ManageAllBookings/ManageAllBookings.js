import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
// import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllBookings = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://hotel-ressort.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
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
            <Container className='page-size'>
                <h1 className="my-3">All Bookings</h1>

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
                                <button onClick={() => handleDelete(order._id)} className='btn btn-danger me-2'>Delete</button>
                                <button onClick={() => handleStatus(order._id)} className='btn btn-primary'>Approve</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>


            </Container>

        </div>
    );
};

export default ManageAllBookings;