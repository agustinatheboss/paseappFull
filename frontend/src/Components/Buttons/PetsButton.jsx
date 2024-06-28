import "./PetsButton.css";
import { FaDog, FaCat, FaFishFins } from "react-icons/fa6";


const PetsButton = ({item, selected, onClick}) => {
    const handleClick = () => {
        onClick(item); // Llama a la función onClick con el nombre del elemento
    };

    const getIcon = (petType) => {
        switch (petType) {
            case 'Perro':
                return <FaDog className="pet-icon-a" title={item}/>;
            case 'Gato':
                return <FaCat className="pet-icon-a" title={item}/>;
            case 'Peces':
                return <FaFishFins className="pet-icon-a" title={item}/>;
          // Añadir más casos según los tipos de mascotas que manejes
            default:
                return null;
        }
      };
      const iconClass = selected ? "circle-icon-a selected" : "circle-icon-a not-selected";
      return (
        <div className={iconClass} onClick={onClick}>{getIcon(item)}</div>
    );
};
    
export default PetsButton;
    {/*
    const iconClass = selected ? "circle-icon-a selected" : "circle-icon-a not-selected";
    return ( 
        <div className={iconClass} onClick={onClick}><FaDog className="pet-icon-a" title={item} /></div>

    ); 
}
 
export default PetsButton; */}