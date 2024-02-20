import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const ProjectCard = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="project-card"> 
      <img src={image} alt={title} className="project-image"/>
      <div className="project-info">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="project-card-btns">
          <Button variant="primary" href={deployedLink} target="_blank">Live Demo</Button>
          <Button variant="secondary" href={githubLink} target="_blank">GitHub</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
