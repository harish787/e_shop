import React, { useEffect, useState } from 'react';
import Product from './Product';
import { fetchProducts } from './mockApi'; 
import './ProductList.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Error fetching products. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product }]);
    };
    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={() => addToCart(product)}/>
            ))}
        </div>
    );
};

export default ProductList;
