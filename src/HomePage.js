import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function HomePage() {

    const [featuredProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://hikingsupplyco.netlify.app/.netlify/functions/processJSON?id=${id}`)
        // fetch(`http://localhost:3001/items/`) // For local
            .then(response => response.json())
            .then(data => setProducts(data)) // Adjust if your data structure is different
            .catch(error => console.error('Error fetching products:', error));
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
          {featuredProducts.map(product => (
                <div key={product.id} className="item">
                    <img src={`https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/images/${product.image}`} alt={product.name} className="item-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">{product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
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