import React, { useContext, useRef, useState } from 'react';
import "./contact.css"
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context.js';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';



function Contacts(props) {
    const formRef = useRef()
    const [done, setDone] = useState(false)
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
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faLinkedin}/>&nbsp;
                             <a href="http://Linkedin.com/in/jesse-fernando-luna/" target="_blank" rel="noreferrer">My Linkedin</a>
                        </div>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faEnvelope}/>&nbsp;
                            Jfluna1996@gmail.com
                        </div>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faMapPin}/>&nbsp;
                            Huntington Park, CA
                        </div>
                    </div>
                    </div>
                <div className='c-right'>
                    <h2 className='c-desc'>
                        Below is how you can reach me
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