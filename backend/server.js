const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const Booking = require("./models/Booking"); // Import the Booking model

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Sync the database and create tables if they don’t exist
sequelize
  .sync() // This will create the table if it doesn’t exist
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.error("Error creating database tables:", err));

// Routes
const bookingRoutes = require("./routes/bookings");
app.use("/api/bookings", bookingRoutes);

// Test route
app.get("/api/bookings/test", (req, res) => {
  res.send("Test route is working");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
