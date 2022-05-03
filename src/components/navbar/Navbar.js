import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context.js';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


function Navbar(props) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div>
            <div className='n-wrapper' style={{backgroundColor: theme.state.darkMode &&'beige'}}>
                    <section className='n-section-left' >
                        <Link className='n-link' to='/' style={{color: theme.state.darkMode &&'black'}}>
                            <h3 className='n-link'>JESSE LUNA</h3>
                        </Link>
                    </section>
                    <section className='n-section-right'>
                        <Link className='n-link ' style={{color: darkMode && "black"}} to='/contact'><p>Contact</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/projects'><p>Projects</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/resume'><p>Resume</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/about'><p>About</p></Link>
                        {/* <div className='n-icon'>
                        <a href="https://github.com/jluna101" target="_blank" rel="noreferrer" style={{color: darkMode && "black"}}><FontAwesomeIcon icon={faGithub}/></a>&nbsp; &nbsp;
                        <a href="http://Linkedin.com/in/jesse-fernando-luna/" target="_blank" rel="noreferrer" style={{color: darkMode && "black"}}><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div> */}
                    </section>
                    
            </div>
                {/* <div className='n-section-right-m'>
                        <div className='n-section-right-mobile'>
                            <Link className='n-link' style={{color: darkMode && "black"}} to='/contact'><p className='n-p'>Contact</p></Link>
                            <Link className='n-link' style={{color: darkMode && "black"}} to='/projects'><p className='n-p'>Projects</p></Link>
                            <Link className='n-link' style={{color: darkMode && "black"}} to='/resume'><p className='n-p'>Resume</p></Link>
                            <Link className='n-link' style={{color: darkMode && "black"}} to='/about'><p className='n-p'>About</p></Link>
                        </div>
                </div> */}
            <div className='t' style={{backgroundColor: theme.state.darkMode? 'white': 'black'}} > 
                <FontAwesomeIcon className= 't-icon moon' icon={faMoon}/>
                <FontAwesomeIcon className='t-icon sun' icon={faSun} style={{color: theme.state.darkMode? '#f8d568 ': 'white'}}/>
                <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0:25}}></div>
            </div>
        </div>
    );
}

export default Navbar;