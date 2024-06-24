import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import AlternativeButton from '../Buttons/AlternativeButton';
// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL



const InputFieldPetsitter = () => {
    // Validacion de campos obligatorios
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

    const maxLenghtInput = 300;
    const [currentChars, setCurrentChars] = useState(0);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setCurrentChars(inputValue.length);
        setFormValues({ profileDescription: inputValue });
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
        if (!values.profileDescription) {
        errors.requiredFields = "Todos los campos son obligatorios";
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
                    {/*<div className="row-a">
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
                    </div> */}
                    <div className="login-header">
                        <header>Paso 2: Completa tu perfil</header>
                        <p>Contanos un poco sobre vos. Esta información se va a mostrar a los usuarios cuando vean tus servicios. </p>
                    </div>
                    <div className="input-box">
                        <textarea type="text" className="input-field extended" id="profileDescription" autocomplete="off" value={formValues.profileDescription || ""}
            onChange={handleChange} maxLength={maxLenghtInput}/>
                        <label htmlFor="profileDescription">Mi perfil</label>
                    </div>
                    
                    {/*<div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div> */}
                    <div className="char-counter">
                        Caracteres: {currentChars} / {maxLenghtInput}
                    </div>
                    <div className="warning">
                        {errors.requiredFields && <p>{errors.requiredFields}</p>}
                        {errors.emailFormat && <p>{errors.emailFormat}</p>}
                        {errors.passwordMatch && <p>{errors.passwordMatch}</p>}
                        {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                    </div>
                    {/*<div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div> */}
                    <PrimaryButton value={"COMPLETA TU PERFIL"} onClick={""} />
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
 
export default InputFieldPetsitter;