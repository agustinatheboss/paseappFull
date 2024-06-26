import React, { useState, useEffect } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import "./ProductDetail.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import imgpaseador from "../../images/about-petsitter.png";
import Comment from "./Comment";
import { IoIosClose } from "react-icons/io";
import PetsButton from "../Buttons/PetsButton";
import ModalRequestService from "./Modals/ModalRequestService";
import ModalStatusService from "./Modals/ModalStatusService";
import ModalReviewService from "./Modals/ModalReviewService";
import AlternativeButton from "../Buttons/AlternativeButton";
import serviceAPI from '../../services/serviceAPI';


const ProductDetail = ({ match }) => {
    // Display color according STATUS
    const [product, setProduct] = useState(null);
    const [estado, setEstado] = useState("ACTIVO"); 
{/*
    const productId = match.params.id;

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const data = await getServicioById(productId);
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
        };
        fetchProduct();
    }, [productId]);

    const handleSave = async () => {
        try {
          await updateServicio(productId, product);
          setEditable(false);
        } catch (error) {
          console.error('Error updating product:', error);
        }
    };
    
    const handleDelete = async () => {
        try {
          await deleteServicio(productId);
          // Redirige o maneja el estado después de eliminar
        } catch (error) {
          console.error('Error deleting product:', error);
        }
    }; */}

    const getEstadoStyles = (estado) => {
        switch (estado) {
            case "ACTIVO":
                return {
                    boxBorder: "1.5px solid #0FEC5C",
                    circleColor: "#0FEC5C",
                };
            case "INACTIVO":
                return {
                    boxBorder: "1.5px solid #FE2400",
                    circleColor: "#FE2400",
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

    const estadoStyles = getEstadoStyles(estado);

    // Handle onClick close product
    const handleIconClick = () => {
        // Define la acción que deseas realizar al hacer clic en el icono
        console.log("Icono de cierre clicado");
    };

    // Switch view to edit
    const [editable, setEditable] = useState(false);
    const toggleEdit = () => {
        setEditable(!editable);
    };

    const showField = () => {
        setEditable(!editable);
    };

    // Options Edit Checkbox
    const animatedComponents = makeAnimated();
    const freq = [
        { value: 'diaria', label: 'Diaria' },
        { value: 'semanal', label: 'Semanal' },
        { value: 'mensual', label: 'Mensual' }
    ]
    const zone = [
        { value: 'bsas', label: 'Buenos Aires' },
        { value: 'cordoba', label: 'Cordoba' },
        { value: 'tucuman', label: 'Tucuman' }
    ]
    const cat = [
        { value: 'adiestramiento', label: 'Adiestramiento' },
        { value: 'paseo', label: 'Paseo' },
        { value: 'cuidado', label: 'Cuidado' }
    ]
    const time = [
        { value: '1-2hs', label: '1 - 2 hs' },
        { value: 'dia', label: '1 dia' },
        { value: 'semana', label: '1 semana' }
    ]

    const status = [
        { value: 'activo', label: 'ACTIVO' },
        { value: 'inactivo', label: 'INACTIVO' },
        { value: 'pendiente', label: 'PENDIENTE' }
    ]

    //Pets button on Edit
    const [selectedButtons, setSelectedButtons] = useState({
        Perro: false,
        Gato: false,
    });

    const handleButtonClick = (item) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };

    const selectedItems = Object.keys(selectedButtons).filter(key => selectedButtons[key]);  //evuelve la clave de los valores true (seleccioandos)

    // Modal Solicitud de Servicio
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // 'request' or 'status'

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    const handleFormRequest = (formData) => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log('Datos del formulario:', formData);
        closeModal(); // Cierra el modal después de enviar el formulario
    };

    if (!product) return <div>Loading...</div>;

    return ( 
        <div className="product-container">
            <IoIosClose className="close-icon" onClick={handleIconClick} size={30}/>
            <div className="important-info">
            <main className="product-detail">
                {/*<section className="pet-details">
                    <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
                    <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
                </section> */}
                <section className="pet-details">
                    {/*<h3 className="product-subtitle">Mascotas</h3> */}
                    {editable ? (
                        <>
                            <PetsButton 
                                item="Perro" 
                                selected={selectedButtons.Perro} 
                                onClick={() => handleButtonClick("Perro")}
                            />
                            <PetsButton 
                                item="Gato" 
                                selected={selectedButtons.Gato} 
                                onClick={() => handleButtonClick("Gato")}
                            />
                        </>
                    ) : (
                        <>
                            <h3 className="product-subtitle">Mascotas</h3>
                            <PetsButton 
                                item="Perro" 
                                selected={selectedButtons.Perro} 
                            />
                            <PetsButton 
                                item="Gato" 
                                selected={selectedButtons.Gato} 
                            />
                        </>
                    )}
                </section>
                {editable ? (
                    <input type="text" defaultValue="" placeholder="Editable Field 1" className="product-edit-fields" maxLength={100}/>  // Placeholder if new, default if edit
                ) : (
                    <h2 className="product-title">Paseo extensivo de mascotas</h2>
                )}
                {/*<h2 className="product-title">Paseo extensivo de mascotas</h2> */}
                <div className="reviews">
                    <p>4.2</p>
                    <StarRating rating = {1.2}/>
                    <p>(433 resenas)</p>
                </div>
                {editable ? (
                    <textarea type="text" defaultValue="" placeholder="Editable Field 1" className="product-edit-fields" maxLength={1000} rows={6}/>  // Placeholder if new, default if edit
                ) : (
                    <p className="product-description">
                    DESCRIPCION del servicio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                )}
                

                <h3 className="product-subtitle">Caracteristicas servicio</h3>
                <div className="product-info-table">
                    <div className="row-b">
                        <div className="product-column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">Frecuencia</p>
                                {editable ? (
                                    <div className="product-characteristic-text">
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={freq}
                                            placeholder={"Selecciona la frecuencia"}
                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">caracteristica</p>
                                )}
                                
                                
                                
                            </div>
                        </div>
                        <div className="product-column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">Categoria</p>
                                {editable ? (
                                    <div className="product-characteristic-text">
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={cat}
                                            placeholder={"Selecciona la categoria"}
                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">caracteristica</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row-b">
                        <div className="product-column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">Zona</p>
                                {editable ? (
                                    <div className="product-characteristic-text">
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={zone}
                                            placeholder={"Selecciona la zona"}
                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">caracteristica</p>
                                )}
                            </div>
                        </div>
                        <div className="product-column-b">
                            <div className="line-vertical"></div>
                            <div className="characteristic-content">
                                <p className="product-characteristic">Duracion</p>
                                {editable ? (
                                    <div className="product-characteristic-text">
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={time}
                                            placeholder={"Selecciona la duracion"}
                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">caracteristica</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <aside className="product-action">
                <div className="product-state">
                    <p className="estado">Estado</p>
                    {editable ? (
                        <div className="product-characteristic-text">
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={"INACTIVO"}
                                options={status}
                                placeholder={"Selecciona estado"}
                            />
                        </div>
                    ) : (
                        <div className="box-estado" style={{ border: estadoStyles.boxBorder }}>
                            <div className="circle" style={{ backgroundColor: estadoStyles.circleColor }}></div>
                            <p className="estado-text">{estado}</p>
                        </div>
                    )}
                    
                </div>
                <div className="price-section">
                    <p className="precio">Precio</p>
                    {editable ? (
                        <input type="number" defaultValue="" placeholder="$XX.XXX" className="product-edit-fields-number" maxLength={10}/>  // Placeholder if new, default if edit
                    ) : (
                        <p className="valor-precio">$10.000</p>
                    )}
                </div>
                <div className="product-petsitter">
                    <p className="petsitter">Servicio ofrecido por</p>
                    <p className="petsitter petsitter-user">USUARIO XXYY</p>

                </div>
                {modalType === 'review' && (
                    <ModalReviewService
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        handleSubmit={handleFormRequest}
                    />
                )}
                {modalType === 'request' && (
                    <ModalRequestService
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        handleSubmit={handleFormRequest}
                    />
                )}
                {editable ? (
                    <>
                        <PrimaryButton value={"GUARDAR"} onClick={""}/>
                        <AlternativeButton value={"CANCELAR"} onClick={""}/>
                    </>
                ) : (
                    <>
                        <PrimaryButton value={"SOLICITAR"} onClick={() => openModal('review')} />
                        <AlternativeButton value={"CANCELAR"} onClick={""}/>
                    </>
                    
                )}
                
                
                
            </aside>
            </div>
            <section className="about-petsitter">
                <img src={ imgpaseador } alt="" />
                <div className="info-petsitter">
                    <h3 className="about">Acerca de PEPITO</h3>
                    <p className="about">DESCRIPCION del servicio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
            </section>
            <h3 className="product-subtitle">Comentarios</h3>
            <Comment user={"NICO"} stars={4.2} text={"LOLOLO"} pending={true}/>
            <Comment user={"NICOSSSS"} stars={4.2} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"} pending={false}/>


        </div>
    );
}
 
export default ProductDetail;