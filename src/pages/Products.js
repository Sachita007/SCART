import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from './../components/Product';
import "./Products.css"
import Footer from '../components/Footer';
import Categories from '../components/Categories';


const Products = () => {
    const { filteredProducts, addToCart } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    if (!filteredProducts.length) {
        return <p>Loading products...</p>;
    }

    // Calculate the indexes for slicing the array
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='pTopSec'>
                <div className='pTopSecContent'>
                    <div className='pTitle'>Products</div>
                    <Categories />
                </div>
            </div>
            <div className="product-list">
                {currentItems.map(product => (
                    <Product key={product._id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Products;