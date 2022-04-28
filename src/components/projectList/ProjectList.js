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
                    Take a glance at my projects. If you have any questions feel free to ask! 
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