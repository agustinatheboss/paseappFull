const BASE_URL = "http://localhost:5000/api";
const BASE_URL_USERS = BASE_URL + "/users/";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Función para parsear la respuesta JSON de usuarios
const parseUser = (userFromAPI) => userFromAPI.user;

// Obtener todos los usuarios
export const getUsers = () =>
  fetch(BASE_URL_USERS)
    .then((response) => response.json())
    .then((users) => users.map(parseUser));

// Crear un nuevo usuario
export const createUser = (userData) =>
  fetch(BASE_URL_USERS, {
    method: "POST",
    headers,
    body: JSON.stringify(userData),
  }).then((response) => response.json());

// Obtener un usuario por su ID
export const getUserById = (userId) =>
  fetch(`${BASE_URL_USERS}${userId}`)
    .then((response) => response.json())
    .then(parseUser);

// Actualizar un usuario
export const updateUser = (userId, userData) =>
  fetch(`${BASE_URL_USERS}${userId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(userData),
  });

// Eliminar un usuario
export const deleteUser = (userId) =>
  fetch(`${BASE_URL_USERS}${userId}`, {
    method: "DELETE",
  });
