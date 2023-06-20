import { Link } from "react-router-dom";
import Styles from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.aling}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Servicio">Servicio</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
