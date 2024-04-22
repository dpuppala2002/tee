import React from 'react';

const BookingItem = ({ booking, onRemove }) => {
  const { property, bookingDates } = booking;

  return (
    <div className="booking-item">
      <h3>{property.title}</h3>
      <p>Booking Dates: {bookingDates.startDate} to {bookingDates.endDate}</p>
      <p>Total Cost: ${property.price * calculateBookingDuration(bookingDates)} </p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

const calculateBookingDuration = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default BookingItem;
