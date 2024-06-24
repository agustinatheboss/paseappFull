import './AlternativeButton.css'; 

const AlternativeButton = ({value, onClick}) => {
    return ( 
        <div className="input-box">
            <button className="btnAlternative" onClick={onClick}>{value}</button>
        </div>

    );
}
 
export default AlternativeButton;