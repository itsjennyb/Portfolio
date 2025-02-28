import React, { useState, useEffect } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Projects = () => {
    const [item, setItem] = useState({ name: 'apps' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'apps') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    
    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    };
    return (
        <div>
            <div className='work_filters'>
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => {
                            handleClick(e, index); }} className={`${active === index ? 'active-work' : ''} work_item`} key={index}>
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className='work_container container grid'>
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id}/>;
                })}
            </div>
        </div>
    )
}

export default Projects;