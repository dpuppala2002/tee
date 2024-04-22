import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleFilterChange = (type, e) => {
    onFilterChange(type, e.target.value);
  };

  return (
    <div className="filter-bar">
      <label>
        Location:
        <input
          type="text"
          value={filters.location}
          onChange={e => handleFilterChange('location', e)}
        />
      </label>
      {/* Add more filter options as needed */}
    </div>
  );
};

export default FilterBar;
