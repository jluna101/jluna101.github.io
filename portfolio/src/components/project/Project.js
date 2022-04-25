import React from 'react';
import './project.css'

function Project({ img, link}) {
    console.log(link);
    return (
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
    );
}

export default Project;