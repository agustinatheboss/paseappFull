import { BsFillBagFill } from "react-icons/bs";
import './Card.css'
import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ModalStatusService from "../ProductDetail/Modals/ModalStatusService";

const CardRequests = ({ request }) => {
    // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getEstadoStyles = (estado) => {
    switch (estado) {
        case "ACTIVO":
            return {
                boxBorder: "1.5px solid #BBE479",
                circleColor: "#BBE479",
                backgroundColor: "#BBE479",
            };
        case "INACTIVO":
            return {
                boxBorder: "1.5px solid #FEF3A6",
                circleColor: "#FEF3A6",
                backgroundColor: "#FEF3A6",
            };
        case "PENDIENTE":
            return {
                boxBorder: "1.5px solid orange",
                circleColor: "orange",
            };
        default:
            return {
                boxBorder: "1.5px solid gray",
                circleColor: "gray",
            };
      }
  };
  const [status, setStatus] = useState('INACTIVO');
  const estadoStyles = getEstadoStyles(status);

  const handleClick = () => {
    setIsModalOpen(true); // Abre el modal al hacer clic
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const handleFormRequest = (formData) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', formData);
    closeModal(); // Cierra el modal después de enviar el formulario
  };



  return (
    <>
      <section className="card" onClick={handleClick}>
        <div className="card-status">
          <div className="card-box-estado" style={{ border: estadoStyles.boxBorder, backgroundColor: estadoStyles.backgroundColor }}>
              <p className="card-estado-text">{request.status}</p>
          </div>
        </div>
        <h3 className="card-title">{request.title}</h3>
        <h3 className="card-title">{request.user}</h3>
        <section className="card-details">
          <p className="service-description">{request.description}</p>
          <p className="service-description">{request.time}</p>
          <p className="service-description">{request.phone}</p>
          <p className="service-description">{request.email}</p>
          <p className="service-description">{request.price}</p>
          
        </section>
        

      {/*

        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div> */}
      </section>
      {isModalOpen && (
        <ModalStatusService
          isOpen={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleFormRequest}
        />
      )}
    </>
  );
};

export default CardRequests;