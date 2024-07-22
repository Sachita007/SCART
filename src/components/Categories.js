import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import "./Categories.css"
const Categories = ({ setCategory }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { handleCategory } = useContext(CartContext)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const categories = ['All', 'Table', 'Chair', 'Armchair', 'Lamp', 'Bed'];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        handleCategory(category === 'All' ? '' : category);
    };

    return (
        <div className='category-section'>
            <h2>Categories</h2>
            {isMobile ? (
                <select
                    className='category-select'
                    value={activeCategory}
                    onChange={(e) => handleCategoryClick(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            ) : (
                <div className='category-list'>
                    {categories.map(category => (
                        <div
                            key={category}
                            className={`category-item ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;