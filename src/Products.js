import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);

  // fetch data for list of items from mock REST API json
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/db.json`)
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <div className="item-list">
    {items.map((item) => (
      <div className="item" key={item.id}>
        <Link to={`/item/${item.id}`}>
        <div className="item-image">
          <img src={`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/images/${item.image}`} alt={item.name} />
        </div>
        <h3>{item.name}</h3>
        <p className="price">{item.price}</p>
        </Link>
      </div>
    ))}
  </div>
  );
}

export default ItemList;
