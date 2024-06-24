import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './StarRating.css'; // Archivo CSS para estilos de estrellas

const StarRating = ({ rating }) => {
    // Asegura que el puntaje esté dentro del rango de 0 a 5
    const normalizedRating = Math.min(Math.max(rating, 0), 5);
    // Calcula el número de estrellas llenas
    const fullStars = Math.floor(normalizedRating);
    // Calcula si hay una estrella parcial
    const hasPartialStar = normalizedRating % 1 !== 0;

    // Renderiza las estrellas
    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} className="star full" />
            ))}
            {hasPartialStar && <FaStarHalfAlt key="partial" className="star partial" />}
            {[...Array(5 - fullStars - (hasPartialStar ? 1 : 0))].map((_, index) => (
                <FaRegStar key={index} className="star empty" />
            ))}
        </div>
    );
};

export default StarRating;

