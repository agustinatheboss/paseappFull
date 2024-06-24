import React, { useState } from 'react';
import './Modals.css';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from '../../Buttons/PrimaryButton';
import AlternativeButton from '../../Buttons/AlternativeButton';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ModalRequestService = ({ isOpen, closeModal, handleSubmit }) => {
    const [timeProgramming, setTimeProgramming] = useState('');
    const [comment, setComment] = useState('');


    const handleFormSubmit = () => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        const formData = {
            time: timeProgramming, // Incluir la puntuación en los datos a enviar
            comment: comment  // Incluir el comentario en los datos a enviar
        };
        handleSubmit(formData);
    };

    if (!isOpen) return null;

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
                    <h2 className="modal-title">NOMBRE SERVICIO</h2>
                    <div className="modal-body">
                        <div className="modal-info">
                            <div className="modal-row">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Horario de contacto</p>
                                    <input type="text" defaultValue="" placeholder="" className="product-edit-fields" maxLength={100} onChange={(e) => setTimeProgramming(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-row">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Motivo</p>
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Dejale un mensaje al paseador sobre tus intereses en el servicio."
                                        className="product-edit-fields"
                                        maxLength={1000}
                                        rows={6}
                                    />
                                </div>
                            </div>   
                        </div>
                    </div>
                    <p className="product-characteristic">Se enviará tambien la información del perfil, incluidos teléfono y mail</p>

                    <div className="modal-footer">
                        <AlternativeButton value={"CANCELAR"} onClick={closeModal} />
                        <PrimaryButton value={"GUARDAR"} onClick={handleFormSubmit} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalRequestService;
