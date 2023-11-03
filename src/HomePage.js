import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

function HomePage() {
    const [featuredProducts, setProducts] = useState([]);
    const initialFetch = useRef(false);

    useEffect(() => {
        if (!initialFetch.current) {
        const productionUrl = `https://hikingsupplyco.netlify.app/.netlify/functions/processJSON?id=all`; // Assuming 'all' fetches all items
        const developmentUrl = `http://localhost:3001/items`;
        const url = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // If the data is wrapped in an object with the key 'items', extract it
                const items = data.items ? data.items : data;
                setProducts(items);
                console.log("Fetched data:", items);
            })
            .catch(error => console.error('Error fetching products:', error));
            initialFetch.current = true;
        }
    }, []);

    return (
      <div className="homepage">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Explore the Outdoors with Quality Gear</h1>
            <p>From backpacks to tents, find everything you need for your next adventure.</p>
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </header>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid">
          {featuredProducts.map(item => (
                <div key={item.id} className="item">
                    <img src={`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/images/${item.image}`} alt={item.name} className="item-image" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="price">{item.price}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">View Details</Link>
                </div>
            ))}   
          </div>
        </section>
        <section className="about-us-preview">
          <h2>About Hiking Supply Co.</h2>
          <p>We're dedicated to providing you with the best outdoor gear to make your adventures memorable.</p>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </section>
        {/* ... other sections as needed */}
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    );
  }
  
  export default HomePage;