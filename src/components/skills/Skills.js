import React, { useContext } from 'react';
import { ThemeContext } from '../../context.js';
import './skills.css';

function Skills(props) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='s' style={{backgroundColor: darkMode && 'beige', color: darkMode && '#222'}}>
            <div className='s-texts'>
                <h1 className='s-title'>Technologies</h1>
                <p className='s-p'>
                    Below are a few of technologies I have experience with.
                </p>
                <div className='s-desc'>
                    <li>HTML/CSS</li>
                    <li>Bootstrap v5</li>
                    <li>JavaScript (Node.js, ReactJS, jQuery)</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </div>
            </div>
        </div>
    );
}

export default Skills;