import React from 'react';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {

    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Original Price</th>
                        <th>Resale Price</th>
                        <th>Time of post</th>
                        <th>Seller Name</th>
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
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.location}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>{item.original_price}</td>
                                <td>{item.resale_price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{item.seller_name}</button>
                                </th>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;