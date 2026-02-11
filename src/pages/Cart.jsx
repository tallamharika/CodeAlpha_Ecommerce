import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Essential for navigation
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate(); // Hook to navigate to Dashboard

  const fetchCart = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
      const data = await res.json();
      if (Array.isArray(data)) setItems(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, [userId]);

  // Stable empty dependency array prevents the "setState synchronously" loop
  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await fetch("http://localhost:5000/api/cart/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity: newQuantity })
      });
      fetchCart();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const removeItem = async (productId) => {
    try {
      await fetch(`http://localhost:5000/api/cart/remove/${userId}/${productId}`, { method: "DELETE" });
      fetchCart();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(`http://localhost:5000/api/cart/clear/${userId}`, { method: "DELETE" });
      setItems([]);
    } catch (err) {
      console.error("Clear error:", err);
    }
  };
const placeOrder = async () => {
  try {
    const orderItems = items.map(item => ({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1
    }));

    const res = await fetch("http://localhost:5000/api/orders/place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        items: orderItems,
        totalAmount: subtotal
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Order failed");
    }

    return true;
  } catch (err) {
    console.error("Order Error:", err);
    alert("Order failed. Try again.");
    return false;
  }
};

  // Logic for the new buttons
  const handleProceedToPay = async () => {
  if (items.length === 0) {
    alert("Cart is empty");
    return;
  }

  const success = await placeOrder();

  if (success) {
    alert("✅ Order placed successfully!");
    await clearCart(); // clears DB + UI
    navigate("/dashboard"); // 👈 ADD THIS
  }
};

  const handleContinueShopping = () => {
    navigate("/dashboard"); // Navigates to dashboard route
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-header-flex">
            <h1 className="cart-title">Shopping Cart</h1>
            <button className="clear-cart-link" onClick={clearCart}>Clear Cart</button>
          </div>

          <div className="cart-items-list">
            {items.map((item) => (
              <div key={item.productId} className="cart-item-card">
                <div className="item-img-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <p className="item-category">ACCESSORIES</p>
                  <h4 className="item-name">{item.name}</h4>
                  <div className="quantity-selector">
                    <button onClick={() => updateQuantity(item.productId, (item.quantity || 1) - 1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.productId, (item.quantity || 1) + 1)}>+</button>
                  </div>
                </div>
                <div className="item-price-section">
                  <p className="item-price">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                  <button className="trash-btn" onClick={() => removeItem(item.productId)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary-sidebar">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span className="free-text">Free</span></div>
          <hr />
          <div className="summary-row total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          
          {/* New Button Layout */}
          <button className="checkout-main-btn" onClick={handleProceedToPay}>
            Proceed to Pay
          </button>
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;