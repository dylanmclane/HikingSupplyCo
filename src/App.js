import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import ItemDetail from "./ItemDetail";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <Router>
      <div>
        <Navigation cart={cart} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/item/:id" element={<ItemDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
