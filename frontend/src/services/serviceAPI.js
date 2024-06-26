// src/api/serviceAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Asegúrate de ajustar la URL base a tu backend

export const getServicios = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/servicios`);
    return response.data;
  } catch (error) {
    console.error('Error fetching servicios:', error);
    throw error;
  }
};

export const getServicioById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/servicios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching servicio by id:', error);
    throw error;
  }
};

export const createServicio = async (servicioData) => {
  try {
    const response = await axios.post(`${BASE_URL}/servicios`, servicioData);
    return response.data;
  } catch (error) {
    console.error('Error creating servicio:', error);
    throw error;
  }
};

export const updateServicio = async (id, servicioData) => {
  try {
    const response = await axios.put(`${BASE_URL}/servicios/${id}`, servicioData);
    return response.data;
  } catch (error) {
    console.error('Error updating servicio:', error);
    throw error;
  }
};

export const deleteServicio = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/servicios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting servicio:', error);
    throw error;
  }
};
