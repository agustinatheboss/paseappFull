import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL
import userAPI from '../../services/userAPI';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';

const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};

const userData = {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@examplemail3.com',
    password: 'password123',
    address: 'Calle Principal 123',
};


const InputField = ({ handleSignUpClick, handleUserTypeChange, formValues, setFormValues }) => {
    //const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState('usuario'); // Estado para tipo de usuario
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario válido, enviando datos:", formValues);
            
            handleSignUpClick();
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario válido, enviando datos:", formValues);
            
            setErrors({});
            handleSignUpClick();
            /*
            try {
                const response = await userAPI.signup(formValues);
                console.log(response.data);
                setSignUpErrorMessage('');
                handleSignUpClick();
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setSignUpErrorMessage('El usuario ya esta registrado. Prueba de iniciar sesion');
                    console.log(error.response.data.message); // Mostrar mensaje de error del backend
                } else {
                    setSignUpErrorMessage('Error signing up'); // Mensaje de error genérico
                }
            } */
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (values) => {
        let errors = {};

        if (!values.name || !values.lastname || !values.email || !values.phone || !values.address || !values.password || !values.confirmPassword) {
            errors.requiredFields = "Todos los campos son obligatorios";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (values.email && !emailRegex.test(values.email)) {
            errors.emailFormat = "El formato del correo electrónico no es válido";
        }

        if (values.password !== values.confirmPassword) {
            errors.passwordMatch = "Las contraseñas no coinciden";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(values.password)) {
            errors.passwordRequirements = "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número";
        }

        return errors;
    };

    const handleUserType = (type) => {
        setUserType(type);
        handleUserTypeChange(type);
    };

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <div className="container-form">
                    <div className="login-box">
                        
                        <div className="row-a">
                            <div className="column-a">
                                <div className="input-box">
                                    <input
                                        type="button"
                                        className={`btn-usertype btn-usuario ${userType === 'usuario' ? 'active' : ''}`}
                                        value="SOY USUARIO"
                                        onClick={() => handleUserType('usuario')}
                                    />
                                </div>
                            </div>
                            <div className="column-a">
                                <div className="input-box">
                                    <input
                                        type="button"
                                        className={`btn-usertype btn-paseador ${userType === 'paseador' ? 'active' : ''}`}
                                        value="SOY PASEADOR"
                                        onClick={() => handleUserType('paseador')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="warning">{signUpErrorMessage && <p>{signUpErrorMessage}</p>}</div>
                        <div className="row-a">
                            <div className="column-a">
                                <div className={`input-box ${errors.name ? 'error' : ''}`}>
                                    <input
                                        type="text"
                                        className="input-field"
                                        id="name"
                                        autoComplete="off"
                                        value={formValues.name || ""}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="name">Nombre</label>
                                </div>
                            </div>
                            <div className="column-a">
                                <div className={`input-box ${errors.lastname ? 'error' : ''}`}>
                                    <input
                                        type="text"
                                        className="input-field"
                                        id="lastname"
                                        autoComplete="off"
                                        value={formValues.lastname || ""}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="lastname">Apellido</label>
                                </div>
                            </div>
                        </div>
                        <div className={`input-box ${errors.email ? 'error' : ''}`}>
                            <input
                                type="text"
                                className="input-field"
                                id="email"
                                autoComplete="off"
                                value={formValues.email || ""}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Mail</label>
                        </div>
                        <div className={`input-box ${errors.phone ? 'error' : ''}`}>
                            <input
                                type="text"
                                className="input-field"
                                id="phone"
                                autoComplete="off"
                                value={formValues.phone || ""}
                                onChange={handleChange}
                            />
                            <label htmlFor="phone">Numero de telefono</label>
                        </div>
                        <div className={`input-box ${errors.address ? 'error' : ''}`}>
                            <input
                                type="text"
                                className="input-field"
                                id="address"
                                autoComplete="off"
                                value={formValues.address || ""}
                                onChange={handleChange}
                            />
                            <label htmlFor="address">Domicilio</label>
                        </div>
                        <div className={`input-box ${errors.password ? 'error' : ''}`}>
                            <input
                                type="password"
                                className="input-field"
                                id="password"
                                autoComplete="off"
                                value={formValues.password || ""}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <div className={`input-box ${errors.confirmPassword ? 'error' : ''}`}>
                            <input
                                type="password"
                                className="input-field"
                                id="confirmPassword"
                                autoComplete="off"
                                value={formValues.confirmPassword || ""}
                                onChange={handleChange}
                            />
                            <label htmlFor="confirmPassword">Repetir Contraseña</label>
                        </div>
                        <div className="warning">
                            {errors.requiredFields && <p>{errors.requiredFields}</p>}
                            {errors.emailFormat && <p>{errors.emailFormat}</p>}
                            {errors.passwordMatch && <p>{errors.passwordMatch}</p>}
                            {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                        </div>
                        {/*
                        <div className="input-box">
                            <input type="submit" className="input-submit" value="REGISTRARSE" />
                        </div> */}
                        <PrimaryButton value={"REGISTRARSE"} onClick={handleSubmit} />
                        <div className="login-end">
                            <div className="sign-up">
                                <p>Ya tenes cuenta? <Link to="/login">Accede aca</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

 
export default InputField;