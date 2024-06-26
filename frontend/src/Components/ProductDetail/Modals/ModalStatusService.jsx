import React, { useState, useEffect } from 'react';
import './Modals.css';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from '../../Buttons/PrimaryButton';
import AlternativeButton from '../../Buttons/AlternativeButton';

const ModalStatusService = ({ isOpen, closeModal, handleSubmit, request }) => {
    const [currentStatus, setCurrentStatus] = useState('');
    const [tempStatus, setTempStatus] = useState('');

    // Actualiza el estado inicial cuando el componente se monta o cuando la request cambia
    useEffect(() => {
        if (request && request.estadoPedido) {
            setCurrentStatus(request.estadoPedido.tipoEstadoPedido);
            setTempStatus(request.estadoPedido.tipoEstadoPedido);
            console.log(currentStatus);
        }
    }, [request]);

    const handleStatusChange = (newStatus) => {
        setTempStatus(newStatus);
    };

    const handleFormSubmit = () => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        const formData = {
            estadoPedido: { tipoEstadoPedido: tempStatus }
        };
        setCurrentStatus(tempStatus); // Actualiza el estado actual solo cuando se guarda
        handleSubmit(formData);
    };

    if (!isOpen) return null;

    const getButtonDisabledStatus = (status, newStatus) => {
        if (status === 'SOLICITADO') {
            return !(newStatus === 'ACEPTADO' || newStatus === 'RECHAZADO' || newStatus === 'SOLICITADO');
        } else if (status === 'ACEPTADO') {
            return !(newStatus === 'FINALIZADO' || newStatus === 'ACEPTADO');
        } else if (status === 'FINALIZADO') {
            return !(newStatus === 'FINALIZADO');
        } else if (status === 'RECHAZADO') {
            return !(newStatus === 'RECHAZADO');
        } 
        return false;
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Solicitud de Servicio"
            className="modal"
            overlayClassName="overlay"
        >
        <div className="modal-overlay">
            <div className="modal-content">
                <IoIosClose className="close-icon" onClick={closeModal} size={24}/>
                <h2 className="modal-title">{request.servicio.title}</h2>
                <div className="modal-body">
                    <div className="modal-info">
                        <div className="modal-row">
                            <div className="modal-column">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Horario</p>
                                    <p className="product-characteristic-text">{request.horarioContacto}</p>
                                </div>
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Precio</p>
                                    <p className="product-characteristic-text">$ {request.servicio.price}</p>
                                </div>
                            </div>
                            <div className="modal-column">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Telefono</p>
                                    <p className="product-characteristic-text">{request.usuario.email}</p>
                                </div>
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Mail</p>
                                    <p className="product-characteristic-text">{request.usuario.email}</p>
                                </div>
                            </div>
                            <div className="modal-column-b">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Descripcion</p>
                                    <p className="product-characteristic-text">{request.motivo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-status">
                        <p className="product-characteristic">Actualizá el estado de la solicitud</p>
                        <div className="status-buttons">
                            {['SOLICITADO', 'ACEPTADO', 'FINALIZADO', 'RECHAZADO'].map((s) => (
                                <button 
                                    key={s} 
                                    className={`status-button ${tempStatus === s ? 'active' : ''}`} 
                                    onClick={() => handleStatusChange(s)}
                                    disabled={getButtonDisabledStatus(currentStatus, s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> 
                <div className="modal-footer">
                    <AlternativeButton value={"CANCELAR"} onClick={closeModal} />
                    <PrimaryButton value={"GUARDAR"} onClick={handleFormSubmit} />
                    {/*<button className="cancel-button" onClick={closeModal}>CANCELAR</button>
                    <button className="save-button" onClick={handleFormSubmit}>GUARDAR</button> */}
                </div>
            </div>
        </div>
                        

                        {/*
                        <div className="modal-column">
                            <p><strong>Solicitante:</strong> NOMBRE USUARIO</p>
                            <p><strong>Horario:</strong> Horario elegido</p>
                            <p><strong>Precio:</strong> $ 10.000</p>
                        </div>
                        <div className="modal-column">
                            <p><strong>Telefono:</strong> (XX) XXXX-XXXX</p>
                            <p><strong>Mail:</strong> XXXXXXXX@gmail.com</p>
                            <p><strong>Mensaje del usuario:</strong> MENSAJE DEL USUARIO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className="modal-status">
                        <p>Actualizá el estado de la solicitud</p>
                        <div className="status-buttons">
                            {['SOLICITADO', 'ACEPTADO', 'FINALIZADO', 'RECHAZADO'].map((s) => (
                                <button 
                                    key={s} 
                                    className={`status-button ${status === s ? 'active' : ''}`} 
                                    onClick={() => handleStatusChange(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div> */}
                    
        </Modal>
    );
};

export default ModalStatusService;
