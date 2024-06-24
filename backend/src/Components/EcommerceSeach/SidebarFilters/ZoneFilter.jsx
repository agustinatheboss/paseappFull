import React from "react";

const ZoneFilter = ({ filters, setFilters }) => {
  const zones = ["CABA", "La Plata", "Avellaneda", "Quilmes", "Lomas de Zamora", "Almirante Brown", "Lanús", "Morón", "Tres de Febrero", "San Martín", "Tigre", "San Isidro", "Vicente López", "San Fernando", "San Miguel", "José C. Paz", "Malvinas Argentinas", "Pilar", "Escobar", "Berazategui", "Florencio Varela", "Esteban Echeverría", "Ezeiza", "Berisso"];

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

