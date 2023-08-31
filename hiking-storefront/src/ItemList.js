import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  // fetch data for list of items from mock REST API json
  useEffect(() => {
    fetch(`http://localhost:3001/items`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const itemTypes = [...new Set(items.map(item => item.type))];
  const filteredItems = selectedType ? items.filter(item => item.type === selectedType) : items;

  return (
    <div>
      <select 
          value={selectedType} 
          onChange={e => setSelectedType(e.target.value)}>
          <option value="">All Types</option>
          {itemTypes.map(type => (
              <option key={type} value={type}>{type}</option>
          ))}
      </select>

      {filteredItems.map((item) => (
        <div className="item" key={item.id}>
          <h3><Link to={`/item/${item.id}`}>{item.name}</Link></h3>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
