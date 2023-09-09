import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Set up the context for images
const imageContext = require.context('./images', false, /\.(png|jpe?g)$/);

function ItemDetail({ addToCart }) {
  const [item, setItem] = useState(null);

  // Quantity selection 
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const decrement = () => {
    if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  // State for popup visibility
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addToCart(item);
    }

    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
        setShowPopup(false);
    }, 2000);
  };

  // Get the id from the route parameters
  const { id } = useParams(); 

  // fetch data for specific item id from mock REST API json
  useEffect(() => {
    fetch(`https://hikingsupplyco.netlify.app/.netlify/functions/processJSON?id=${id}`)
    // fetch(`http://localhost:3001/items/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  // Determine image path dynamically
  let imagePath;
  if (item && item.imageName) {
    imagePath = imageContext(`./${item.imageName}.png`);
  }

  return (
    <div className="item-detail">
      {item && (
        <>
          <img src={`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/images/${item.image}`} alt={item.name} className="product-image" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <div>
              <button onClick={decrement}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increment}>+</button>
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>
          {showPopup && <div className="popup">Item added to cart!</div>}
        </>
      )}
    </div>
  );
}

export default ItemDetail;