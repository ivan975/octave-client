import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['Seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = res.json()
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
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
                                    <td><button className='btn btn-xs btn-accent rounded-lg'>Delete</button></td>
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