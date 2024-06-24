import './SignUp.css';
import InputField from '../InputFields/InputField';
import imgPet1 from '../../images/pet-1.jpg';
import InputFieldUser from '../InputFields/InputFieldUser';
import InputFieldPetsitter from '../InputFields/InputFieldPetsitter';

const SignUp = () => {
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
                  <InputField />
                  {/*<InputFieldUser /> */}
                  {/*<InputFieldPetsitter /> */}
                  

                </div>
              </div>
            </div>
            
          </div>


        </>
     );
}
 
export default SignUp;