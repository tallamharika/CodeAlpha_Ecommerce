# 🛍️ LUXE – MERN E‑Commerce Web Application

An elegant full‑stack E‑Commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project was developed as part of the **CodeAlpha Internship Task – E‑Commerce Website**.

---

## 🚀 Live Features

- 🔐 User Registration & Login (JWT Authentication)
- 🏠 Public Home Page
- 📦 Product Upload (Authenticated Users)
- 🛒 Persistent Shopping Cart (Stored in MongoDB)
- 💳 Order Placement (Mock Payment Flow)
- 📊 Dashboard Interface
- 🔄 Cart Auto Clear After Successful Order
- 🗄️ Orders Stored with Timestamp & Status

---

## 🧠 Project Architecture

### 🔹 Frontend
- React.js
- React Router DOM
- Axios
- Lucide React Icons
- CSS Styling

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv

---

## 📂 Folder Structure

```
CodeAlpha_Ecommerce
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── css
│   │   └── App.jsx
│   └── package.json
│
└── backend
    ├── models
    ├── routes
    ├── middleware
    ├── server.js
    └── package.json
```

---

## 🛒 Order Flow Explanation

1. User logs in.
2. Adds products to cart.
3. Cart data is stored in MongoDB.
4. On clicking **"Proceed to Pay"**:
   - Order document is created in MongoDB.
   - Order contains:
     - userId
     - items[]
     - totalAmount
     - status ("Placed")
     - createdAt
5. Cart is cleared automatically after successful order.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/home.png)

### 🔐 Login Page
![Login Page](./screenshots/login.png)

### 📊 Dashboard
![Dashboard](./screenshots/dashboard.png)

### 🛒 Cart Page
![Cart](./screenshots/cart.png)

### 📦 Order Stored in MongoDB
![MongoDB Orders](./screenshots/mongodb-order.png)

*(Create a folder named `screenshots` in the root directory and place images there.)*

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/your-username/CodeAlpha_Ecommerce.git
```

### 2️⃣ Backend Setup
```
cd backend
npm install
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:
```
npm start
```

### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```

---

## 🗄️ Database Schema Overview

### User
- username
- email
- password (hashed)

### Cart
- userId
- items[] (productId, name, price, quantity)

### Order
- userId
- items[]
- totalAmount
- status
- createdAt

---

## 🎯 Internship Requirements Completed

✔ Product Listing  
✔ Add to Cart  
✔ Cart Persistence  
✔ Order Processing  
✔ MongoDB Storage  
✔ Authentication System  

---

## 🌟 Future Improvements

- Razorpay / Stripe Payment Integration
- Order History Page
- Admin Dashboard
- Product Categories & Filters
- Deployment (Render / Vercel / Railway)

---

## 👩‍💻 Author

**Tallam Harika**  
MERN Stack Developer  
CodeAlpha Internship Submission

---

## 📜 License

This project is developed for educational and internship purposes.

