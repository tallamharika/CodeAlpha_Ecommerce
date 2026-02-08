/* eslint-env node */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import multer from "multer"; 
import path from "path";   
import Product from "./models/Product.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Static folder to serve uploaded images to the frontend
app.use('/uploads', express.static('public/uploads')); 

// Configure where to save uploaded images
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

/**
 * API Endpoint to receive and save product data
 * Merged your two routes into one that actually saves to MongoDB
 */
app.post('/api/products/upload', upload.single('image'), async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      // Saved with full URL so Dashboard can display it easily
      image: `http://localhost:5000/uploads/${req.file.filename}`
    });

    const savedProduct = await newProduct.save(); // Actually saves it to MongoDB
    res.status(200).json(savedProduct);
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json(err);
  }
});

/**
 * Route to get all products (Static + Uploaded) for the Dashboard
 */
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetches from your Product model
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Routes
app.use("/api", authRoutes);
app.use("/api/cart", cartRoutes);

app.listen(5000, () => console.log("Server running on 5000"));