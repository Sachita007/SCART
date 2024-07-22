// src/App.js
import React from 'react';
import CartProvider from './contexts/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';

const App = () => (
  <CartProvider>
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/Checkout" element={<Checkout />}></Route>
        <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
      <Footer />


    </div>
  </CartProvider>
);

export default App;
