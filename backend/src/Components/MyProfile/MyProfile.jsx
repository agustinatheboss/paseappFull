// MyProfile.jsx

import './MyProfile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import RequestsInfo from './RequestsInfo/RequestsInfo';
import { React, useState, useEffect } from 'react';

const MyProfile = () => {
    const [isPetsitter, setIsPetsitter] = useState(true);
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

    useEffect(() => {
        // Simulated userData for testing, replace with actual implementation
        const userDataFromAPI = {
            firstName: "NOMBRE",
            lastName: "PASEADOR",
            mail: "mail@gmail.com",
            phone: "+54 9 11 2233 4455",
            address: "Calle y Numero 1234",
            experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pets: [
                { noPets: "1", pets: "perro" },
                { noPets: "3", pets: "gato" }
            ]
        };

        setUserData(userDataFromAPI);
    }, []);

    const handleChange = (i, e) => {
        let newPets = [...userData.pets]; // Crear una copia del array de pets dentro de userData
        newPets[i][e.target.name] = e.target.value; // Actualizar el valor del campo específico
        setUserData({
            ...userData,
            pets: newPets // Actualizar el estado de userData con los nuevos valores de pets
        });
    };

    const addFormFields = () => {
        let newPets = [...userData.pets, { noPets: "", pets: "" }]; // Agregar un nuevo objeto de mascota vacío al final del array
        setUserData({
            ...userData,
            pets: newPets // Actualizar el estado de userData con la nueva lista de pets
        });
    };

    const removeFormFields = (i) => {
        let newPets = [...userData.pets]; // Crear una copia del array de pets dentro de userData
        newPets.splice(i, 1); // Eliminar el objeto de mascota en la posición i
        setUserData({
            ...userData,
            pets: newPets // Actualizar el estado de userData con la nueva lista de pets
        });
    };

    return (
        <section>
            <div className="profile-box">
                <div className="row-profile">
                    <div className="column-profile-a">
                        {/* Pasar userData, handleChange, addFormFields y removeFormFields a ProfileInfo */}
                        {userData && (
                            <ProfileInfo
                                formValues={userData}
                                handleChange={handleChange}
                                addFormFields={addFormFields}
                                removeFormFields={removeFormFields}
                            />
                        )}
                        {isPetsitter && <RequestsInfo />}
                    </div>
                    <div className="divider"></div>
                    <div className="column-profile-b">
                        <ServicesInfo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;
