import React from 'react';
import Project from './Project';
import projectData from '../../package.json';

const ProjectGallery = () => {
  return (
    <div>
      <h2>Project Gallery</h2>
      {projectData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
