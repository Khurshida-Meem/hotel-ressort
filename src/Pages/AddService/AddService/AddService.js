import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import img from '../../../images/add-service.svg'

const AddService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://hotel-ressort.herokuapp.com/rooms', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('service is successfully added');
                    reset();
                }
            })
    };
    return (
        <div className='my-5'>
            <Container>
                <Row xs={1} md={2}>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <div>
                            <p>sample image url: https://i.ibb.co/6YsTV1z/single-room.jpg</p>
                            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                                <div className='my-2'>
                                    <input className='field p-2 w-75' type='text'  {...register("name", { required: true })} placeholder='Service Name' />
                                    {errors.name && <span className='error'>This field is required</span>}
                                </div>
                                <div className='my-2'>
                                    <input className='field p-2  w-75' type='text'  {...register("short_desc", { required: true })} placeholder='Short Description (20 words max)' />
                                    {errors.short_desc && <span className='error'>This field is required</span>}
                                </div>
                                <div className='my-2'>
                                    <input className='field p-2  w-75' type='text'  {...register("large_desc", { required: true })} placeholder='Brief Description' />
                                    {errors.large_desc && <span className='error'>This field is required</span>}
                                </div>
                                <div className='my-2'>
                                    <input className='field p-2  w-75' type='text'  {...register("img", { required: true })} placeholder='Image URL' />
                                    {errors.img && <span className='error'>This field is required</span>}
                                </div>
                                <div className='my-2'>
                                    <input className='field p-2  w-75' type='text'  {...register("rating", { required: true })} placeholder='User Rating' />
                                    {errors.rating && <span className='error'>This field is required</span>}
                                </div>
                                <div className='my-2'>
                                    <input className='field p-2  w-75' type='text'  {...register("served", { required: true })} placeholder='Total People Served' />
                                    {errors.served && <span className='error'>This field is required</span>}
                                </div>

                                <input className='secondary-btn w-25 py-2 text-white' type="submit" value='Add Service' />
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <img className='w-75 img-fluid' src={img} alt="" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AddService;