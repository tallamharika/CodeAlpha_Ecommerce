import React from "react";
import "./Profile.css";
import { User, ShoppingBag, Box, CreditCard, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "user@example.com"; // Ensure you save email on login

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={40} color="white" />
          </div>
          <div className="profile-user-info">
            <h1>{username}</h1>
            <p>{email}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon cart-icon">
              <ShoppingBag size={24} />
            </div>
            <div className="stat-data">
              <span className="stat-number">0</span>
              <span className="stat-label">Cart Items</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon orders-icon">
              <Box size={24} />
            </div>
            <div className="stat-data">
              <span className="stat-number">0</span>
              <span className="stat-label">Orders</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon payment-icon">
              <CreditCard size={24} />
            </div>
            <div className="stat-data">
              <span className="stat-number">0</span>
              <span className="stat-label">Payment Methods</span>
            </div>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="account-details-card">
          <h2>Account Details</h2>
          <div className="detail-item">
            <label>FULL NAME</label>
            <p>{username}</p>
          </div>
          <div className="detail-item">
            <label>EMAIL ADDRESS</label>
            <p>{email}</p>
          </div>
          <div className="detail-item">
            <label>MEMBER SINCE</label>
            <p>February 2026</p>
          </div>

          <button onClick={handleLogout} className="sign-out-btn">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;