import React from "react";
import "./Index.css";
import heroImage from "../assets/images/i5.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Index = () => {
    const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* FULL SCREEN HERO */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="premium-tag">
            <span>✨</span> PREMIUM E-COMMERCE
          </div>
          <h1>Elevate Your <br /> Everyday Style</h1>
          <p>
            Discover curated essentials crafted with precision and designed 
            to last. Sign in to explore our exclusive collection.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-solid" 
              onClick={() => navigate("/login")}
            >
              Sign In →
            </button>

            <button 
              className="btn btn-outline" 
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Now completely below the image */}
      {/* WHY CHOOSE LUXE SECTION */}
<section className="why-luxe">
  <div className="why-container">
    <h2 className="why-title">Why Choose LUXE?</h2>
    <p className="why-subtitle">
      Premium quality, curated collections, and an unmatched shopping experience.
    </p>

    <div className="why-grid">
      <div className="why-card">
        <span className="why-icon">✦</span>
        <h3>Curated Collections</h3>
        <p>
          Every product is handpicked for quality and style. 
          Only the best makes it to our store.
        </p>
      </div>

      <div className="why-card">
        <span className="why-icon">🔒</span>
        <h3>Secure Shopping</h3>
        <p>
          SSL-encrypted checkout with JWT authentication keeps 
          your data safe and secure.
        </p>
      </div>

      <div className="why-card">
        <span className="why-icon">⚡</span>
        <h3>Fast Delivery</h3>
        <p>
          Free shipping on orders over $100. Most orders delivered 
          within 3–5 business days.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Index;