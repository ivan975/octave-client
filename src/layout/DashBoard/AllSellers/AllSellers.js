import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllSellers = () => {

    const [seller, setSeller] = useState([]);

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['Seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = res.json()
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete the seller?`);
        if (proceed) {
            fetch(`http://localhost:5000/sellers/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error(`Seller deleted`)
                        const remaining = seller.filter(s => s._id !== id)
                        setSeller(remaining);
                        refetch();
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-3xl'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        <button onClick={() => { handleDelete(seller._id) }} className='btn btn-xs btn-accent rounded-lg'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllSellers;