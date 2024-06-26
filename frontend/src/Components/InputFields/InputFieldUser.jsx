import './InputField.css'; 
import React, { useState } from 'react';
import InputFieldPet from './InputFieldPet';
import PrimaryButton from '../Buttons/PrimaryButton';
import userAPI from '../../services/userAPI';

// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL


const InputFieldUser = ({ formValues, setFormValues }) => {
    // Validacion de campos obligatorios
    const [errors, setErrors] = useState({});

    //const [formValues, setFormValues] = useState([{ noPets: "", pets : ""}])

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newValue = name === "noPets" ? parseInt(value, 10) : value; // Convertir a número si es necesario
        const newPets = formValues.pets.map((pet, petIndex) => 
            petIndex === index ? { ...pet, [name]: newValue } : pet
        );
        setFormValues({ ...formValues, pets: newPets });
    };

    const addFormFields = () => {
        setFormValues({ ...formValues, pets: [...formValues.pets, { noPets: "", pets: "" }] });
    };

    const removeFormFields = (index) => {
        const newPets = formValues.pets.filter((_, petIndex) => petIndex !== index);
        setFormValues({ ...formValues, pets: newPets });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formValues)
            const response = await userAPI.signup(formValues);
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                //setSignUpErrorMessage('El usuario ya esta registrado. Prueba de iniciar sesion');
                console.log(error.response.data.message); // Mostrar mensaje de error del backend
            } else {
                //setSignUpErrorMessage('Error signing up'); // Mensaje de error genérico
                console.log(error.response.data.message);
            }
        }
    };

    return ( 
        <>
            <form onSubmit={handleSubmit}>
            <div className="container-form">
                <div className="login-box">
                    <div className="row-a">
                        <div className="column-a">
                            <div className="input-box">
                                <input type="button" className="btn-usertype btn-usuario active" value="SOY USUARIO" />
                            </div>
                        </div>
                        <div className="column-a">
                            <div className="input-box">
                                <input type="button" className="btn-usertype btn-paseador" value="SOY PASEADOR" />
                            </div>
                        </div>
                    </div> 
                    <div className="login-header">
                        <header><b>PASO 2:</b> Completa tu perfil</header>
                        <p>Contanos un poco sobre tus mascotas. </p>
                    </div>
                    
                    <InputFieldPet
                        formValues={formValues}
                        handleChange={handleChange}
                        addFormFields={addFormFields}
                        removeFormFields={removeFormFields}
                    /> 

                    
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <PrimaryButton value={"COMPLETA TU PERFIL"} onClick={handleSubmit} />
                    {/*
                    <div className="login-end">
                        <div className="sign-up">
                            <p>Ya tenes cuenta? <a href="#">Accede aca</a></p>
                        </div>
                    </div> */}
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputFieldUser;