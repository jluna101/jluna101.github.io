import React, { useContext } from 'react';
import { ThemeContext } from '../../context.js';
import './project.css'
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';

function Project({ img, link, desc, title }) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <a href={link} className='link p-cont' target="_blank" rel="noreferrer">
            <h4 className='p-desc' style={{color: darkMode && "white"}}>{title}</h4>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                
                    <img src={img} alt={title} className='p-img' />
            </div>
            </a>
        </div>
    );
}

export default Project;