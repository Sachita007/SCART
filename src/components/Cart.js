// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css'; // Import the CSS file
import placeholderimage from "./../assets/images/placeholder.jpg"

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

    const handleCheckout = () => {
        // Add your checkout logic here or redirect to the checkout page
        console.log('Proceeding to checkout...');
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <div className='cartMain'>
                    <div>
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.images[0]} alt={item.name} className="cart-item-image" onError={(e) => e.target.src = placeholderimage} />
                                <div className='itemDet'>
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <p className="cart-item-price">${item.price}</p>
                                    </div>
                                    <div className="cart-item-actions">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item, e.target.value)}
                                            className="cart-item-quantity"
                                        />
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="cart-item-remove"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
                        <button
                            onClick={handleCheckout}
                            className="cart-checkout"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
