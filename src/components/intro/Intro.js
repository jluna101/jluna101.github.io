import React, { useContext } from 'react';
import { ThemeContext } from '../../context.js';
import "./intro.css";

function Intro(props) {
    // Page title
    document.title = "Welcome to Jesse's Portfolio"
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Welcome to My Portfolio</h2>
                    <h1 className='i-name'> Jesse</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>Full-Stack Developer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                    I’m a fullstack developer with a passion for building functional software. During college, I worked as an instructional design assistant for the school, considering the user-experience for every course I created. After graduation, I worked for three years supervising a team of 20+ staff and managing all operations for a large-scale warehouse. In that role, I helped implement a new warehouse management system, which involved partnering with software engineers, selecting the best system,  and then training staff on the software. This exposure to tech was what inspired me to get into software development.
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg" style={{backgroundColor: darkMode &&'beige'}}></div>
                <div>
                    <img src='https://user-images.githubusercontent.com/97872070/166394507-e35883ad-48aa-4dab-a7bf-eeaae95e1fcf.png' alt="Jesse Luna" className='i-img'/>
                </div>
            </div>
        </div>
    );
} 

export default Intro;