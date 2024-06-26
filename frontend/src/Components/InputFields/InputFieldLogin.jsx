import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL

const InputFieldLogin = () => {
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

    const validateForm = (values) => {
        let errors = {};

        // Validación de campos obligatorios
        if (!values.email || !values.password) {
        errors.requiredFields = "Todos los campos son obligatorios";
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (values.email && !emailRegex.test(values.email)) {
        errors.emailFormat = "El formato del correo electrónico no es válido";
        }

        // Validacion contrasena. Letras y numeros, min 8 caracteres y 1 mayuscula
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(values.password)) {
            errors.passwordRequirements = "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número";
        }

        return errors;
    };

    const handleUserType = (type) => {
        setUserType(type);
        //handleUserTypeChange(type);
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
                    
                    <div className="input-box">
                        <input type="text" className="input-field" id="email" autoComplete="off" value={formValues.email || ""}
            onChange={handleChange} />
                        <label htmlFor="email">Mail</label>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" id="password" autoComplete="off" value={formValues.password || ""}
            onChange={handleChange} />
                        <label htmlFor="password">Contraseña</label>
                    </div>                                                            
                    
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <div className="warning">
                        {errors.requiredFields && <p>{errors.requiredFields}</p>}
                        {errors.emailFormat && <p>{errors.emailFormat}</p>}
                        {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                    </div>
                    {/*
                    <div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div> */}
                    <PrimaryButton value={"INGRESAR"} onClick={handleSubmit} />
                    <div className="login-end">
                        <div className="sign-up">
                            <p>Todavía no tenes cuenta? <Link to="/signup">Registrate acá</Link></p>
                        </div>
                        <div className="forgot">
                            <p>Olvidaste la contraseña? <Link to="/forgot">Click acá</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputFieldLogin;