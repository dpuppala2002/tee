import React, { useState } from 'react';

const Checkout = ({ bookings }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckout = () => {
    // Implement checkout logic (e.g., API call, validation)
    console.log('Checkout:', formData, 'Bookings:', bookings);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        {/* Add more input fields for email, phone, address, paymentMethod */}
        <button type="button" onClick={handleCheckout}>Complete Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
