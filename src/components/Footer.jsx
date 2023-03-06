import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiVercel } from 'react-icons/si';

import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
     <nav className={styles.footer}>
        <ul>
            <li>
              <AiFillGithub />  <a href='https://github.com/eduvinicius' target="_blank">Github</a>
            </li>
            <li>
              <AiFillLinkedin />  <a href='https://www.linkedin.com/in/eduardo-viniciusb/' target="_blank">Linkedin</a>
            </li>
            <li>
               <SiVercel/> <a href='https://vercel.com/eduvinicius' target="_blank">Vercel</a>
            </li>
        </ul>
     </nav>
  )
}

export default Footer