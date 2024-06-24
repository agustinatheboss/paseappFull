import "./PetsButton.css";
import { FaDog } from "react-icons/fa6";

const PetsButton = ({item, selected,onClick}) => {
    const iconClass = selected ? "circle-icon-a selected" : "circle-icon-a not-selected";
    return ( 
        <div className={iconClass} onClick={onClick}><FaDog className="pet-icon-a" title={item} /></div>

    );
}
 
export default PetsButton;