import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './Product';
import Hero from './Hero';

const ProductList = ({ number }) => {
    const { filteredProducts, addToCart } = useContext(CartContext);

    if (!filteredProducts.length) {
        return <p>Loading products...</p>; // Optionally add a loading spinner here
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
