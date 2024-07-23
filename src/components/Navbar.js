import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useLocation, Link } from 'react-router-dom';
import Product from './Product';


const Navbar = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [input, setInput] = useState('');
    const location = useLocation();
    const { handleSearch } = useContext(CartContext);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        handleSearch(input);
        navigate("/products")
    };



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo"><Link className='LINK' to={"/"}> SCART </Link></div>
                <div className="search-bar">
                    <div className='sIcondiv'>
                        <CiSearch className='sIcon' />
                    </div>
                    <input type="text" placeholder="Search for products..." onChange={handleInputChange} />

                </div>
                <div className="nav-links desktop-nav">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
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
            <div className={`nav-links mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;