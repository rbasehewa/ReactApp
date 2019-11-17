import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.projects.map(project => (
            <h1 key={project.id}>{project.name} </h1>
        ))}
    </div>
);