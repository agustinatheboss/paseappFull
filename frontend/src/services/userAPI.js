// frontend/src/services/userAPI.js
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const BASE_URL_USERS = BASE_URL + "/users/";



const signup = (userData) => {
    return axios.post(`${BASE_URL}/users`, userData);
};

export default { signup };
