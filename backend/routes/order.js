import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/place", async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Order failed" });
  }
});

export default router;
