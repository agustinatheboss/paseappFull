import React from "react";
import "../../EcommerceSeach/EcommerceSearch.css"; // Asegúrate de importar los estilos específicos para CategoryFilter

const StatusFilter = ({ filters, setFilters }) => {
  const categories = ["sneakers", "flats", "sandals", "heels"]; // Agrega todas las categorías posibles

  // Asegúrate de que filters.categories esté definido
  if (!filters || !filters.categories) {
    console.error('filters or filters.categories is undefined');
    return null; // o puedes devolver un loader o algún otro componente de fallback
  }

  const handleCategoryClick = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((cat) => cat !== category)
      : [...filters.categories, category];

    setFilters('categories', updatedCategories);
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

export default StatusFilter;
