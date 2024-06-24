import React from "react";

const PetTypeFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    const newPetTypes = filters.petTypes.includes(value)
      ? filters.petTypes.filter(v => v !== value)
      : [...filters.petTypes, value];
    setFilters('petTypes', newPetTypes);
  };

  return (
    <div className="filter pet-type-filter">
      <h3>Tipo de Mascota</h3>
      {['dog', 'cat'].map(petType => (
        <label key={petType}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(petType)}
            checked={filters.petTypes.includes(petType)}
          />
          {petType.charAt(0).toUpperCase() + petType.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default PetTypeFilter;

