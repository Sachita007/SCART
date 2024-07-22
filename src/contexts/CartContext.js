import React, { createContext, useState, useEffect } from 'react';
import { getProducts } from '../services/api';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
                setFilteredProducts(productsData);

            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart(prevCart => {

            const itemInCart = prevCart.find(item => item._id === product._id);
            if (itemInCart) {
                return prevCart.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                console.log("PREV", prevCart, "\nProd", product)
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCart(prevCart => prevCart.filter(item => item._id !== product._id));
    };

    const updateQuantity = (product, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item._id === product._id ? { ...item, quantity: parseInt(quantity) } : item
            )
        );
    };
    const handleSearch = (query) => {
        setSearchQuery(query);
        setFilteredProducts(products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        ));
    };
    const handleCategory = (category) => {
        setCategory(category)
        setFilteredProducts(products.filter(product => category ?
            product.category.includes(category.toLowerCase()) : product
        ));
    };

    const clearCart = () => {
        setCart([])
    }
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ products, clearCart, handleCategory, filteredProducts, setFilteredProducts, handleSearch, cart, addToCart, removeFromCart, updateQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
