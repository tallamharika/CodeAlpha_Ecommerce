import React, { useState } from "react"; // Added useState to track input
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  // 1. Create states to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Now 'email' and 'password' are defined and can be sent to the backend
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      window.location.href = "/dashboard";
    } else {
      alert(data.msg || "Login failed"); // Optional: alert user on error
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign In</h2>
        <p>Welcome back to LUXE</p>

        {/* 2. Connect inputs to the states using value and onChange */}
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleLogin}>
          Sign In
        </button>

        <p className="auth-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;