import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import FilterBar from './FilterBar';
import propertiesData from './data/propertiesData'; // Mock data for properties

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: [],
  });

  useEffect(() => {
    // Fetch properties data (you can replace this with an API call)
    setProperties(propertiesData);
    setFilteredProperties(propertiesData);
  }, []);

  useEffect(() => {
    // Apply filters to properties
    const filtered = properties.filter(property => {
      return (
        (filters.location === '' || property.location === filters.location) &&
        (filters.priceRange === '' || property.price <= parseInt(filters.priceRange)) &&
        (filters.bedrooms === '' || property.bedrooms >= parseInt(filters.bedrooms)) &&
        (filters.amenities.length === 0 || filters.amenities.every(amenity => property.amenities.includes(amenity)))
      );
    });
    setFilteredProperties(filtered);
  }, [properties, filters]);

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
  };

  return (
    <div className="property-listings">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="property-cards">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
