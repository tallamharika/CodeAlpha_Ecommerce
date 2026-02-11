import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogOut, Upload } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const publicPages = ["/", "/about", "/contact", "/login", "/register"];
const isPublicPage = publicPages.includes(location.pathname);




  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">LUXE</Link>

        <ul className="nav-links">
  {/* 🌍 PUBLIC NAVBAR (Home + Auth pages) */}
  {/* 🌍 PUBLIC NAVBAR */}
{isPublicPage && (
  <>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    {!token && <li><Link to="/login">Sign In</Link></li>}
    {!token && (
      <li>
        <Link to="/register" className="nav-register-btn">Register</Link>
      </li>
    )}
  </>
)}

{/* 🔐 PRIVATE NAVBAR */}
{token && !isPublicPage && (
  <>
    <li>
      <Link to="/upload" className="nav-icon-link">
        <Upload size={18} /> Upload
      </Link>
    </li>

    <li><Link to="/dashboard">Dashboard</Link></li>

    <li>
      <Link to="/cart" className="cart-link">
        <ShoppingCart size={18} /> Cart
      </Link>
    </li>

    <li className="profile-nav-link">
      <User size={18} />
      <span>{username}</span>
    </li>

    <li>
      <button onClick={handleLogout} className="logout-btn">
        <LogOut size={18} />
      </button>
    </li>
  </>
)}

</ul>

      </div>
    </nav>
  );
};

export default Navbar;
