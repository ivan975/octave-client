import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const [buyer, setBuyer] = useState([]);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = res.json()
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete the buyer?`);
        if (proceed) {
            fetch(`http://localhost:5000/buyers/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error(`Buyer deleted`)
                        const remaining = buyer.filter(b => b._id !== id)
                        setBuyer(remaining);
                        refetch();
                    }
                })
        }
    }

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
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={() => { handleDelete(user._id) }} className='btn btn-xs btn-accent rounded-lg'>Delete</button>
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

export default AllUsers;