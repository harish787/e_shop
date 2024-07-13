import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-card">
            <div className="product-image">
            <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
          </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="product-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
