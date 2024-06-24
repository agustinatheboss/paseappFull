import React from "react";

const DateRangeFilter = ({ filters, setFilters }) => {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newDateRange = { ...filters.dateRange, [name]: value };
    setFilters('dateRange', newDateRange);
  };

  return (
    <div className="filter date-range-filter">
      <h3>Rango de Fecha</h3>
      <label>
        Desde
        <input
          type="date"
          name="start"
          value={filters.dateRange.start}
          onChange={handleDateChange}
        />
      </label>
      <label>
        Hasta
        <input
          type="date"
          name="end"
          value={filters.dateRange.end}
          onChange={handleDateChange}
        />
      </label>
    </div>
  );
};

export default DateRangeFilter;

