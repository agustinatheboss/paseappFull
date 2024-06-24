import './InputField.css'; 
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import InputFieldPet from './InputFieldPet';
// ALGO ACA ME ESTA ANULANDO LA ANIMACION DE QUE SE MUEVA EL LABEL


const InputFieldUser = () => {
    // Validacion de campos obligatorios
    const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState([{ noPets: "", pets : ""}])

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { noPets: "", pets: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }


    return ( 
        <>
            <form onSubmit={handleSubmit}>
            <div className="container-form">
                <div className="login-box">
                    {/*<div className="login-header">
                        <header>Welcome</header>
                        <p>We are happy to have you back!</p>
                    </div> 
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
                    </div> */}
                    <div className="login-header">
                        <header>Paso 2: Completa tu perfil</header>
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
 
export default InputFieldUser;