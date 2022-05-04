import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context.js';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun, faBars} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


function Navbar(props) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    const sidebarData = [
        {
            title: 'Contact',
            link: '/contact',
        },
        {
            title: 'Projects',
            link: '/projects',
        },
        {
            title: 'Resume',
            link: '/resume',
        },
        {
            title: 'About',
            link: '/about',
        },
    ]
    const [nav, setNav] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setNav(!nav); 
    }
    const removeNavHome = (e) => {
        e.preventDefault()
        setNav(false)
    }
    return (
        <div>
            <div className='n-wrapper' style={{backgroundColor: darkMode &&'beige'}}>
                    <section className='n-section-left' onClick={removeNavHome} >
                        <Link className='n-link' to='/' style={{color: darkMode &&'black'}}>
                            <h3 className='n-link' style={{color: darkMode? 'black': 'white'}}>JESSE LUNA</h3>
                        </Link>
                    </section>
                    <section className='n-section-right'>
                        <Link className='n-link ' style={{color: darkMode && "black"}} to='/contact'><p>Contact</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/projects'><p>Projects</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/resume'><p>Resume</p></Link>
                        <Link className='n-link' style={{color: darkMode && "black"}} to='/about'><p>About</p></Link>
                    </section>
                    <button className='n-btn' onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    
            </div>
                {nav == true? 
                <div className='sidebar'>
                    <ul onClick={handleSubmit} className='sidebarList'>
                        {sidebarData.map((item, key) => {
                            return( 
                            <Link to={item.link} className='link'>
                                <li 
                                className='row' 
                                key={item.title}
                                id={window.location.pathname == item.link? "active":""}
                                >
                                    <div >{item.title}</div>
                                </li>
                            </Link>);
                        })}
                    </ul>
                </div>
                : <></>}

            <div className='t' style={{backgroundColor: theme.state.darkMode? 'white': 'beige', border: '1px solid black'}} > 
                <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0:25}}></div>
            </div>
            
        </div>
    );
}

export default Navbar;

