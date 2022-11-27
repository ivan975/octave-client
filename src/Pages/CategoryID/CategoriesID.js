import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../Booking/BookingModal/BookingModal';
import Category from './CategoryID';
const CategoriesID = () => {

    const [open, setOpen] = useState(null);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-six.vercel.app/products`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map(product => <Category
                        key={product._id}
                        product={product}
                        setOpen={setOpen}
                    >
                    </Category>)
                }
            </div>
            {
                open &&
                <BookingModal
                    open={open}
                    setOpen={setOpen}
                ></BookingModal>
            }
        </section >

    );
};

export default CategoriesID;