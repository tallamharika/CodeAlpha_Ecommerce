import { useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

const Shop = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter(p => p.category === active);

  return (
    <section className="shop-page">
      <h1>Featured Products</h1>
      <p>Handpicked essentials for refined living</p>

      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
