// models/Booking.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Booking = sequelize.define(
  "Booking",
  {
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
  },
  {
    tableName: "Bookings", // explicitly define table name
    timestamps: true, // enables createdAt and updatedAt columns
  }
);

module.exports = Booking;
