// src/components/RatingFilter.js

import React from "react";
import StarRatingInput from "../../StarRating/StarRatingInput";

const RatingFilter = ({ filters, setFilters }) => {
  const handleRatingChange = (rating) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      rating: rating === prevFilters.rating ? 0 : rating // Toggle para desmarcar si ya estaba seleccionado
    }));
  };

  return (
    <div className="filter rating-filter">
      <h3>Rating</h3>
      <StarRatingInput rating={filters.rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default RatingFilter;
