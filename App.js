import React from 'react';
import PropertyListings from './PropertyListings';
import BookingManagement from './BookingManagement';
import Checkout from './Checkout';
import './App.css'; // Add CSS file for styling

const App = () => {
  return (
    <div className="App">
      <h1>Property Rental Platform</h1>
      <div className="main-content">
        <PropertyListings />
        <BookingManagement />
        {/* Add a route or conditional rendering for Checkout component */}
      </div>
    </div>
  );
};

export default App;
