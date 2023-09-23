import React, { useState, useEffect } from "react";

function ShoppingCart({ cart, setCart }) {

  // State for summarized cart
  const [summarizedCart, setSummarizedCart] = useState([]);

  useEffect(() => {
    const summary = cart.reduce((acc, item) => {
      // Find existing item in accumulator
      const existingItem = acc.find(accItem => accItem.id === item.id);
      
      if (existingItem) {
        // Increase the count
        existingItem.count += 1;
      } else {
        // Add new item with count property
        acc.push({...item, count: 1});
      }

      return acc;
    }, []);

    setSummarizedCart(summary);
  }, [cart]);
  
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
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {summarizedCart.length === 0 ? <p>Your cart is empty</p> : summarizedCart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/images/${item.image}`} alt={item.name} className="thumbnail" />
          <p>{item.name} (x{item.count})</p>
        </div>
      ))}
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      {cart.length > 0 && (
        <button onClick={handleEmptycart} className="cart-button">Empty Cart</button>
      )}
      {showPopup && <div className="popup">Cart emptied!</div>}
    </div>
  );
}

export default ShoppingCart;
