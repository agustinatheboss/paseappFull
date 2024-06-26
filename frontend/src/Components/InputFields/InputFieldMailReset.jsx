import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { GoAlert } from "react-icons/go";
import PrimaryButton from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';


// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL

const InputFieldMailReset = () => {
    // Validacion de campos obligatorios
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState('usuario'); // Estado para tipo de usuario
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario válido, enviando datos:", formValues);
            setSuccessMessage(true);
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
        if (!values.email) {
        errors.requiredFields = "Completa una direccion de mail";
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (values.email && !emailRegex.test(values.email)) {
        errors.emailFormat = "El formato del correo electrónico no es válido";
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
                    <div className="login-header">
                        <header><b>¿Olvidaste tu contraseña?</b></header>
                        <p>Ingresá el mail que tenes registrado para recuperarla </p>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" id="email" autoComplete="off" value={formValues.email || ""}
            onChange={handleChange} />
                        <label htmlFor="email">Mail</label>
                    </div> 
                                                                            
                    
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <div className="warning">
                        {errors.requiredFields && <p>{errors.requiredFields}</p>}
                        {errors.emailFormat && <p>{errors.emailFormat}</p>}
                    </div>
                    <div className="reset-footer">
                        {successMessage && <GoAlert className='alert-icon'/>}
                        {successMessage && <p>Te enviamos un email con instrucciones sobre cómo restablecer tu contraseña. </p>}
                    </div>  
                    {/*<div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div>*/}

                    <PrimaryButton value={"ENVIAR MAIL"} onClick={handleSubmit} />

                    <div className="login-end">
                        <div className="sign-up">
                            <p>Todavía no tenes cuenta? <Link to="/signup">Registrate acá</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputFieldMailReset;