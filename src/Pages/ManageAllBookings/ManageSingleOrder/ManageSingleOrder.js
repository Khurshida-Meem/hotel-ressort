import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

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
                            <td>
                                <button onClick={() => handleDelete(_id)} className='btn btn-danger me-2'>Delete</button>
                                <button onClick={() => handleStatus(_id)} className='btn btn-primary'>Approve</button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageSingleOrder;