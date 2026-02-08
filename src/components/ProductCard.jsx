import React from "react";

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!token) return alert("Please login to add items to cart");

    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          product: {
            // FIXED: Handles both static 'id' and MongoDB '_id'
            productId: product._id || product.id,
            name: product.name,
            price: product.price,
            image: product.image
          }
        })
      });

      if (response.ok) {
        alert(`${product.name} added to cart!`);
      }
    } catch (err) {
      console.error("Cart error:", err);
    }
  };

  return (
    <div className="product-card">
      {/* FIXED: Wrapped in your CSS class to fix the image size */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button className="add-btn" onClick={handleAddToCart}>
          <span className="icon">🛒</span> Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;