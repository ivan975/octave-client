import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './CategoryID';
const CategoriesID = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                products.map(product => <Category
                    key={product._id}
                    product={product}
                >
                </Category>)
            }
        </div>
    );
};

export default CategoriesID;