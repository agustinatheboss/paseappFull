import './InputField.css';
import React, { useState } from 'react';
import { createUser } from '../../services/userAPI';

const InputField = () => {
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState('usuario');

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const userData = {
                    name: formValues.name,
                    lastname: formValues.lastname,
                    email: formValues.email,
                    phone: formValues.phone,
                    address: formValues.address,
                    password: formValues.password,
                };
                await createUser(userData);
                setFormValues({});
                setErrors({});
                console.log("Usuario creado exitosamente");
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

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    return (
        <>
            <form onSubmit={handleCreateUser}>
                <div className="container-form">
                    <div className="login-box">
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
                                    <input type="text" className="input-field" id="name" autoComplete="off" value={formValues.name || ""} onChange={handleChange} />
                                    <label htmlFor="name">Nombre</label>
                                </div>
                            </div>
                            <div className="column-a">
                                <div className="input-box">
                                    <input type="text" className="input-field" id="lastname" autoComplete="off" value={formValues.lastname || ""} onChange={handleChange} />
                                    <label htmlFor="lastname">Apellido</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id="email" autoComplete="off" value={formValues.email || ""} onChange={handleChange} />
                            <label htmlFor="email">Mail</label>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id="phone" autoComplete="off" value={formValues.phone || ""} onChange={handleChange} />
                            <label htmlFor="phone">Número de teléfono</label>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id="address" autoComplete="off" value={formValues.address || ""} onChange={handleChange} />
                            <label htmlFor="address">Domicilio</label>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" id="password" autoComplete="off" value={formValues.password || ""} onChange={handleChange} />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" id="confirmPassword" autoComplete="off" value={formValues.confirmPassword || ""} onChange={handleChange} />
                            <label htmlFor="confirmPassword">Repetir Contraseña</label>
                        </div>
                        <div className="warning">
                            {errors.requiredFields && <p>{errors.requiredFields}</p>}
                            {errors.emailFormat && <p>{errors.emailFormat}</p>}
                            {errors.passwordMatch && <p>{errors.passwordMatch}</p>}
                            {errors.passwordRequirements && <p>{errors.passwordRequirements}</p>}
                            {errors.submit && <p>{errors.submit}</p>}
                        </div>
                        <div className="input-box">
                            <input type="submit" className="input-submit" value="Sign In" />
                        </div>
                        <div className="login-end">
                            <div className="sign-up">
                                <p>Ya tienes cuenta? <a href="#">Accede aquí</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default InputField;
