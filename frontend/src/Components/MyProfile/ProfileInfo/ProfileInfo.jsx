import './ProfileInfo.css';
//import PrimaryButton from '../Buttons/PrimaryButton';
import SectionHeader from '../SectionHeader';
import InputFieldPet from '../../InputFields/InputFieldPet';
import {React, useState, useEffect} from 'react';
import petsitterAPI from '../../../services/petsitterAPI';
import userAPI from '../../../services/userAPI';


const ProfileInfo = ({ formValues, handleChange, addFormFields, removeFormFields, handlePetChange, isPetsitter }) => {
    const [isEditing, setIsEditing] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [experience, setExperience] = useState("");

    

    const handleEditClick = async () => {
        console.log(formValues);
        if (isEditing) {
            try {
                if (isPetsitter) {
                    await petsitterAPI.updatePetsitter(formValues); // Llama a la API de petSitter para actualizar
                } else {
                    await userAPI.updateUser(formValues); // Llama a la API de usuario para actualizar
                }
                // Lógica adicional después de la actualización, si es necesario
            } catch (error) {
                console.error('Error al actualizar usuario:', error);
                
            }
        }
        setIsEditing(!isEditing);
    
    };

    return (
        <section className="profile-section">
            <SectionHeader 
                title="MI PERFIL" 
                buttonText={isEditing ? "Guardar" : "Editar"} 
                onClick={handleEditClick} 
            />
            <h3 className="petsitter-title">
                {isEditing ? (
                    <>
                        <input 
                            type="text" 
                            value={formValues.name}
                            onChange={(e) => handleChange("name", e)}
                            placeholder="Nombre"
                            className="product-edit-fields half-width"
                        />
                        <input 
                            type="text" 
                            value={formValues.lastname}
                            onChange={(e) => handleChange("lastname", e)}
                            placeholder="Apellido"
                            className="product-edit-fields half-width"
                        />
                    </>
                ) : (
                    `${formValues.name} ${formValues.lastname}`
                )}
            </h3>
            <section className='info-section'>
                <h3 className="info-title">Mail: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.email}
                        onChange={(e) => handleChange("email", e)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{formValues.email}</p>
                )}
            </section>
            <section className='info-section'>
                <h3 className="info-title">Telefono: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.phone}
                        onChange={(e) => handleChange("phone", e)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{formValues.phone}</p>
                )}
            </section>
            <section className='info-section'>
                <h3 className="info-title">Direccion: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.address}
                        onChange={(e) => handleChange("address", e)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{formValues.address}</p>
                )}
            </section>
            {isPetsitter ? (
            <section className='info-section new-line'>
                <h3 className="info-title">Experiencia: </h3>
                {isEditing ? (
                    <textarea 
                        value={formValues.profileDescription}
                        onChange={(e) => handleChange("profileDescription", e)}
                        className="product-edit-fields"
                        maxLength={1000}
                        rows={6}
                    />
                ) : (
                    <p className="info-text">{formValues.profileDescription}</p>
                )}
            </section>
            ) : (
            <section className="info-section new-line">
                {isEditing ? (
                    <InputFieldPet
                        formValues={formValues.pets}
                        handleChange={handleChange}
                        addFormFields={addFormFields}
                        removeFormFields={removeFormFields}
                    /> 
                ) : (
                    <>
                        {formValues.pets.map((pet, index) => (
                            <p key={index}>{`${pet.noPets}. ${pet.pets}`}</p>
                        ))}
                    </>
                )}
            </section> 
            )}
        </section>

    );
};
  
  export default ProfileInfo;