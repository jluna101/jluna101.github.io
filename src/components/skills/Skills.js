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
                        <h4>Proficient</h4>
                        <img id='badge' src="https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=plastic-square&logo=javascript&logoColor=yellow" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/React.js%20-%23323330.svg?&style=plastic-square&logo=React&logoColor=informational" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Bootstrap%20-%23323330.svg?&style=plastic-square&logo=bootstrap&logoColor=blueviolent" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Node.js%20-%23323330.svg?&style=plastic-square&logo=Node.js&logoColor=green" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/JQuery%20-%23323330.svg?&style=plastic-square&logo=jquery&logoColor=blue" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Git%20-%23323330.svg?&style=plastic-square&logo=Git&logoColor=critical" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/GitHub%20-%23323330.svg?&style=plastic-square&logo=GitHub&logoColor=inactive" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/CSS%20-%23323330.svg?&style=plastic-square&logo=css3&logoColor=blue" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/HTML%20-%23323330.svg?&style=plastic-square&logo=html5&logoColor=important" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Invision%20-%23323330.svg?&style=plastic-square&logo=invision&logoColor=%ff69b4" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Heroku%20-%23323330.svg?&style=plastic-square&logo=heroku&logoColor=blueviolent" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Canva%20-%23323330.svg?&style=plastic-square&logo=canva&logoColor=blue" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Postman%20-%23323330.svg?&style=plastic-square&logo=postman&logoColor=important" alt="" />
                        <h4>Some Experience</h4>
                        <img id='badge' src="https://img.shields.io/badge/Express%20-%23323330.svg?&style=plastic-square&logo=express&logoColor=inactive" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/PostgreSQL%20-%23323330.svg?&style=plastic-square&logo=postgresql&logoColor=violent" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/MySQL%20-%23323330.svg?&style=plastic-square&logo=mysql&logoColor=orange" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/SQLite%20-%23323330.svg?&style=plastic-square&logo=sqlite&logoColor=blue" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/MongoDB%20-%23323330.svg?&style=plastic-square&logo=mongodb&logoColor=green" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Mongoose%20-%23323330.svg?&style=plastic-square&logo=mongoose&logoColor=important" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Python%20-%23323330.svg?&style=plastic-square&logo=python&logoColor=yellow" alt="" />
                        <img id='badge' src="https://img.shields.io/badge/Django%20-%23323330.svg?&style=plastic-square&logo=django&logoColor=yellowgreen" alt="" />

                </div>
            </div>
        </div>
    );
}

export default Skills;