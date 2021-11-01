import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllBookings = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://hotel-ressort.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <div>
            <Container className='page-size'>
                <h1 className="my-3">All Bookings</h1>
                {
                    !orders.length ? "Currently you don't have any booking" :
                        orders.map(order => <ManageSingleOrder
                            key={order._id}
                            order={order}
                        ></ManageSingleOrder>)
                }
            </Container>

        </div>
    );
};

export default ManageAllBookings;