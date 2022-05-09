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
        <div className='f-cont' style={{ backgroundColor: darkMode && 'beige',
            color: darkMode && "black"}}>
            <div className='f' >
                <div className='f-space'></div>
                
                <div className='f-texts'>Contact&nbsp;| </div>
                <div>
                    <a href="http://Linkedin.com/in/jesse-fernando-luna/" target="_blank" rel="noreferrer" className='link f-icons' style={{color: darkMode && "black"}}>Linkedin <FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
                <div>
                    <a href="https://github.com/jluna101" target="_blank" rel="noreferrer" className='link f-icons' style={{color: darkMode && "black"}}>Github <FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <div>
                    <a className='link f-icons' href="mailto:jfluna1996@gmail.com" target="_blank">Email <FontAwesomeIcon icon={faEnvelope}/></a>
                </div>

                
            </div>
            <div className='f-copyright'>
                    © 2022 Jesse Luna 
            </div>
        </div>
    );
}

export default Footer;