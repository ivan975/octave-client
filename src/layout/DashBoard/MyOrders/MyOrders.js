import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/buyingProducts?email=${user?.email}`;

    const { data: buyingProducts = [] } = useQuery({
        queryKey: ['buyingProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyingProducts.map((items, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{items.user}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.location}</td>
                                    <td>{items.seller_name}</td>
                                    <td>{items.resale_price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;