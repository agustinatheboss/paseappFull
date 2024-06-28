
import SectionHeader from '../SectionHeader';
import { useNavigate } from 'react-router-dom';


const RequestsInfo = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    const navigate = useNavigate();
    
    const handleConsultClick = () => {
        const userData = JSON.parse(window.sessionStorage.getItem("user"));
        if (userData && userData._id) {
            navigate(`/requests/${userData._id}`);
        } else {
            navigate('/login'); // Redirigir al login si no hay usuario
        }
    };
    return (
        <>
            <SectionHeader 
                title="MIS PEDIDOS" 
                buttonText={"Consultar"} 
                onClick={handleConsultClick} 
            />
        </>
    );
};
    
export default RequestsInfo;