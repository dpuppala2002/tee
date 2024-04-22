import React, { useState } from 'react';

const PropertyCard = ({ property, onBook }) => {
  const [bookingDates, setBookingDates] = useState({ startDate: '', endDate: '' });

  const handleBookClick = () => {
    if (bookingDates.startDate && bookingDates.endDate) {
      onBook(property, bookingDates);
    } else {
      alert('Please select booking dates.');
    }
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}/night</p>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={bookingDates.startDate}
          onChange={e => setBookingDates({ ...bookingDates, startDate: e.target.value })}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={bookingDates.endDate}
          onChange={e => setBookingDates({ ...bookingDates, endDate: e.target.value })}
        />
      </div>
      <button onClick={handleBookClick}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
