import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItem = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        name: data.name,
                        location: data.location,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        time_of_post: data.time_of_post,
                        category: data.category,
                        image: imgData.data.display_url
                    }
                    fetch('https://assignment-12-server-six.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} added successfully`)
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-4xl'>Add a product</h2>
            <form
                className='grid grid-cols-1 lg:grid-cols-2'
                onSubmit={handleSubmit(handleAddProduct)}>
                <div
                    className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"{...register('name', {
                        required: 'Name is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" {...register('location', {
                        required: 'Location is required'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="text" {...register('original_price', {
                        required: 'Price is required'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="text" {...register('resale_price', {
                        required: 'Price is required'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Time of post</span></label>
                    <input type="text" {...register('time', {
                        required: 'Time is required'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.time_of_post && <p className='text-red-600'>{errors.time?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select {...register('category')} className="select select-bordered w-full max-w-xs">
                        <option>Guitar</option>
                        <option>Drums</option>
                        <option>Keyboard</option>
                    </select>
                    <label className="label"><span className="label-text"></span></label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register('image', {
                        required: 'Photo is required'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full max-w-xs' value='Add Product' type="submit" />
            </form >
        </div >
    );
};

export default AddItem;