import React, { useState } from 'react';
import BookingItem from './BookingItem';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  const handleBook = (property, bookingDates) => {
    const newBooking = { property, bookingDates };
    setBookings(prevBookings => [...prevBookings, newBooking]);
  };

  const handleRemoveBooking = bookingIndex => {
    setBookings(prevBookings =>
      prevBookings.filter((booking, index) => index !== bookingIndex)
    );
  };

  return (
    <div className="booking-management">
      <h2>Booked Properties</h2>
      {bookings.map((booking, index) => (
        <BookingItem key={index} booking={booking} onRemove={() => handleRemoveBooking(index)} />
      ))}
    </div>
  );
};

export default BookingManagement;
