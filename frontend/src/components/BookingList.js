import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost:5000/api/bookings");
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.name} - {booking.service} on{" "}
            {new Date(booking.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
