import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './../components/Product';


const Products = () => {
    const { filteredProducts, addToCart } = useContext(CartContext);

    if (!filteredProducts.length) {
        return <p>Loading products...</p>; // Optionally add a loading spinner here
    }

    return (
        <>

            <div className="product-list">
                {filteredProducts.map(product => (
                    <Product key={product._id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </>
    );
};

export default Products;