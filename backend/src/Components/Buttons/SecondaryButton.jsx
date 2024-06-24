import './SecondaryButton.css'; 

const SecondaryButton = ({value, onClick}) => {
    return ( 
        <div className="input-box">
            <button className="btnSecondary" onClick={onClick}>{value}</button>
        </div>

    );
}
 
export default SecondaryButton;