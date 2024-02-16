import React from 'react';
import { useParams } from 'react-router-dom';

const Project = ({ project }) => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.deployedLink}>View Deployed</Button>
                <Button variant="secondary" href={project.githubLink}>GitHub</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;
