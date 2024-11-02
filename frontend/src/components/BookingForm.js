import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking Created");
    } catch (error) {
      console.error(error);
      alert("Failed to create booking");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <input
        type="text"
        name="service"
        placeholder="Service"
        onChange={handleChange}
      />
      <input type="date" name="date" onChange={handleChange} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
