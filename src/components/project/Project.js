import React from 'react';
import './project.css'
import { Link } from 'react-router-dom';

function Project({ img, link, desc, title }) {
    return (
        <div className='p-cont'>
                <h4 className='p-desc'>{title}</h4>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt={title} className='p-img' />
                </a>
            </div>
        </div>
    );
}

export default Project;