// src/components/StarRating.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingInput = ({ rating, onRatingChange }) => {
    const [hoverValue, setHoverValue] = useState(0);
    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    };

    const handleMouseOverStar = value => {
        setHoverValue(value);
    };
    
    const handleMouseLeaveStar = () => {
        setHoverValue(0);
    };

    const handleClickStar = value => {
        onRatingChange(value);
        setHoverValue(0);
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <FaStar
                        key={index}
                        size={24}
                        color={(hoverValue > index || rating > index) ? colors.orange : colors.grey}
                        onMouseOver={() => handleMouseOverStar(starValue)}
                        onMouseLeave={handleMouseLeaveStar}
                        onClick={() => handleClickStar(starValue)}
                    />
                );
            })}
        </div>
    );
};

export default StarRatingInput;
