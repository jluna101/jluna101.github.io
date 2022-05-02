import React from 'react';
import Project from '../project/Project';
import './projectList.css'
import { projects } from '../../data';
import { Link } from 'react-router-dom';

function ProjectList(props) {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'> Projects</h1>
                <p className='pl-desc'>
                    Below are a few projects completed this year. For details such as technologies used & documentation please visit my Project gallery&nbsp;
                    <Link to='/projects'>here</Link>
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