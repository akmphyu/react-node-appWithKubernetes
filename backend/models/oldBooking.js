// models/Booking.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Adjust the path as needed

const Booking = sequelize.define("Booking", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },
});

module.exports = Booking;
