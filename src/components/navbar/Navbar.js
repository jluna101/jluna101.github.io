import React, { useContext } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context.js';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div>
            <div className='n-wrapper' style={{backgroundColor: theme.state.darkMode? '#222': 'white'}}>
                    <section className='n-section-left'>
                        <Link className='n-link' to='/' style={{color: theme.state.darkMode? 'white': 'black'}}>
                            <p>Jesse Luna</p>
                        </Link>
                    </section>
                    <section className='n-section-right'>
                        <Link className='n-link' style={{color: darkMode && "white"}} to='/contact'><p>Contact</p></Link>
                        <Link className='n-link' style={{color: darkMode && "white"}} to='/projects'><p>Projects</p></Link>
                        <Link className='n-link' style={{color: darkMode && "white"}} to='/about'><p>About</p></Link>
                    </section>
            </div>
            <div className='t' style={{backgroundColor: theme.state.darkMode? 'white': 'black'}} > 
                <FontAwesomeIcon className= 't-icon moon' icon={faMoon}/>
                <FontAwesomeIcon className='t-icon sun' icon={faSun} style={{color: theme.state.darkMode? '#f8d568 ': 'white'}}/>
                <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0:25}}></div>
            </div>
        </div>
    );
}

export default Navbar;