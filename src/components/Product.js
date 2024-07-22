import React from 'react';
import "./Product.css"
import placeholderImage from './../assets/images/placeholder.jpg'; // Ensure you have a placeholder image in your project
import { Link } from 'react-router-dom';

const shortenName = (name, maxLength = 20) => {
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength - 3) + '...';
};


const Product = ({ product, addToCart }) => (
    <div className="product-card">
        <img
            className="product-image"
            src={product.images[0]}
            alt={product.name}
            onError={(e) => e.target.src = placeholderImage}
        />
        <Link className='LINK' to={`/product/${product._id}`}>
            <h3 className="product-name">{shortenName(product.name)}</h3>
        </Link>
        <div className='priceSe'>
            <p className="product-price">₹{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
);

export default Product;
