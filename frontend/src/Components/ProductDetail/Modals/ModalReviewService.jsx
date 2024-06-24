import React, { useState } from 'react';
import './Modals.css';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from '../../Buttons/PrimaryButton';
import AlternativeButton from '../../Buttons/AlternativeButton';
import { FaStar, FaRegStar } from 'react-icons/fa';
import StarRatingInput from '../../StarRating/StarRatingInput';

const ModalReviewService = ({ isOpen, closeModal, handleSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleFormSubmit = () => {
        const formData = {
            rating: rating,
            comment: comment
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
                                    <p className="product-characteristic">¿Cómo estuvo el servicio?</p>
                                    {/* Usa el componente StarRating */}
                                    <StarRatingInput rating={rating} onRatingChange={setRating} />
                                </div>
                            </div>
                            <div className="modal-row">
                                <div className="characteristic-content">
                                    <p className="product-characteristic">Comentarios</p>
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Deja aquí un comentario sobre el servicio."
                                        className="product-edit-fields"
                                        maxLength={1000}
                                        rows={6}
                                    />
                                </div>
                            </div>   
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <AlternativeButton value={"CANCELAR"} onClick={closeModal} />
                        <PrimaryButton value={"GUARDAR"} onClick={handleFormSubmit} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalReviewService;