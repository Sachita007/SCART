import React from 'react';
import "./Product.css"
import placeholderImage from './../assets/images/placeholder.jpg'; // Ensure you have a placeholder image in your project

const Product = ({ product, addToCart }) => (
    <div className="product-card">
        <img
            className="product-image"
            src={product.images[0]}
            alt={product.name}
            onError={(e) => e.target.src = placeholderImage}
        />
        <h3 className="product-name">{product.name}</h3>
        <div className='priceSe'>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
);

export default Product;
