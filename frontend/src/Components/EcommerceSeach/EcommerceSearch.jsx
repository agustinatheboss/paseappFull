import React, { useState, useEffect } from "react";
import CategoryFilter from "./SidebarFilters/CategoryFilter";
import DateRangeFilter from "./SidebarFilters/DateRangeFilter";
import FrequencyFilter from "./SidebarFilters/FrequencyFilter";
import PetTypeFilter from "./SidebarFilters/PetTypeFilter";
import RatingFilter from "./SidebarFilters/RatingFilter";
import ZoneFilter from "./SidebarFilters/ZoneFilter";
import Card from "../Card/Card";
import "./EcommerceSearch.css";
import petBanner from '../../images/petBanner.png';
import { getServicios } from '../../services/serviceAPI';

const EcommerceSearch = () => {
  const [filters, setFilters] = useState({
    categories: [],
    petTypes: [],
    frequencies: [],
    dateRange: { start: '', end: '' },
    rating: 0,
    zones: [],
    query: ''
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getServicios();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const applyFilters = (products, filters) => {

    return products.filter(product => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.serviceCategory.nombreCategoria);
      const petTypeMatch = filters.petTypes.length === 0 || filters.petTypes.includes(product.petType.nombre);
      const frequencyMatch = filters.frequencies.length === 0 || filters.frequencies.includes(product.frequencyType.descripcionFrecuencia);
      const dateRangeMatch = (!filters.dateRange.start || new Date(product.startDate) >= new Date(filters.dateRange.start)) &&
                             (!filters.dateRange.end || new Date(product.startDate) <= new Date(filters.dateRange.end));
      const ratingMatch = filters.rating === 0 || product.calification.numeroCalificacion >= filters.rating;
      const zoneMatch = filters.zones.length === 0 || filters.zones.includes(product.zone.nombreZona);
      const queryMatch = product.title && product.title.toLowerCase().includes(filters.query.toLowerCase());
       
      return categoryMatch && petTypeMatch && frequencyMatch && zoneMatch && ratingMatch && queryMatch && dateRangeMatch ;
    });
  };

  const filteredProducts = applyFilters(products, filters);

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  if (!products) return <div>Loading...</div>;

  return (
    <div className="ecommerce-search">
      <header className="banner-ecommerce">
        <div className="banner-content-ecommerce">
          <h2>ENCONTRA</h2>
          <h2>EL SERVICIO QUE ESTAS BUSCANDO</h2>
        </div>
        <img src={petBanner} alt="Banner" className="img-banner"/>
      </header>
      <div className="ecommerce-content">
        <aside className="sidebar">
          <h2>FILTROS</h2>
          <div className="line-divider-filter"></div>
          <CategoryFilter filters={filters} setFilters={handleFilterChange} />
          <div className="line-divider-filter"></div>
          <DateRangeFilter filters={filters} setFilters={handleFilterChange} />
          <div className="line-divider-filter"></div>
          <FrequencyFilter filters={filters} setFilters={handleFilterChange} />
          <div className="line-divider-filter"></div>
          <PetTypeFilter filters={filters} setFilters={handleFilterChange} />
          <div className="line-divider-filter"></div>
          <RatingFilter filters={filters} setFilters={handleFilterChange} />
          <div className="line-divider-filter"></div>
          <ZoneFilter filters={filters} setFilters={handleFilterChange} />
        </aside>
        <div className="main-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
            />
          </div>
          <div className="product-list">
            
            {filteredProducts.map(product => (
              <Card key={product._id} product={product} />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSearch;
