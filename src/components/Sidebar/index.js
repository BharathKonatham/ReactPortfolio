import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import logoB from '../../assets/images/49495205_0.jpg'
//import LogoS from '../../assets/images/449495205_0.jpg' 
import bharath from '../../assets/images/Bharat-designstyle-summer-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faSkype, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={logoB} alt='logo' />
                <img className="sub-logo" src={bharath} alt='slobodan' />
            </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"> 
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
       <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bharath-konatham-146038131/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/BharathKonatham'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='' onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='' onClick={e => e.preventDefault()} >
                <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
            </a>
        </li>
       </ul>
        </div>
    )

}

export default Sidebar