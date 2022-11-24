import React from 'react';
import banner2 from '../../../assets/images/banner2.png';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={banner2} alt="" />
                <div className='max-w-md'>
                    <h1 className="text-5xl text">Guitare</h1>
                    <p className="py-6 ">Relax and play the music you love the most.Here you can buy any second hand instrument at a very good place.We always believe in <blockquote>"Where words fail, music speaks"</blockquote></p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;