import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ ctg }) => {
    const { category_name, image } = ctg;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Link to={`../categories/${category_name}`}>
                    <img className='w-28' src={image} alt="/" />
                </Link>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
            </div>
        </div >
    );
};

export default Category;