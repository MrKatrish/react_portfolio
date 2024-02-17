import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '2rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={deployedLink} target="_blank">View Project</Button>
        <Button variant="secondary" href={githubLink} target="_blank" style={{ marginLeft: '10px' }}>GitHub</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
