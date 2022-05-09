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
                <h2 className='s-title'>Technologies</h2>
                <p className='s-p'>
                    Below are a most of the technologies I have worked with.
                </p>
                <div className='s-cont'>
                    {/* <div className='s-desc'>
                        <h4>Proficient</h4>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Bootstrap v5</li>
                        <li>Node.js</li>
                        <li>JQuery</li>
                        <li>Git/Github</li>
                    </div>
                    <div className='s-desc'>
                        <h4>&nbsp;</h4>
                        <li>CSS/HTML</li>
                        <li>Invision</li>
                        <li>Heroku</li>
                        <li>Canva</li>
                        <li>Postman</li>
                        <li>Microsoft Office</li>
                    </div>
                    <div className='s-desc'>
                        <h4>Some Experience</h4>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </div>
                    <div className='s-desc'>
                        <h4>&nbsp;</h4>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </div>  */}
                    <div className='s-desc'>
                        <h4>Proficient</h4>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                        <li>JQuery</li>
                        <li>Git/Github</li>
                        <li>CSS/HTML</li>
                        <li>Invision</li>
                        <li>Heroku</li>
                        <li>Canva</li>
                        <li>Postman</li>
                    </div>
                    <div className='s-desc'>
                        <h4>Some Experience</h4>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;