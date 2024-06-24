import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL
import { getUsers, createUser, updateUser, deleteUser } from '../../services/userAPI';

const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};

const userData = {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@example.com',
    password: 'password123',
    address: 'Calle Principal 123',
};


const InputField = () => {
    // Validacion de campos obligatorios
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState('usuario'); // Estado para tipo de usuario

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario válido, enviando datos:", formValues);
            // Limpiar errores si el formulario es válido
            setErrors({});
        // Aquí podrías enviar los datos a través de una solicitud HTTP, por ejemplo.
        } else {
            setErrors(validationErrors);
        }
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        console.log(formValues);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await createUser(userData);
                //setSuccessMessage(response.message);
                // Limpiar formulario después de enviar
                setFormValues({});
                setErrors({});
            } catch (error) {
                console.error('Error al crear usuario:', error);
                setErrors({ submit: 'Error al crear usuario' });
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (values) => {
        let errors = {};

        // Validación de campos obligatorios
        if (!values.name || !values.lastname || !values.email || !values.phone || !values.address || !values.password || !values.confirmPassword) {
        errors.requiredFields = "Todos los campos son obligatorios";
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (values.email && !emailRegex.test(values.email)) {
        errors.emailFormat = "El formato del correo electrónico no es válido";
        }

        // Validación de contraseñas iguales
        if (values.password !== values.confirmPassword) {
        errors.passwordMatch = "Las contraseñas no coinciden";
        }

        // Validacion contrasena. Letras y numeros, min 8 caracteres y 1 mayuscula
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(values.password)) {
            errors.passwordRequirements = "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número";
        }

        return errors;
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };


    return ( 
        <>
            <form onSubmit={handleCreateUser}>
            <div className="container-form">
                <div className="login-box">
                    {/*<div className="login-header">
                        <header>Welcome</header>
                        <p>We are happy to have you back!</p>
                    </div> */}
                    <div className="row-a">
                        <div className="column-a">
                            <div className="input-box">
                                <input
                                    type="button"
                                    className={`btn-usertype btn-usuario ${userType === 'usuario' ? 'active' : ''}`}
                                    value="SOY USUARIO"
                                    onClick={() => handleUserTypeChange('usuario')}
                                />
                            </div>
                        </div>
                        <div className="column-a">
                            <div className="input-box">
                                <input
                                    type="button"
                                    className={`btn-usertype btn-paseador ${userType === 'paseador' ? 'active' : ''}`}
                                    value="SOY PASEADOR"
                                    onClick={() => handleUserTypeChange('paseador')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-a">
                        <div className="column-a">
                            <div className="input-box">
                                <input type="text" className="input-field" id="name" autocomplete="off" value={formValues.name || ""}
            onChange={handleChange} />
                                <label htmlFor="name">Nombre</label>
                            </div>
                        </div>
                        <div className="column-a">
                            <div className="input-box">
                                <input type="text" className="input-field" id="lastname" autocomplete="off" value={formValues.lastname || ""}
            onChange={handleChange} />
                                <label htmlFor="lastname">Apellido</label>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-box">
                        <input type="text" className="input-field" id="email" autocomplete="off" value={formValues.email || ""}
            onChange={handleChange} />
                        <label htmlFor="email">Mail</label>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" id="phone" autocomplete="off" value={formValues.phone || ""}
            onChange={handleChange} />
                        <label htmlFor="phone">Numero de telefono</label>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" id="address" autocomplete="off" value={formValues.address || ""}
            onChange={handleChange} />
                        <label htmlFor="address">Domicilio</label>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" id="password" autocomplete="off" value={formValues.password || ""}
            onChange={handleChange} />
                        <label htmlFor="password">Contraseña</label>
                    </div>                                                            
                    <div className="input-box">
                        <input type="password" className="input-field" id="confirmPassword" autocomplete="off" value={formValues.confirmPassword || ""}
            onChange={handleChange} />
                        <label htmlFor="confirmPassword">Repetir Contraseña</label>
                    </div>
                    
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <div className="warning">
                        {errors.requiredFields && <p>{errors.requiredFields}</p>}
                        {errors.emailFormat && <p>{errors.emailFormat}</p>}
                        {errors.passwordMatch && <p>{errors.passwordMatch}</p>}
                        {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                    </div>
                    <div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div>
                    <div className="login-end">
                        <div className="sign-up">
                            <p>Ya tenes cuenta? <a href="#">Accede aca</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputField;