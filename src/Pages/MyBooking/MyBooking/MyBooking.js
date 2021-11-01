import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

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


    return (
        <div>
            <Container>
                <h1 className="my-3">My Bookings</h1>
                {
                    !orders.length ? "Currently you don't have any booking" :
                        orders.map(order => <SingleOrder
                            key={order._id}
                            order={order}
                        ></SingleOrder>)
                }
            </Container>


        </div>
    );
};

export default MyBooking;