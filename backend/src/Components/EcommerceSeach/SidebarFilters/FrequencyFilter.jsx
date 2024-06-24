import React from "react";

const FrequencyFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    const newFrequencies = filters.frequencies.includes(value)
      ? filters.frequencies.filter(v => v !== value)
      : [...filters.frequencies, value];
    setFilters('frequencies', newFrequencies);
  };

  return (
    <div className="filter frequency-filter">
      <h3>Frecuencia</h3>
      {['daily', 'weekly', 'monthly'].map(frequency => (
        <label key={frequency}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(frequency)}
            checked={filters.frequencies.includes(frequency)}
          />
          {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default FrequencyFilter;

