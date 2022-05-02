import React from 'react';
import './resume.css';

function Resume(props) {
    document.title = "Resume | Portfolio"
    return (
        <div className='r'>
            <h1 className='r-title'>Resume</h1>

            <p className='r-texts'>Download &nbsp;
            <a href="https://github.com/jluna101/ur-crypto-frontend/files/8605425/Jesse.Luna.-.Resume.pdf">Here</a>
            </p>
            <img className='r-img' src="https://user-images.githubusercontent.com/97872070/166309227-72f38785-67fb-4467-9968-dce03b61c903.jpg" alt="" />
        </div>
    );
}

export default Resume;