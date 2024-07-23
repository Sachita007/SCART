import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './Product';
import Hero from './Hero';

const ProductList = ({ number }) => {
    const { filteredProducts, addToCart } = useContext(CartContext);

    if (!filteredProducts.length) {
        return <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading amazing products...</p>
        </div>
    }

    return (
        <>
            <div className="product-list">
                {(number ? filteredProducts.slice(0, number) : filteredProducts).map((product, index) => (
                    <Product key={product._id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
