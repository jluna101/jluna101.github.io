import React, { useRef, useState } from 'react';
import "./contact.css"
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';

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
            }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>    
            <div className='c-wrapper'>
                <div className='c-left'></div>
                    <h1 className='c-title'>Contact Me</h1>
                    <div className='c-info'>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon={faPhone}/>&nbsp;
                            562 382 0734
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
                <div className='c-right'>
                    <p className='c-desc'>
                        Feel Free to reach out via phone or email!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && " Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;