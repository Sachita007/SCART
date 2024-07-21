// src/App.js
import React from 'react';
import CartProvider from './contexts/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import { Routes, Route } from "react-router-dom";
import "./App.css"

const App = () => (
  <CartProvider>
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>

      </Routes>


    </div>
  </CartProvider>
);

export default App;
