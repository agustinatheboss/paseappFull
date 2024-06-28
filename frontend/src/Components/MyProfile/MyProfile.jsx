// MyProfile.jsx

import './MyProfile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import RequestsInfo from './RequestsInfo/RequestsInfo';
import { React, useState, useEffect } from 'react';

const MyProfile = () => {
    const [isPetsitter, setIsPetsitter] = useState(false); // Cambiado a false por defecto
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

    useEffect(() => {
        // Simulated userData for testing, replace with actual implementation
        const user = sessionStorage.getItem("user");
        const userType = sessionStorage.getItem("userType");
        console.log(user)
        if (user) {
            try {
                const userSession = JSON.parse(user);
                setUserData(userSession);
                setIsPetsitter(sessionStorage.getItem("userType") === 'paseador');
            } catch (e) {
                console.error("Error parsing user data from session storage", e);
            }
            /*const userSession = {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                address: user.address,
                profileDescription: user.profileDescription || "",
                pets: user.pets || [], 
                userType: userType 
            };
            console.log(userSession);
            setUserData(userSession);
            setIsPetsitter(user.userType === 'paseador'); // Establecer isPetsitter según el userType */

        }
    }, []);

    const handleChange = (field, e) => {
        setUserData({
            ...userData,
            [field]: e.target.value
        });
    };

    const handlePetChange = (i, e) => {
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
                                handlePetChange={handlePetChange}
                                isPetsitter={isPetsitter}
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
