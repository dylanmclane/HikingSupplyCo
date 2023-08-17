import React from "react";

function ShoppingCart({ cart, onEmptyCart }) {
  
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      {cart.length > 0 && (
        <button onClick={onEmptyCart}>Empty Cart</button>
      )}
    </div>
  );
}

export default ShoppingCart;
