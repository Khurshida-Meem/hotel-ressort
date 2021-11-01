import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

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
            <Container className='text-center'>
                <p>sample image url: https://i.ibb.co/6YsTV1z/single-room.jpg</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                        <input className=' w-50' type='text'  {...register("name", { required: true })} placeholder='Service Name' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='my-2'>
                        <textarea className=' w-50' type='text'  {...register("short_desc", { required: true })} placeholder='Short Description (20 words max)' />
                        {errors.short_desc && <span>This field is required</span>}
                    </div>
                    <div className='my-2'>
                        <textarea className=' w-50' type='text'  {...register("large_desc", { required: true })} placeholder='Brief Description' />
                        {errors.large_desc && <span>This field is required</span>}
                    </div>
                    <div className='my-2'>
                        <input className=' w-50' type='text'  {...register("img", { required: true })} placeholder='Image URL' />
                        {errors.img && <span>This field is required</span>}
                    </div>
                    <div className='my-2'>
                        <input className=' w-50' type='text'  {...register("rating", { required: true })} placeholder='User Rating' />
                        {errors.rating && <span>This field is required</span>}
                    </div>
                    <div className='my-2'>
                        <input className=' w-50' type='text'  {...register("served", { required: true })} placeholder='Total People Served' />
                        {errors.served && <span>This field is required</span>}
                    </div>

                    <input className='w-25' type="submit" value='Add Service' />
                </form>
            </Container>
        </div>
    );
};

export default AddService;