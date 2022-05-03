import React, { useContext } from 'react';
import { ThemeContext } from '../../context.js';
import './footer.css'
import {faPhone, faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='f' style={{ backgroundColor: darkMode && 'beige',
        color: darkMode && "black",}}>
            <div className='f-space'></div>
            <div className='f-texts'>
                © 2022 Jesse Luna 
            </div>
            <div className='f-icons'>Contact Me: 
            &nbsp; &nbsp;
            <a href="http://Linkedin.com/in/jesse-fernando-luna/" target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "black"}}><FontAwesomeIcon icon={faLinkedin}/></a>
            &nbsp; &nbsp;
            <a href="https://github.com/jluna101" target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "black"}}><FontAwesomeIcon icon={faGithub}/></a>
            &nbsp; &nbsp;
            <a className='link' href="mailto:jfluna1996@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
            </div>
        </div>
    );
}

export default Footer;