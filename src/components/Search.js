// src/components/Search.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Search = () => {
    const [query, setQuery] = useState('');
    const { products, setFilteredProducts } = useContext(CartContext);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        const filtered = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for products..."
        />
    );
};

export default Search;
