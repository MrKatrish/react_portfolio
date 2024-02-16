import React from 'react';
import projectsData from '';
import Project from './Project';

const ProjectGallery = () => {
    return (
        <div className="container mt-5">
            <h2>Projects</h2>
            <div className="row">
                {projectsData.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;
