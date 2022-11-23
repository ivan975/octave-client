import React from 'react';
import category1 from '../../../assets/images/category1.png';
import category2 from '../../../assets/images/category2.png';
import category3 from '../../../assets/images/category3.png';
import Category from './Category';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: 'Guitar',
            img: category1
        },
        {
            id: 2,
            name: 'Drums',
            img: category2
        },
        {
            id: 3,
            name: 'Keyboards',
            img: category3
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>All Categories</h3>
                <h2 className='text-4xl text-accent'>You will find three categories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;