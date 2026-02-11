import { ShoppingBag, Star } from "lucide-react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const userId = localStorage.getItem("userId");

  const handleAddToCart = async () => {
    if (!userId) {
      alert("Please login first");
      return;
    }

    try {
      await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          product: {
            productId: product._id || product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        }),
      });

      alert("✅ Added to cart!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add to cart");
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} />
          ))}
        </div>

        <div className="price-row">
          <span className="price">${product.price}</span>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>
          <ShoppingBag size={14} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
