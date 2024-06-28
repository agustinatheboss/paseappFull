import { Carousel } from 'primereact/carousel';
import SectionHeader from '../SectionHeader';
import Card from '../../Card/Card';
import './ServicesInfo.css';
//import data from '../../../db/data';
import { useNavigate } from 'react-router-dom';
import { getServicioByProveedor } from '../../../services/serviceAPI';
import { getPedidosByUsuarioId } from '../../../services/requestAPI';
import React, { useState, useEffect } from "react";


// responsiveOptions={responsiveOptions}

const ServicesInfo = ({ isPetsitter }) => {
    const [products, setProducts] = useState([]);
    const user = sessionStorage.getItem("user");
    const userSession = JSON.parse(user);
    const userType = sessionStorage.getItem("userType");
    console.log("User en service products", userSession);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let servicios;
                if (userType==="paseador") {
                    const data = await getServicioByProveedor(userSession._id);
                    servicios = data; // Asumiendo que data ya contiene solo los servicios
                } else {
                    const data = await getPedidosByUsuarioId(userSession._id);
                    servicios = data.map(pedido => pedido.servicio); // Asumiendo que data contiene la propiedad 'servicio' con los pedidos
                }
                console.log(servicios);
                setProducts(servicios);
            } catch (error) {
                console.error('Error fetching products or orders:', error);
            }
        };
    
        fetchProducts();
    }, [isPetsitter, userSession._id]);
    

    const navigate = useNavigate();

    const handleNewButtonClick = () => {
        // Aquí puedes definir los campos predeterminados que deseas pasar a la página de edición
        const defaultValues = {
            title: "Nombre del servicio",
            description: "Escribe aca una descripcion de tu servicio",
            price: "XX.XXX"
        };

        // Redirige a la página de detalle del producto en modo de edición
        navigate(`/product/new`);
    };
    return (
        <>
            <SectionHeader 
                title="MI SERVICIO" 
                buttonText={"Nuevo"} 
                onClick={handleNewButtonClick} 
            />
                <Carousel value={products} numVisible={2} numScroll={1}  itemTemplate={(product) => <Card product={product} />} />
                {/* itemTemplate={Card} */}
        </>
    );
};
    
export default ServicesInfo;