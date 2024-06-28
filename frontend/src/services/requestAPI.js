// src/api/serviceAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Asegúrate de ajustar la URL base a tu backend



export const createPedido = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/pedidos`, formData);
    return response.data;
  } catch (error) {
    console.error('Error creando pedido:', error);
    throw error;
  }
};

export const getPedidos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/pedidos`);
        return response.data; // Actualiza el estado con los pedidos obtenidos desde la API
    } catch (error) {
        console.error('Error obteniendo pedidos:', error);
    }
};




