import React from 'react';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useData from '../../../../hooks/useData';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';


const ServiceDetail = () => {

    // service detail
    const { serviceId } = useParams()
    const { data } = useData(`https://hotel-ressort.herokuapp.com/rooms/${serviceId}`)
    const { name, short_desc, large_desc, img, rating, served } = data;

    // details form
    const { firebaseContext } = useAuth();
    const { user } = firebaseContext;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <div className='d-lg-flex mt-5'>
                <div className='me-3'>
                    <img src={img} alt={name} height="200px" />
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p>Your Name</p>
                        <input type='text' defaultValue={user.displayName} {...register("username", { required: true })} />
                    </div>
                    <div>
                        <p>Your Email</p>
                        <input type='email' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div>
                        <p>Contact</p>
                        <input type='number' {...register("contact", { required: true })} />
                        {errors.contact && <span>This field is required</span>}
                    </div>
                    <div>
                        <p>Room Type</p>
                        <select {...register("room", { required: true })}>
                            <option value="single-bed">Single Bed</option>
                            <option value="double-bed">Double Bed</option>
                            <option value="twin-bed">Twin Bed</option>
                            <option value="duplex">Duplex Suite</option>
                            <option value="beach-cavana">Beach Cavana</option>
                            <option value="penthouse">Penthouse Apartment</option>

                        </select>
                        {errors.room && <span>This field is required</span>}
                    </div>
                    <div>
                        <p>Expected Arrival Date</p>
                        <input type='date' {...register("arrival", { required: true })} />
                        {errors.arrival && <span>This field is required</span>}
                    </div>
                    <div>
                        <p>Expected Deperture Date</p>
                        <input type='date' {...register("departure", { required: true })} />
                        {errors.departure && <span>This field is required</span>}
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default ServiceDetail;