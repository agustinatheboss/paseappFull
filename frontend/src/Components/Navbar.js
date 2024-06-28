import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IoMdExit } from "react-icons/io";
import logo from '../images/paseapp-logo.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const userDataJSON = window.sessionStorage.getItem('user');
    const userData = userDataJSON ? JSON.parse(userDataJSON) : null;
    //const userData = JSON.parse(window.sessionStorage.getItem('user'));
    const userType = window.sessionStorage.getItem('userType');
    //const userData = true;
    //const userType = "paseador";

    const handleLogout = () => {
        // Limpiar sessionStorage
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('userType');
        // Redireccionar al login
        navigate('/login');
    };

    const redirectToProfile = () => {
        if (userData) {
            if (userType === 'paseador') {
                navigate('/profile');
            } else {
                navigate('/profile');
            }
        } else {
            navigate('/login');
        }
    };

    const redirectToServices = () => {
        if (userData) {
            if (userType === 'paseador') {
                navigate('/profile');
            } else {
                navigate('/services');
            }
        } else {
            navigate('/login');
        }
    };

    const redirectToRequests = () => {
        if (userData) {
            if (userType === 'paseador') {
                navigate(`/requests/${userData._id}`);
            } else {
                navigate('/profile');
            }
        } else {
            navigate('/login');
        }
    };

    return ( 
        <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""></input>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a onClick={redirectToServices}>Servicios</a></li>
                <li><a onClick={redirectToRequests}>Pedidos</a></li>
                <li><a onClick={redirectToProfile}><FontAwesomeIcon icon={faUser} /></a></li>
                <li><a onClick={handleLogout}><IoMdExit size={22} /></a></li>
            </ul>
            <div className="logo"><img src={ logo } alt="PASEAPP" /></div>
        </div>
    </nav>
     );
}
 
export default Navbar;