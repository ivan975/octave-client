import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const MyProducts = () => {

    const [products, setProducts] = useState([]);


    const { data: items = [], isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel the order?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error(`Product deleted`)
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                    }
                })
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Original Price</th>
                        <th>Resale Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i) =>
                            <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="/" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.location}</td>
                                <td>{item.category}</td>
                                <td>{item.original_price}</td>
                                <td>{item.resale_price}</td>
                                <td><button onClick={() => { handleDelete(item._id) }} className='btn btn-xs btn-accent'>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;