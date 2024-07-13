import React from 'react';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the E-Commerce Website</h1>
            <ProductList />
            <Footer/>
        </div>
    );
};

export default HomePage;
