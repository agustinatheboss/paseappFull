// src/components/CategoryFilter.js

import React from "react";
import "../EcommerceSearch.css"; // Importa estilos específicos para CategoryFilter

const CategoryFilter = ({ filters, setFilters }) => {
  const categories = ["Sneakers", "Flats", "Sandals"]; // Ejemplo de categorías

  const handleCategoryClick = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((cat) => cat !== category)
      : [...filters.categories, category];

    setFilters({ ...filters, categories: updatedCategories });
  };

  return (
    <div className="filter category-filter">
      <h3>Categoría</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${filters.categories.includes(category) ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;



