import React from 'react';
import person1 from '../../../assets/images/person1.jpg';
import person2 from '../../../assets/images/person2.jpg';
import person3 from '../../../assets/images/person3.jpg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Jennifer Winston',
            img: person1,
            reviews: 'I bought a guitar from here.It was awesome.They provide top notch quality.',
        },
        {
            _id: 2,
            name: 'Harry Jackson',
            img: person2,
            reviews: 'I bought a keyboard from here.It was awesome.They provide top notch quality.',
        },
        {
            _id: 3,
            name: 'Emma Shawn',
            img: person3,
            reviews: 'I bought drums from here.It was awesome.They provide top notch quality.',
        },

    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <div className='text-xl font-bold text-accent uppercase'>Testimonial</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Testimonial
                        key={review.id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </div >
    );
};

export default Testimonials;