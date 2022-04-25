import React from 'react';
import Project from '../project/Project';
import './projectList.css'
import { projects } from '../../data';

function ProjectList(props) {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'> Projects</h1>
                <p className='pl-desc'>
                    Below are recent projects 
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;