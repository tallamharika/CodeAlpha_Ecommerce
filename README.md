# 🛍️ LUXE – MERN E‑Commerce Web Application

An elegant full‑stack E‑Commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project was developed as part of the **CodeAlpha Internship Task – E‑Commerce Website**.

---
## 👩‍🎓 Intern Details

Name: TALLAM HARIKA 

Student ID: CA/DF1/23660

Internship Domain: Full Stack Development

Organization: CodeAlpha

Project Name: SIMPLE E-COMMERCE STORE
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
<p align="center">
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(850).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(859).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(860).png" width="250"/>
</p>


### 🔐 Login Page
<p align="center">
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(851).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(852).png" width="250"/>
</p>

### 📊 Dashboard
<p align="center">
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(853).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(854).png" width="250"/>
</p>

### 🛒 Cart Page
<p align="center">
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(855).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(856).png" width="250"/>
</p>

### 📦 Order Stored in MongoDB
<p align="center">
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(857).png" width="250"/>
  <img src="https://github.com/tallamharika/CodeAlpha_Ecommerce/blob/main/Screenshot%20(858).png" width="250"/>
</p>

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

