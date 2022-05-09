import React, { useContext } from 'react';
import { ThemeContext } from '../../context.js';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

function Resume(props) {
    document.title = "Resume | Portfolio"
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='r'>
            <h1 className='r-title'>Resume</h1>

            <p className='r-texts'>
                <a href="https://git.generalassemb.ly/SEI-124/Unit-Two-Notes/files/4010/JesseLuna-Resume.pdf"><button className='r-btn'><FontAwesomeIcon icon={faDownload}/></button></a>
            </p>
            <div>
                <img className='r-img' src="https://media.git.generalassemb.ly/user/41257/files/9e121500-cd47-11ec-9274-2aed275be379" alt="" />
            </div>
        </div>
    );
}

export default Resume;