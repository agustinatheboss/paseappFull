import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const InputFieldPet = ({ formValues, handleChange, addFormFields, removeFormFields }) => {
    return (
        <>
            {formValues.map((element, index) => (
                <div className="row-a" key={index}>
                    <div className="column-b left">
                        <div className="input-box">
                            <input
                                type="number"
                                className="input-field"
                                name="noPets"
                                autoComplete="off"
                                value={element.noPets || ""}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label htmlFor="noPets">Cant</label>
                        </div>
                    </div>
                    <div className="column-b middle">
                        <div className="input-box">
                            <select
                                className="input-field"
                                name="pets"
                                autoComplete="off"
                                value={element.pets || ""}
                                onChange={(e) => handleChange(index, e)}
                            >
                                <option value="">Mascota</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    {
                        index ? 
                        
                            <button type="button"  className="button remove column-b right" onClick={() => removeFormFields(index)}><FontAwesomeIcon icon={faTrashCan} /></button> 
                        :  <button className="button add column-b right" type="button" onClick={() => addFormFields()}><FontAwesomeIcon icon={faPlus} /></button>
                    }

                </div>
            ))}
        </>
    );
};

export default InputFieldPet;
