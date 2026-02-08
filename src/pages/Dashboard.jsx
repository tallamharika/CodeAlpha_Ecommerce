import "./Dashboard.css";
import { products as staticProducts, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react"; // Added useEffect here

const Dashboard = () => {
  const username = localStorage.getItem("username");
  const [activeCategory, setActiveCategory] = useState("All");
  const [dbProducts, setDbProducts] = useState([]); // State for uploaded products

  // Fetch uploaded products from the database
  useEffect(() => {
    const fetchUploadedProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setDbProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchUploadedProducts();
  }, []);

  // Combine static data with database data
  const allAvailableProducts = [...staticProducts, ...dbProducts];

  // Filtering logic using the combined list
  const filteredProducts =
    activeCategory === "All"
      ? allAvailableProducts
      : allAvailableProducts.filter(p => p.category === activeCategory);

  return (
    <div className="dashboard">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">✨ NEW COLLECTION 2026</span>
          <h1>Welcome back, {username}!</h1>
          <p className="sub">
            Explore our curated collection of premium essentials for refined living.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="features">
          <div className="feature-card">
            <span className="icon">🚚</span>
            <div className="text">
              <p className="title">Free Shipping</p>
              <p className="desc">On orders over $100</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon">🛡️</span>
            <div className="text">
              <p className="title">Secure Payments</p>
              <p className="desc">SSL encrypted checkout</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon">🔄</span>
            <div className="text">
              <p className="title">Easy Returns</p>
              <p className="desc">30-day return policy</p>
            </div>
          </div>
        </section>

        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Handpicked essentials for your style</p>

        <section className="filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="products">
          {filteredProducts.map(product => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;