import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, getProductById } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // In a real application, you would fetch the product data from an API
        // For this example, we'll simulate fetching data
        const fetchProduct = async () => {
            // Simulated API call
            const response = getProductById(id)
            const data = response[0]
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading amazing products...</p>
        </div>
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Optionally, you can navigate to the cart page or show a confirmation message
    };

    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, parseInt(e.target.value)));
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1)
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };


    return (
        <div className="product-page">
            <button onClick={() => navigate(-1)} className="back-button">
                &larr; Back
            </button>
            <div className="product-container">
                <div className="product-image2">
                    <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="product-price">₹{product.price.toFixed(2)}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-actions">
                        <div className="quantity-control">
                            <button onClick={() => handleDecrement()} className="quantity-btn">-</button>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="cart-item-quantity"
                            />
                            <button onClick={() => handleIncrement()} className="quantity-btn">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;