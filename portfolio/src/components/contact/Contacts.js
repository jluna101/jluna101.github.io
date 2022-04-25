import React from 'react';
import "./contact.css"
import { useRef } from 'react';

function Contacts(props) {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>    
            <div className='c-wrapper'>
                <div className='c-left'></div>
                    <h1 className='c-title'>Feel free to reach out</h1>
                    <div className='c-info'>
                        <div className="c-info-item">
                            <img 
                                src="" 
                                alt=""
                                className='c-icon' />
                                562 382 0734
                        </div>
                        <div className="c-info-item">
                            <img 
                                src="" 
                                alt=""
                                className='c-icon' />
                                Jfluna1996@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src="" 
                                alt=""
                                className='c-icon' />
                                Huntington Park, CA
                        </div>
                    </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        This is a description
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;