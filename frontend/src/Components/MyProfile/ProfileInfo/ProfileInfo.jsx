import './ProfileInfo.css';
//import PrimaryButton from '../Buttons/PrimaryButton';
import SectionHeader from '../SectionHeader';
import InputFieldPet from '../../InputFields/InputFieldPet';
import {React, useState} from 'react';

const ProfileInfo = ({ formValues, handleChange, addFormFields, removeFormFields }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("NOMBRE");
    const [lastName, setLastName] = useState("PASEADOR");
    const [mail, setMail] = useState("mail@gmail.com");
    const [phone, setPhone] = useState("+54 9 11 2233 4455");
    const [address, setAddress] = useState("Calle y Numero 1234");
    const [experience, setExperience] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris risus, euismod ut arcu ut, laoreet mollis enim. Cras nisi orci, aliquam sed fringilla in, varius at erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames leo.");

    const handleEditClick = () => {
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
                            value={formValues.firstName}
                            onChange={(e) => handleChange("firstName", e)}
                            placeholder="Nombre"
                            className="product-edit-fields half-width"
                        />
                        <input 
                            type="text" 
                            value={formValues.lastName}
                            onChange={(e) => handleChange("lastName", e)}
                            placeholder="Apellido"
                            className="product-edit-fields half-width"
                        />
                    </>
                ) : (
                    `${formValues.firstName} ${formValues.lastName}`
                )}
            </h3>
            <section className='info-section'>
                <h3 className="info-title">Mail: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.mail}
                        onChange={(e) => setMail(e.target.value)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{mail}</p>
                )}
            </section>
            <section className='info-section'>
                <h3 className="info-title">Telefono: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{phone}</p>
                )}
            </section>
            <section className='info-section'>
                <h3 className="info-title">Direccion: </h3>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={formValues.address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="product-edit-fields"
                    />
                ) : (
                    <p className="info-text">{address}</p>
                )}
            </section>
            <section className='info-section new-line'>
                <h3 className="info-title">Experiencia: </h3>
                {isEditing ? (
                    <textarea 
                        value={formValues.experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="product-edit-fields"
                        maxLength={1000}
                        rows={6}
                    />
                ) : (
                    <p className="info-text">{experience}</p>
                )}
            </section>
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
        </section>

    );
};
  
  export default ProfileInfo;