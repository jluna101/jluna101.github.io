import React, { useContext } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context.js';

function Navbar(props) {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div>
            <div className='n-wrapper'>
                    <section className='n-section-left'>
                        <p>Jesse Luna</p>
                    </section>
                    <section className='n-section-right'>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Projects</p>
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