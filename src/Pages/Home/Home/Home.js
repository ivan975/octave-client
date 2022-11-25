import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Testimonials from '../Testimonial/Testimonials';
import Contact from '../Contact/Contact';
import CategoriesID from '../../CategoryID/CategoriesID';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Details />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;