const express = require("express");
const router = express.Router();
const sequelize = require("../database"); // Adjust the path if needed
const { DataTypes } = require("sequelize");

// Define a sample model (replace with your actual model)
const Booking = require("../models/Booking");

// Sample route to get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

// Sample route to create a booking
router.post("/", async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking" });
  }
});

module.exports = router;
