import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/paseapp-logo.png';

const Navbar = () => {
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
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Pedidos</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>
            <div className="logo"><img src={ logo } alt="PASEAPP" /></div>
        </div>
    </nav>
     );
}
 
export default Navbar;