import React from 'react';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useData from '../../../../hooks/useData';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import './ServiceDetail.css'


const ServiceDetail = () => {

    // service detail
    const { serviceId } = useParams()
    const { data } = useData(`https://hotel-ressort.herokuapp.com/rooms/${serviceId}`)
    const { name, short_desc, large_desc, img, rating, served } = data;

    // details form
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const status = { status: "Pending" };
        data.status = status;
        axios.post('https://hotel-ressort.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking is Successfully Added. We will inform furthur information');
                    reset();
                }
            })
    };
    return (
        <Container>
            <div className='d-lg-flex mt-5'>
                <div className='me-3'>
                    <img src={img} alt={name} className='img-fluid' />
                    <br />
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly ></Rating>
                    <p><i className="fas fa-users secondary-text"></i> {served}</p>
                </div>
                <div>
                    <h1>{name}</h1>
                    <h3>{short_desc}</h3>
                    <p>{large_desc}</p>
                </div>
            </div>

            <div>
                <h1 className='mt-5 mb-3'>Book Now</h1>
                <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className='mt-2 mb-0'>Your Name</p>
                        <input className='field w-50 p-2' type='text' defaultValue={user.displayName} {...register("username", { required: true })} />
                        {errors.username && <span className='error'>This field is required</span>}
                    </div>
                    <div>
                        <p className='mt-2 mb-0'>Your Email</p>
                        <input className='field w-50 p-2' type='email' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className='error'>This field is required</span>}
                    </div>
                    <div>
                        <p className='mt-2 mb-0'>Contact</p>
                        <input className='field w-50 p-2' type='number' {...register("contact", { required: true })} />
                        {errors.contact && <span className='error'>This field is required</span>}
                    </div>
                    <div>
                        <p className='mt-2 mb-0'>Room Type</p>
                        <select className='field w-50 p-2' {...register("room", { required: true })}>
                            <option value="single-bed">Single Bed</option>
                            <option value="double-bed">Double Bed</option>
                            <option value="twin-bed">Twin Bed</option>
                            <option value="duplex">Duplex Suite</option>
                            <option value="beach-cavana">Beach Cavana</option>
                            <option value="penthouse">Penthouse Apartment</option>

                        </select>
                        {errors.room && <span className='error'>This field is required</span>}
                    </div>
                    <div>
                        <p className='mt-2 mb-0'>Expected Arrival Date</p>
                        <input className='field w-50 p-2' type='date' {...register("arrival", { required: true })} />
                        {errors.arrival && <span className='error'>This field is required</span>}
                    </div>
                    <div>
                        <p className='mt-2 mb-0'>Expected Deperture Date</p>
                        <input className='field w-50 p-2' type='date' {...register("departure", { required: true })} />
                        {errors.departure && <span className='error'>This field is required</span>}
                    </div>

                    <input className='secondary-btn w-50 mt-4 py-2 text-white' type="submit" value="Book" />
                </form>
            </div>
        </Container>
    );
};

export default ServiceDetail;