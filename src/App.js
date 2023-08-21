import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import ShoppingCart from "./ShoppingCart";
import ItemList from "./ItemList";
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
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          
          {/* Add a default route. In this case, redirecting to ItemList. */}
          <Route path="/" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
