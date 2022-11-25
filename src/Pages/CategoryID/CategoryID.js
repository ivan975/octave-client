import React from 'react';

const CategoryID = ({ product, setOpen }) => {

    const { img, name, location, resale_price, time_of_post, original_price, seller_name } = product;

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-1">
                    <p to='/' className="text-sm">Seller Name: <span className='font-semibold'>{seller_name}</span></p>
                </div>
            </div>
            <div>
                <img src={img} alt="/" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button type="button" className="p-2 text-center">
                        location: <span className='font-semibold'>{location}</span>
                    </button>
                    <button type="button" className="p-2">
                        Time of post : {time_of_post}
                    </button>
                </div>
                <div className="flex space-x-2 text-sm dark:text-gray-400">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        Resale Price: <span className='text-accent font-semibold'> {resale_price}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        Original Price: <span className='text-accent font-semibold'> {original_price}</span>
                    </button>
                </div>
                <label
                    htmlFor="booking-modal"
                    className="btn btn-accent"
                    onClick={() => setOpen(product)}
                >Book</label>
            </div>
        </div>
    );
};

export default CategoryID;