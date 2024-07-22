import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import "./Checkout.css"
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);

    };

    const handleClosePopup = () => {
        setShowPopup(false);
        clearCart();
        navigate('/'); // Navigate to home page
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <div className="checkout-container">
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Shipping Information</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        required
                    />
                    <div className="form-group">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            required
                        />
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Zip Code"
                            required
                        />
                    </div>

                    <h2>Payment Details</h2>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Card Number"
                        required
                    />
                    <div className="form-group">
                        <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                        />
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                            required
                        />
                    </div>

                    <button type="submit" className="checkout-button">Place Order</button>
                </form>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    {cart.map(item => (
                        <div key={item._id} className="summary-item">
                            <span>{item.name}</span>
                            <span>₹{item.price.toFixed(2)}</span>
                        </div>
                    ))}
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
                    <div className="summary-total">
                        <span>Total</span>
                        <span>₹{(totalPrice + 5.99 + totalPrice * 0.08).toFixed(2)}</span>
                    </div>
                </div>
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <h2>Order Placed Successfully!</h2>
                            <div className="popup-summary">
                                <h3>Order Summary</h3>
                                {cart.map(item => (
                                    <div key={item._id} className="summary-item">
                                        <span>{item.name}</span>
                                        <span>₹{item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="cart-summary">
                                    <div className="cart-subtotal">
                                        <span>Subtotal:</span>
                                        <span>₹{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="cart-shipping">
                                        <span>Shipping:</span>
                                        <span>₹{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="cart-tax">
                                        <span>Tax:</span>
                                        <span>₹{(totalPrice * 0.08).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="summary-total">
                                    <span>Total</span>
                                    <span>₹{(totalPrice + 5.99 + totalPrice * 0.08).toFixed(2)}</span>
                                </div>
                            </div>
                            <button onClick={handleClosePopup} className="home-button">Return to Home</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;