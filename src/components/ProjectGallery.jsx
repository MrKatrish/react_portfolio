import React from 'react';
import { Carousel } from 'react-bootstrap';
import Project from './Project';
import projectData from '../../package.json';

const ProjectGallery = () => {
  return (
    <div>
      <h2>Project Gallery</h2>
      <Carousel>
        {projectData.map((project, index) => (
          <Carousel.Item key={index}>
            <Project project={project} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectGallery;
