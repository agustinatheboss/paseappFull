import { Carousel } from 'primereact/carousel';
import SectionHeader from '../SectionHeader';
import Card from '../../Card/Card';
import './ServicesInfo.css';
import data from '../../../db/data';
import { useNavigate } from 'react-router-dom';
// responsiveOptions={responsiveOptions}

const ServicesInfo = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    const navigate = useNavigate();

    const handleNewButtonClick = () => {
        // Aquí puedes definir los campos predeterminados que deseas pasar a la página de edición
        const defaultValues = {
            title: "Nombre del servicio",
            description: "Escribe aca una descripcion de tu servicio",
            price: "XX.XXX"
        };

        // Redirige a la página de detalle del producto en modo de edición
        navigate(`/product/new`);
    };
    return (
        <>
            <SectionHeader 
                title="MI SERVICIO" 
                buttonText={"Nuevo"} 
                onClick={handleNewButtonClick} 
            />
                <Carousel value={data} numVisible={2} numScroll={1}  itemTemplate={(product) => <Card product={product} />} />
                {/* itemTemplate={Card} */}
        </>
    );
};
    
export default ServicesInfo;