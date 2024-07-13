import React from 'react';
import ProductList from '../components/ProductList';
import MyCart from '../components/MyCart';
import Footer from '../components/Footer';

const MyCartPage = () => {
    return (
        <div>
            <h2>Products</h2>
            <MyCart/>
            <Footer/>
        </div>
    );
};

export default MyCartPage;
