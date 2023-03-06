import {AiFillHome} from 'react-icons/ai';

import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <ul>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/Vo2Max">Vo2Max</Link>
            </li>
            <li>
                <Link to="/loadCalculator">Volume de Treino</Link>
            </li>
            <li>
                <Link to="/anthropometric">Composição Corporal</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar