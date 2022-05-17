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
                <a href="https://github.com/jluna101/jluna101/files/8704265/Jesses.Resume.pdf"><button className='r-btn'><FontAwesomeIcon icon={faDownload}/></button></a>
            </p>
            <div>
                <img className='r-img' src="https://user-images.githubusercontent.com/97872070/168705417-f8309bba-9e43-4854-8919-476667950464.png" alt="" />
            </div>
        </div>
    );
}

export default Resume;