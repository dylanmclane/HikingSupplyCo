import React from "react";
import { Link } from "react-router-dom";

function Navigation( {cart} ) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/ItemList">Items</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart {cart.length > 0 && <span>({cart.length})</span>} </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
