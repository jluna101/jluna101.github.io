import React, { useContext } from 'react';
import Project from '../project/Project';
import './projectList.css'
import { projects } from '../../data';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context.js';

function ProjectList(props) {
    // Darkmode theme
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h2 className='pl-title'> Projects</h2>
                <p className='pl-desc'>
                    For details such as technologies used & documentation visit my Project gallery&nbsp;
                    <Link to='/projects' className='' style={{color: darkMode? "white": "black"}}>here</Link>
                    .
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} desc={item.desc} title={item.title}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;