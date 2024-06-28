// frontend/src/services/userAPI.js
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const BASE_URL_USERS = `${BASE_URL}/proveedores/`;

const signup = (userData) => {
    return axios.post(BASE_URL_USERS, userData);
};

const login = (loginData) => {
    return axios.post(`${BASE_URL_USERS}login`, loginData);
};

const updatePetsitter = async (userData) => {
    const userId = userData._id; // Asegúrate de tener el ID del usuario disponible en userData
    try {
        const response = await fetch(`${BASE_URL}/proveedores/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar usuario');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export default { signup, login, updatePetsitter };