import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/paseapp-logo.png';

const Navbar = () => {
    return ( 
        <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""></input>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Pedidos</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>
            <div class="logo"><img src={ logo } alt="Italian Trulli" /></div>
        </div>
    </nav>
     );
}
 
export default Navbar;