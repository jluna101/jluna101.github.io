import React, { useContext, useState } from 'react';
import './projectListDetails.css';
import { projects } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../context.js';
import { Link } from 'react-router-dom';
 
function ProjectListDetails(props) {
    // Page Title
    document.title = "Projects | Portfolio"
    // Darkmode Theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    // Read More State
    const [readMore, setReadMore] = useState(false)
    const handleClick = (event) => {
        event.preventDefault();
        setReadMore(!readMore)
    }
    return (
        <div className='pld-cont'>
            <div className='pld-texts'>
                <h1 className='pldd-title' > Projects</h1>
                <p className='pldd-desc'>
                    Below are all the projects i've completed 2022 thus far. If you have any questions, feel free to&nbsp;
                    <Link to='/contact' style={{color: darkMode? "white" : "black"}}>contact</Link>
                    &nbsp;me.
                </p>
            </div>
            <div className="pl-list">
                    {projects.map((item) => (
                        <div className='pld-cont-map' key={item.title}>
                            <a href={item.link} className='link' target="_blank" rel="noreferrer">
                            <div>
                                <h2 className='pld-title' style={{color: darkMode && "white"}}>{item.title}</h2>
                            </div>
                            <div className='pld'>
                                <div className="p-browser">
                                    <div className="p-circle"></div>
                                    <div className="p-circle"></div>
                                    <div className="p-circle"></div>
                                </div>
                                        <img src={item.img} alt={item.title} className='pld-img'/>
                                </div>
                                </a>
                            <div className='pld-desc' >
                                <p className='pld-tag'>
                                    <br/>
                                    {readMore == false? item.shortDesc
                                    
                                    : item.desc} &nbsp;<button onClick={handleClick} className='pld-btn' style={{color: darkMode && "white", backgroundColor: darkMode && "#222"}}>{readMore == false? 'Read More': 'Read Less'}</button>
                                    </p>
                                <p className='gh-tag'>
                                    <a href={item.ghFront} target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "white"}}><FontAwesomeIcon className='p-icon' icon={faGithub}/> Frontend</a>
                                </p>
                                {item.ghBack? 
                                <p className='gh-tag'>
                                    <a href={item.ghBack} target="_blank" rel="noreferrer" className='link' style={{color: darkMode && "white"}}><FontAwesomeIcon className='p-icon' icon={faGithub}/> Backend</a>
                                </p>: null }
                                
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default ProjectListDetails;