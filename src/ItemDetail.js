import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ addToCart }) {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Get the id from the route parameters

  useEffect(() => {
    fetch(`http://localhost:3001/items/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="item-detail">
      {item && (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => {
            console.log("Button clicked, adding item: ", item);
            addToCart(item);
          }}>Add to Cart</button>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
