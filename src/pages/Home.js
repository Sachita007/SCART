import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <Hero />
            <ProductList number={10} />
        </>
    );
};

export default Home;