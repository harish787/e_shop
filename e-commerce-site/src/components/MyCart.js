// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './MyCart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
