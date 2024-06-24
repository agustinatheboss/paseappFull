import './LogIn.css';
import InputField from '../InputFields/InputField';
import imgPet2 from '../../images/pet-2.jpg';
import InputFieldUser from '../InputFields/InputFieldUser';
import InputFieldPetsitter from '../InputFields/InputFieldPetsitter';
import InputFieldLogin from '../InputFields/InputFieldLogin';
import InputFieldMailReset from '../InputFields/InputFieldMailReset';
import InputFieldResetPassword from '../InputFields/InputFieldResetPassword';

const LogIn = () => {
    return ( 
        <>
          <div className="container-form">
            <div className="form-box">
              <div className="row-form">
                <div className="column-form">
                    {/*<InputFieldLogin /> */}
                    {/*<InputFieldMailReset /> */}
                    <InputFieldResetPassword />

                </div>
                <div className="column-form">
                  <div className="header-form">
                    <div className="text-form">LOG IN</div>
                    <div className="underline-form"></div>
                  </div>
                  <div className="content-form">
                    <img  src={imgPet2} alt="Mascota"/>
                    <p>¡Que bueno verte de vuelta!</p>
                    <div className="underline-form-2"></div>
                  </div>
                  

                </div>
              </div>
            </div>
            
          </div>


        </>
     );
}
 
export default LogIn;