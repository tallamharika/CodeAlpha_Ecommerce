import express from "express";
import Cart from "../models/Cart.js";
const router = express.Router();

// Add to Cart
router.post("/add", async (req, res) => {
  const { userId, product } = req.body;
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [product] });
  } else {
    const itemIndex = cart.items.findIndex(p => p.productId === product.productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push(product);
    }
  }
  await cart.save();
  res.status(200).json(cart);
});

// Get Cart items
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart ? cart.items : []);
});
// Update Item Quantity
// 1. Update Quantity
router.put("/update", async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    const itemIndex = cart.items.findIndex(p => p.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = Math.max(1, quantity);
      await cart.save();
      res.status(200).json(cart.items);
    }
  } catch (err) { res.status(500).json(err); }
});

// 2. Delete Individual Item
router.delete("/remove/:userId/:productId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    cart.items = cart.items.filter(item => item.productId !== req.params.productId);
    await cart.save();
    res.status(200).json(cart.items);
  } catch (err) { res.status(500).json(err); }
});

// 3. Clear Entire Cart
router.delete("/clear/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    cart.items = [];
    await cart.save();
    res.status(200).json({ msg: "Cart cleared" });
  } catch (err) { res.status(500).json(err); }
});
export default router;