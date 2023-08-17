import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/items`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <h3><Link to={`/item/${item.id}`}>{item.name}</Link></h3>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
