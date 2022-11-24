import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Link to='/about'>
                    <img className='w-28' src={img} alt="/" />
                </Link>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div >
    );
};

export default Category;