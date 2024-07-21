import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>

            <div className="search-bar">
                <input type="text" placeholder="Search for products..." />
                <div className='sIcondiv'>
                    <CiSearch className='sIcon' />
                </div>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            <div className='cDiv'>
                <div className="cart-icon">
                    <Link className='LINK' to="/cart">
                        <CiShoppingCart className="cIcon" />
                        <span className="cart-quantity">{totalItems}</span>
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;