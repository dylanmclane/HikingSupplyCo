import React from "react";
import { Link } from "react-router-dom";

function Navigation( {cart} ) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
          <img src="/logo192.png" alt="Logo" />
          <span className="site-title">Hiking Supply Co</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart {cart.length > 0 && <span>({cart.length})</span>} </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
