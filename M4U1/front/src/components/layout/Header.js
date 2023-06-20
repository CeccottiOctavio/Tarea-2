import logo from './logo.png'
import Styles from './Header.module.css';
const Header = (props) => {
    return(
        
        <div className={Styles.header}>
            <img className={Styles.img} src={logo} width="100" alt="Transporte X"/>
            <h1>Transporte X</h1>
        </div>
        
    )
        
    
}

export default Header;