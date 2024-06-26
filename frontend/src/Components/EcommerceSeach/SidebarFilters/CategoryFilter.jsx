import React from "react";
import "../EcommerceSearch.css"; // Asegúrate de importar los estilos específicos para CategoryFilter

const CategoryFilter = ({ filters, setFilters }) => {
  const categories = ["sneakers", "flats", "sandals", "heels"]; // Agrega todas las categorías posibles

  const handleCategoryClick = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((cat) => cat !== category)
      : [...filters.categories, category];

    setFilters('categories',updatedCategories);
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
