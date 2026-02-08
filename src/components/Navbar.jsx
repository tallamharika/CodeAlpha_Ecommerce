import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogOut, Upload } from "lucide-react"; // Added Upload icon
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const isDashboardArea = ["/dashboard", "/profile", "/cart", "/upload"].includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">LUXE</Link>

        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {token ? (
            isDashboardArea && (
              <>
                {/* NEW: Upload Link */}
                <li>
                  <Link to="/upload" className="nav-icon-link">
                    <Upload size={20} />
                    <span>Upload</span>
                  </Link>
                </li>

                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                  <Link to="/cart" className="cart-link">
                    <ShoppingCart size={20} />
                    <span>Cart</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="profile-nav-link">
                    <div className="user-profile">
                      <User size={18} />
                      <span>{username}</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    <LogOut size={18} />
                  </button>
                </li>
              </>
            )
          ) : (
            <>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register" className="nav-register-btn">Register</Link></li>
            </>
          )}

          {token && !isDashboardArea && (
             <li><Link to="/dashboard" className="nav-register-btn">Go to Dashboard</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;