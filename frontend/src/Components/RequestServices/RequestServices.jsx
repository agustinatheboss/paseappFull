import React, { useState, useEffect } from "react";
//import products from "../../db/data";
import StatusFilter from "./SidebarFilters/StatusFilter";

import CardRequests from "../Card/CardRequests";

//import "./EcommerceSearch/EcommerceSearch.css"; // Asegúrate de importar los estilos específicos para CategoryFilter
import petBanner from '../../images/petBanner.png'
import { getServicios } from '../../services/serviceAPI'; // Importa la función para obtener productos


const RequestServices = () => {
  const [filters, setFilters] = useState({
    status: [],
  });
  //const [requests, setRequests] = useState([]);
  const userData = window.sessionStorage.getItem("user");

  const requests = [
    {
      id: 1,
      user: "Nico",
      status: "ACTIVO",
      title: "Paseo diario",
      description: "Hola hola hola",
      time: "2 horas",
      phone: "1122",
      email: "aa@mail.com",
      price: "$20"
    },
    {
      id: 2,
      user: "Ana",
      status: "INACTIVO",
      title: "Cuidado de gatos",
      description: "Servicio de cuidado de gatos durante vacaciones",
      time: "1 hora",
      phone: "3344",
      email: "bb@mail.com",
      price: "$15"
    },
    {
      id: 3,
      user: "Juan",
      status: "PENDIENTE",
      title: "Adiestramiento canino",
      description: "Entrenamiento básico para perros jóvenes",
      time: "3 horas",
      phone: "5566",
      email: "cc@mail.com",
      price: "$30"
    },
    {
      id: 4,
      user: "María",
      status: "ACTIVO",
      title: "Corte de pelo para perros",
      description: "Corte profesional para razas pequeñas y medianas",
      time: "1.5 horas",
      phone: "7788",
      email: "dd@mail.com",
      price: "$25"
    }
  ];


{/*
  useEffect(() => {
    // Función asincrónica para obtener productos y actualizar el estado
    const fetchRequests = async () => {
      try {
        const data = await getServicios(); // Llama a la función de API para obtener productos
        setRequests(data); // Actualiza el estado con los productos obtenidos
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests(); // Llama a la función al montar el componente o cuando cambien las dependencias
  }, []);

  */}

  useEffect(() => {
    console.log("Filters updated:", filters.categories);
  }, [filters.categories]);

  const applyFilters = (requests, filters) => {
    return requests.filter(request => {
      const statusMatch = filters.status.length === 0 || filters.status.includes(request.status);

      return statusMatch;
    });
  };

  const filteredRequests = applyFilters(requests, filters);

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  

  return (
    <div className="ecommerce-search">
      
      <header className="banner-ecommerce">
        <div className="banner-content-ecommerce">
          <h2>ENCONTRA</h2>
          <h2>QUIENES ESTÁN BUSCANDO TU SERVICIO</h2>
        </div>
        <img src={ petBanner } alt="Banner" className="img-banner"/>
      </header> 

      <div className="ecommerce-content">
      <aside className="sidebar">
        <h2>FILTROS</h2>
        <div className="line-divider-filter"></div>
        <StatusFilter filters={filters} setFilters={handleFilterChange} />
      </aside>
      <div className="main-content">
        {/*
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
          />
        </div> */}
        
        <div className="product-list">
          {filteredRequests.map(request => (
            <CardRequests key={request.id} request={request}/>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default RequestServices;
