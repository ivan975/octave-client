import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-six.vercel.app/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>All Categories</h3>
                <h2 className='text-4xl text-accent'>You will find three categories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {
                    categories.map(ctg => <Category
                        key={ctg.id}
                        ctg={ctg}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;