import React, { useContext, useRef, useState } from 'react';
import "./contact.css"
import { ThemeContext } from '../../context.js';
import emailjs from "emailjs-com";
import {faPhone, faEnvelope, faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Contacts(props) {
    // Page Title 
    document.title = "Portfolio | Contact"
    const formRef = useRef()
    const [done, setDone] = useState(false)
    // Submit Email Form
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_cwozpkb', 
                'template_fzzj0rn', 
                formRef.current, 'M7s3qMX_DWZ2Hf046')
            .then((result) => {
            console.log(result.text);
            setDone(true)
            e.target.reset()
            }, (error) => {
            console.log(error.text);
        });
    }
    // Darkmode theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='c'>
            <div className="c-bg"></div>    
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Contact Me</h1>
                    <div className='c-info'>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faPhone}/>&nbsp;
                            562 382 0734
                        </div>
                        <div className="c-info-item" style={{color: darkMode && "white"}}>
                            <FontAwesomeIcon icon={faLinkedin}/>&nbsp;
                            <a href="http://Linkedin.com/in/jesse-fernando-luna/" target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "white"}}>Linkedin</a>
                        </div>
                        <div className="c-info-item" style={{color: darkMode && "white"}}>
                            <FontAwesomeIcon icon={faGithub}/>&nbsp;
                            <a href="https://github.com/jluna101" target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "white"}}>Github</a>
                        </div>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faEnvelope}/>&nbsp;
                            <a className='link' href="mailto:jfluna1996@gmail.com" target="_blank">Jfluna1996@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faMapPin}/>&nbsp;
                            Huntington Park, CA
                        </div>
                    </div>
                    </div>
                <div className='c-right'>
                    <h2 className='c-desc'>
                        You can also reach me here
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && <div className='c-sent'>' Sent! Thank you' </div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;