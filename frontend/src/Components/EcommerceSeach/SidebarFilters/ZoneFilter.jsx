import React from "react";

const ZoneFilter = ({ filters, setFilters }) => {
  const zones = ["Palermo", "Recoleta", "Belgrano", "Villa Urquiza", "Caballito", "San Telmo", "Villa Devoto", "Almagro", "Flores", "Boedo"];

  const handleCheckboxChange = (value) => {
    const newZones = filters.zones.includes(value)
      ? filters.zones.filter(v => v !== value)
      : [...filters.zones, value];
    setFilters('zones', newZones);
  };

  return (
    <div className="filter zone-filter">
      <h3>Zona</h3>
      {zones.map(zone => (
        <label key={zone}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(zone)}
            checked={filters.zones.includes(zone)}
          />
          {zone}
        </label>
      ))}
    </div>
  );
};

export default ZoneFilter;

