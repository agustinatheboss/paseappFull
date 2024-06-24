import { Carousel } from 'primereact/carousel';
import SectionHeader from '../SectionHeader';
import Card from '../../Card/Card';
import './ServicesInfo.css';
import data from '../../../db/data';
// responsiveOptions={responsiveOptions}

const ServicesInfo = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
        <>
            <SectionHeader 
                title="MI SERVICIO" 
                buttonText={"Nuevo"} 
                onClick={""} 
            />
                <Carousel value={data} numVisible={2} numScroll={1}  itemTemplate={Card} />
        </>
    );
};
    
export default ServicesInfo;