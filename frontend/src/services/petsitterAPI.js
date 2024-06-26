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

export default { signup, login };