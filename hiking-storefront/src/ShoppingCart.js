import React, { useState } from "react";

function ShoppingCart({ cart, setCart }) {
  
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  // Empty cart popup
  const [showPopup, setShowPopup] = useState(false);

  const handleEmptycart = () => {
    setCart([]); // empties cart
    setShowPopup(true); // shows empty cart popup

    setTimeout(() => {
      setShowPopup  (false);
    }, 2000);
  };

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
        <button onClick={handleEmptycart}>Empty Cart</button>
      )}
      {showPopup && <div className="popup">Cart emptied!</div>}
    </div>
  );
}

export default ShoppingCart;
