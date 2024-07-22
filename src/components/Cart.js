// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css'; // Import the CSS file
import placeholderimage from "./../assets/images/placeholder.jpg"
import { Link } from 'react-router-dom';

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
                    <div className='itemsDiv'>
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.images[0]} alt={item.name} className="cart-item-image" onError={(e) => e.target.src = placeholderimage} />
                                <div className='itemDet'>
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <p className="cart-item-price">₹{item.price}</p>
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
                        <div className="cart-summary">
                            <div className="cart-subtotal">
                                <span>Subtotal:</span>
                                <span>₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="cart-shipping">
                                <span>Shipping:</span>
                                <span>₹5.99</span>
                            </div>
                            <div className="cart-tax">
                                <span>Tax:</span>
                                <span>₹{(totalPrice * 0.08).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>₹{(totalPrice + 5.99 + totalPrice * 0.08).toFixed(2)}</span>
                        </div>
                        <div className="cart-actions">
                            <button onClick={handleCheckout} className="cart-checkout">
                                <Link className='LINK' to={"/Checkout"}>
                                    Proceed to Checkout
                                </Link>
                            </button>
                            <div className="cart-terms">
                                By clicking "Proceed to Checkout", you agree to our
                                <a href="#terms">Terms of Service</a> and
                                <a href="#privacy">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
