import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
import { getServicioById, updateServicio, deleteServicio, createServicio } from '../../services/serviceAPI';
import { createPedido, getPedidosByUsuarioId } from '../../services/requestAPI';
import { useNavigate } from 'react-router-dom';



const ProductDetail = () => {
    //{ match }
    // Display color according STATUS
    const [product, setProduct] = useState(null);
    const [estado, setEstado] = useState("ACTIVO"); 
    const [user, setUser] = useState(null); // Estado para almacenar el usuario
    const [pedidos, setPedidos] = useState([]);

    //Pets button on Edit
    const [selectedButtons, setSelectedButtons] = useState({
        Perro: false,
        Gato: false,
        Peces: false,
    });

    // Modal Solicitud de Servicio
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // 'request' or 'status'

    // Switch view to edit
    const [editable, setEditable] = useState(false);


    useEffect(() => {
        const fetchUser = async () => {
            const userData = sessionStorage.getItem("user");
            setUser(userData ? JSON.parse(userData) : null);
        };
        fetchUser();
    }, []); // Se ejecuta una vez al montar el componente

    //const productId = match.params.id;
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const loadProduct = async () => {
            if (id === "new") {
                // Cargar valores predeterminados para un nuevo producto
                setProduct({
                    // Define los valores predeterminados aquí
                    calification: 0,
                    petsitter: user,
                    comments: [],
                    petType: []
                    // Otros campos predeterminados
                });
                console.log("Entre aca", product);
                setEditable(true); // Modo edición para un nuevo producto
            } else {
                // Cargar el producto existente para edición
                try {
                    const data = await getServicioById(id);
                    setProduct(data);
                    setEditable(false); // Modo visualización para un producto existente
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                    // Manejo de errores
                }
            }
        };

        loadProduct();
    }, [id]); // Se ejecuta cada vez que cambia el id

    const fetchPedidosUsuario = async () => {
        try {
            const data = await getPedidosByUsuarioId(user._id);
            setPedidos(data); // Aquí asumo que data contiene un array de pedidos del usuario
        } catch (error) {
            console.error('Error fetching user orders:', error);
        }
    };

    useEffect(() => {
        fetchPedidosUsuario();
    }, []); // Cargar los pedidos al montar el componente o cuando el usuario cambie

    const getServiceStatusFromPedido = (servicioId) => {
        // Iterar sobre los pedidos para encontrar el servicio
        for (let i = 0; i < pedidos.length; i++) {
            const pedido = pedidos[i];
            console.log("Pedido servicio", pedido.servicios);
            // Buscar el servicio dentro de este pedido que coincida con servicioId
            const servicioEnPedido = pedido.servicios.find(servicio => servicio._id === servicioId);
            if (servicioEnPedido) {
                return pedido.estadoPedido.tipoEstadoPedido; // Devolver el serviceStatus si se encuentra
            }
        }
        return null; // Devolver null si no se encuentra el servicio
    };

    // Lógica para determinar el estado del servicio actual
    const determineServiceState = () => {
        const serviceId = id; // Suponiendo que tienes acceso al ID del servicio actual
        const serviceStatus = getServiceStatusFromPedido(serviceId);

        if (serviceStatus === 'FINALIZADO') {
            // Estado CONCLUIDO: Mostrar botón CALIFICAR
            return (
                <PrimaryButton value={"CALIFICAR"} onClick={() => openModal('review')} />
            );
        } else if (serviceStatus === 'ACEPTADO' || serviceStatus === 'SOLICITADO') {
            // Estado ACEPTADO: Mostrar botón deshabilitado
            return (
                <PrimaryButton value={"YA SOLICITADO"} disabled />
            );
        } else {
            // Otros estados: Mostrar botón SOLICITAR
            return (
                <PrimaryButton value={"SOLICITAR"} onClick={() => openModal('request')} />
            );
        }
    };

    const fetchProductById = async (id) => {
        try {
            const data = await getServicioById(id);
            setProduct(data);
            setEditable(false); // Establece editable a false para modo de visualización normal
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
/*
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
    }, [productId]); */

    const handleSave = async () => {
        try {
            {id === "new" ? await createServicio(product) : await updateServicio(id, product);}
            console.log(product);
            setEditable(false);
        } catch (error) {
          console.error('Error updating product:', error);
        }
    };
    
    const handleDelete = async () => {
        try {
          await deleteServicio(id);
          // Redirige o maneja el estado después de eliminar
        } catch (error) {
          console.error('Error deleting product:', error);
        }
    };

    const handleCancel = () => {
        if (id === "new") {
            // Redirige o maneja la cancelación cuando estás creando un nuevo servicio
            navigate('/'); // Ejemplo de redirección a la página principal
        } else {
            setEditable(false); // Desactiva el modo de edición para un servicio existente
        }
    };

    if (!product || !user) return <div>Loading...</div>;

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

    const estadoStyles = getEstadoStyles(product.serviceStatus?.tipoEstadoServicio || "default");

    // Handle onClick close product
    const handleIconClick = () => {
        // Define la acción que deseas realizar al hacer clic en el icono
        console.log("Icono de cierre clicado");
        navigate('/');
    };

    
    const toggleEdit = () => {
        setEditable(!editable);
    };

    const showField = () => {
        setEditable(!editable);
    };

    // Options Edit Checkbox
    const animatedComponents = makeAnimated();
    const freq = [
        { value: 'Única', label: 'Única' },
        { value: 'Diaria', label: 'Diaria' },
        { value: 'Semanal', label: 'Semanal' },
        { value: 'Mensual', label: 'Mensual' },
    ]
    const zone = [
        { value: 'Palermo', label: 'Palermo' },
        { value: 'Recoleta', label: 'Recoleta' },
        { value: 'Belgrano', label: 'Belgrano' },
        { value: 'Villa Urquiza', label: 'Villa Urquiza' },
        { value: 'Caballito', label: 'Caballito' },
        { value: 'San Telmo', label: 'San Telmo' },
        { value: 'Villa Devoto', label: 'Villa Devoto' },
        { value: 'Almagro', label: 'Almagro' },
        { value: 'Flores', label: 'Flores' },
        { value: 'Boedo', label: 'Boedo' }
    ]
    const cat = [
        { value: 'Adiestramiento', label: 'Adiestramiento' },
        { value: 'Cuidado Doméstico', label: 'Cuidado Doméstico' },
        { value: 'Paseos', label: 'Paseos' }
    ]
    const time = [
        { value: '1-2hs', label: '1 - 2 hs' },
        { value: 'dia', label: '1 dia' },
        { value: 'semana', label: '1 semana' }
    ]

    const statusOpt = [
        { value: 'ACTIVO', label: 'ACTIVO' },
        { value: 'ACTIVO', label: 'INACTIVO' }
    ]

    

    const handleButtonClick = (item) => {
        {/*
        setSelectedButtons(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        })); */}
        setSelectedButtons(prevState => {
            const newState = {
                ...prevState,
                [item]: !prevState[item]
            };
    
            // Extrae las mascotas seleccionadas
            const selectedPets = Object.keys(newState).filter(key => newState[key]);
    
            console.log('Selected Pets:', selectedPets);

            // Actualizar el estado product.pets
            setProduct(prevProduct => ({
                ...prevProduct,
                pets: selectedPets
            }));
            console.log(product)
    
            return newState;
        });
    };

    const selectedItems = Object.keys(selectedButtons).filter(key => selectedButtons[key]);  //evuelve la clave de los valores true (seleccioandos)

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    const handleFormRequest = async (formData) => {
        try {
            const response = await createPedido(formData);
            console.log('Datos del pedido API:', response);
        } catch (error) {
            console.error('Error sending service request:', error);
        }
        closeModal();
    };

    // Formato fechas
    function formatDate(isoDateString) {
        // Crear un objeto Date a partir de la cadena de fecha y hora
        const date = new Date(isoDateString);
        
        // Extraer el día, mes y año
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
        const year = date.getUTCFullYear();
        
        // Formatear la fecha en dd/mm/yyyy
        const formattedDate = `${day}/${month}/${year}`;
        
        return formattedDate;
    }


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
                            <PetsButton 
                                item="Peces" 
                                selected={selectedButtons.Peces} 
                                onClick={() => handleButtonClick("Peces")}
                            />
                        </>
                    ) : (
                        <>
                            <h3 className="product-subtitle">Mascotas</h3>
                            <PetsButton
                                    key={product.petType._id.$oid} // Asegúrate de tener un key único
                                    item={product.petType.nombre} // Usa el nombre de la mascota
                                    selected={selectedButtons[`.${product.petType.nombre}`]}
                                />
                            {/* Hay que acomodarlo para que sea un map */}
                            {/*
                            {product.petType.map(pet => (
                                <PetsButton
                                    key={pet._id.$oid} // Asegúrate de tener un key único
                                    item={pet.nombre} // Usa el nombre de la mascota
                                    selected={selectedButtons[`.${pet.nombre}`]}
                                />
                            ))} */}
                        </>
                    )}
                </section>
                {editable ? (
                    <input type="text" defaultValue="" value={product.title}     onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    placeholder="Nombre del Servicio" className="product-edit-fields" maxLength={100}/>  // Placeholder if new, default if edit
                ) : (
                    <h2 className="product-title">{product.title}</h2>
                )}
                {/*<h2 className="product-title">Paseo extensivo de mascotas</h2> */}
                <div className="reviews">
                    <p>{id==="new" ? "-" : product.calification.numeroCalificacion}</p>
                    {id==="new" ? <StarRating rating = {0}/> : <StarRating rating = {product.calification.numeroCalificacion}/>}
                    {id==="new" ? <p>(sin reseñas)</p> : <p>({product.comments.length} reseñas)</p> }
                    
                </div>
                {editable ? (
                    <textarea type="text" defaultValue="" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    placeholder="Coloca información que ayude a los usuarios a conocer mejor el servicio que tenes para ofrecer" className="product-edit-fields" maxLength={1000} rows={6}/>  // Placeholder if new, default if edit
                ) : (
                    <p className="product-description">{product.description}</p>
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
                                            value={product.frequencyType?.descripcionFrequencia}
                                            onChange={(e) => setProduct({ ...product, frequencyType: { ...product.frequencyType, descripcionFrequencia: e.value } })}

                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">{product.frequencyType.descripcionFrecuencia}</p>
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
                                            value={product.serviceCategory?.nombreCategoria}
                                            onChange={(e) => setProduct({ ...product, serviceCategory: { ...product.serviceCategory, nombreCategoria: e.value } })}

                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">{product.serviceCategory?.nombreCategoria}</p>
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
                                            value={product.zone?.nombreZona}
                                            onChange={(e) => setProduct({ ...product, zone: { ...product.zone, nombreZona: e.value } })}

                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">{product.zone?.nombreZona}</p>
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
                                            value={product.time}
                                            onChange={(e) => setProduct({ ...product, time: e.value })}
                                        />
                                    </div>
                                ) : (
                                    <p className="product-characteristic-text">{formatDate(product.startDate)} - {formatDate(product.endDate)}</p>
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
                                //defaultValue={"inactivo"}
                                options={statusOpt}
                                placeholder={"Selecciona estado"}
                                value={product.serviceStatus?.tipoEstadoServicio}
                                onChange={(e) => setProduct({ ...product, serviceStatus: { ...product.serviceStatus, tipoEstadoServicio: e.value } })}

                            />
                        </div>
                    ) : (
                        <div className="box-estado" style={{ border: estadoStyles.boxBorder }}>
                            <div className="circle" style={{ backgroundColor: estadoStyles.circleColor }}></div>
                            <p className="estado-text">{product.serviceStatus?.tipoEstadoServicio}</p>
                        </div>
                    )}
                    
                </div>
                <div className="price-section">
                    <p className="precio">Precio</p>
                    {editable ? (
                        <input type="number" defaultValue="" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="$XX.XXX" className="product-edit-fields-number" maxLength={10}/>  // Placeholder if new, default if edit
                    ) : (
                        <p className="valor-precio">$ {product.price}</p>
                    )}
                </div>
                <div className="product-petsitter">
                    <p className="petsitter">Servicio ofrecido por</p>
                    <p className="petsitter petsitter-user">{id==="new" ? `${user.name} ${user.lastname}`.toUpperCase() : `${product.petsitter.name} ${product.petsitter.lastname}`.toUpperCase()}</p>

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
                        user={user}
                        product={product}
                    />
                )}
                {editable ? (
                    <>
                        <PrimaryButton value={"GUARDAR"} onClick={handleSave}/>
                        <AlternativeButton value={"CANCELAR"} onClick={""}/>
                    </>
                ) : (
                    <>
                        {/*<PrimaryButton value={"SOLICITAR"} onClick={() => openModal('request')} /> */}
                        {determineServiceState()}
                        <AlternativeButton value={"CANCELAR"} onClick={""}/>
                    </>
                    
                )}
                
                
                
            </aside>
            </div>
            <section className="about-petsitter">
                <img src={ imgpaseador } alt="" />
                <div className="info-petsitter">
                    <h3 className="about">Acerca de {id==="new" ? `${user.name} ${user.lastname}`.toUpperCase() : `${product.petsitter.name} ${product.petsitter.lastname}`.toUpperCase()}</h3>
                    <p className="about">{id==="new" ? user.profileDescription : product.petsitter.profileDescription}</p>
                </div>
            </section>
            <h3 className="product-subtitle">Comentarios</h3>
                {product.comments && product.comments.length > 0 ? (
                    product.comments.map((comment, index) => (
                        <Comment
                            key={index}
                            user={comment.usuario.name}
                            stars={comment.calificacion.numeroCalificacion}
                            text={comment.descripcion}
                            pending={comment.estadoComentario}
                        />
                    ))
                ) : (
                    <p>No hay comentarios aún.</p>
                )}
{/*
            <Comment user={"NICO"} stars={4.2} text={"LOLOLO"} pending={true}/>
            <Comment user={"NICOSSSS"} stars={4.2} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"} pending={false}/>
*/}

        </div>
    );
}
 
export default ProductDetail;