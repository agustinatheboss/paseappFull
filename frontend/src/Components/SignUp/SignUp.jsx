import './SignUp.css';
import InputField from '../InputFields/InputField';
import imgPet1 from '../../images/pet-1.jpg';
import InputFieldUser from '../InputFields/InputFieldUser';
import InputFieldPetsitter from '../InputFields/InputFieldPetsitter';
import React, { useState } from 'react';


const SignUp = () => {
  const [userType, setUserType] = useState('usuario'); // Estado para tipo de usuario
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visualización del formulario
  const [formValues, setFormValues] = useState({ pets: [{ noPets: "", pets : ""}] }); // Estado compartido para los valores del formulario


  const handleUserTypeChange = (type) => {
      setUserType(type);
  };

  const handleSignUpClick = () => {
      setShowForm(true);
  };

    return ( 
        <>
          <div className="container-signup-form">
            <div className="form-signup-box">
              <div className="row-signup-form">
                <div className="column-signup-form">
                  <div className="header-signup-form">
                    <div className="underline-signup-form"></div>
                    <div className="text-signup-form">SIGN UP</div>
                  </div>
                  <div className="content-signup-form">
                    <img  src={imgPet1} alt="Mascota"/>
                    <p>Registrate acá para acceder a los mejores paseadores al alcance de tu mano</p>
                    <div className="underline-signup-form-2"></div>
                  </div>
                </div>
                <div className="column-signup-form">
                  {!showForm ? (
                      <InputField
                        handleSignUpClick={handleSignUpClick}
                        handleUserTypeChange={handleUserTypeChange}
                        formValues={formValues}
                        setFormValues={setFormValues}
                      />
                  ) : (
                      <>
                          {userType === 'usuario' && <InputFieldUser formValues={formValues} setFormValues={setFormValues} />}
                          {userType === 'paseador' && <InputFieldPetsitter formValues={formValues} setFormValues={setFormValues} />}
                      </>
                  )}
                </div>
              </div>
            </div>
            
          </div>


        </>
     );
}
 
export default SignUp;