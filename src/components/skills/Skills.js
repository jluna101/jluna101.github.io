import React from 'react';
import './skills.css';

function Skills(props) {
    return (
        <div className='s'>
            <div className='s-texts'>
                <h1 className='s-title'>Technologies</h1>
                <p className='s-p'>
                    Below are a few of tecnologies I have experience with.
                </p>
                <div className='s-desc'>
                    <li>HTML/CSS</li>
                    <li>Bootstrap v5</li>
                    <li>JavaScript (Node.js/ReactJS/jQuery)</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </div>
            </div>
        </div>
    );
}

export default Skills;