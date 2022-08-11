import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/dinesh.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'



function SideBar(){
    return(
        <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/Projects">
                <FontAwesomeIcon icon={faEye} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dvs-dinesh-kumar/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/dinesh671">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Dinesh6701">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dinesh_kumar_671/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
    )
}
export default SideBar;