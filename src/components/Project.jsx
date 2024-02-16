// Project.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

// Project component responsible for rendering each project as a card
const Project = ({ title, description, image, deployedLink, githubLink }) => {
    return (
        <Card className="m-5 text-center">
            {/* Display project image */}
            <Card.Img variant="top" src={image} />
            <Card.Body>
                {/* Display project title and description */}
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {/* Button to view deployed version of the project */}
                <Button variant="primary" href={deployedLink} target="_blank">View Deployed</Button>
                {/* Button to view GitHub repository */}
                <Button variant="secondary" href={githubLink} target="_blank">GitHub</Button>
            </Card.Footer>
        </Card>
    );
}

export default Project;
