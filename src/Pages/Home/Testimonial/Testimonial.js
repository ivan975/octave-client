import React from 'react';

const Testimonial = ({ review }) => {

    const { name, img, reviews } = review;

    return (
        <section className='mx-auto'>
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center mt-6'>
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='/' />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-lg'>{name}</h5>
                        </div>
                    </div>
                    <p>{reviews}</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;