import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';

// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL

const InputFieldMailReset = () => {
    // Validacion de campos obligatorios
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

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
                                <input type="submit" className="btn-usertype btn-usuario" value="SOY USUARIO" />
                            </div>
                        </div>
                        <div className="column-a">
                            <div className="input-box">
                                <input type="submit" className="btn-usertype btn-paseador" value="SOY PASEADOR" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-box">
                        <input type="text" className="input-field" id="email" autocomplete="off" value={formValues.email || ""}
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
                        {errors.passwordMatch && <p>{errors.passwordMatch}</p>}
                        {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                    </div>
                    <div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div>
                    <div className="login-end">
                        <div className="sign-up">
                            <p>Todavía no tenes cuenta? <a href="#">Registrate acá</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            
        </>
     );
}
 
export default InputFieldMailReset;