import './PrimaryButton.css'; 

const PrimaryButton = ({value, onClick}) => {
    return ( 
        <div className="input-box">
            <button className="btnPrimary" onClick={onClick}>{value}</button>
        </div>

    );
}
 
export default PrimaryButton;