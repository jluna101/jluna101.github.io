import React from 'react';
import './project.css'

function Project({ img, link, desc, title }) {
    return (
        <div className='p-cont'>
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className='p-img' />
            </a>
        </div>
            <div className='p-desc'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Project;