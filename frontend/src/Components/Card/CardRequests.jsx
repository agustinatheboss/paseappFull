import { BsFillBagFill } from "react-icons/bs";
import './CardRequests.css'
import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ModalStatusService from "../ProductDetail/Modals/ModalStatusService";
import { updatePedido } from '../../services/requestAPI'; // Importa la función para obtener productos

const CardRequests = ({ request }) => {
    // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getEstadoStyles = (estado) => {
    switch (estado) {
        case "ACEPTADO":
            return {
                boxBorder: "1.5px solid #BBE479",
                circleColor: "#BBE479",
                backgroundColor: "#BBE479",
            };
        case "SOLICITADO":
            return {
                boxBorder: "1.5px solid #FEF3A6",
                circleColor: "#FEF3A6",
                backgroundColor: "#FEF3A6",
            };
        case "RECHAZADO":
            return {
                boxBorder: "1.5px solid orange",
                circleColor: "orange",
                backgroundColor: "orange",
            };
        default:
            return {
                boxBorder: "1.5px solid gray",
                circleColor: "gray",
            };
      }
  };
  const [status, setStatus] = useState('INACTIVO');
  const estadoStyles = getEstadoStyles(request.estadoPedido.tipoEstadoPedido.toUpperCase());

  const handleClick = () => {
    setIsModalOpen(true); // Abre el modal al hacer clic
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const handleFormRequest = async (formData) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', formData);
    try {
      // Llama a la función de actualización de pedido
      const updatedRequest = await updatePedido(request._id, formData);
      console.log('Pedido actualizado:', updatedRequest);
    } catch (error) {
        console.error('Error actualizando el pedido:', error);
    }

    closeModal();
    window.location.reload();

  };


  return (
    <>
      <section className="card" onClick={handleClick}>
        <div className="card-status">
          <div className="card-box-estado" style={{ border: estadoStyles.boxBorder, backgroundColor: estadoStyles.backgroundColor }}>
              <p className="card-estado-text">{request.estadoPedido.tipoEstadoPedido}</p>
          </div>
        </div>
        <h3 className="card-title request">{request.servicio.title}</h3>
        <h3 className="card-title gray request">{request.usuario.name} {request.usuario.lastname}</h3>
        <section className="card-details">
          <p className="request-description long">{request.motivo}</p>
          <p className="request-description"><b>Disponibilidad: </b> {request.horarioContacto}</p>
          <p className="request-description"><b>Telefono: </b>{request.usuario.phone}</p>
          <p className="request-description"><b>Mail: </b>{request.usuario.email}</p>
          <p className="request-description"><b>Precio:</b> $ {request.servicio.price}</p>
          
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
          request={request}
        />
      )}
    </>
  );
};

export default CardRequests;