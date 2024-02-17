import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Team Profile Generator",
        description: "Generate team profiles using Node.js",
        image: "https://via.placeholder.com/150",
        deployedLink: "https://mrkatrish.github.io/team_profile_generator/",
        githubLink: "https://github.com/MrKatrish/team_profile_generator"
    },
    {
        title: "README Generator",
        description: "Generate README files using Node.js",
        image: "https://via.placeholder.com/150", 
        deployedLink: "https://github.com/MrKatrish/README_Generator",
        githubLink: "https://github.com/MrKatrish/README_Generator"
    },
    {
        title: "CurioCity",
        description: "Explore various cities around the world",
        image: "https://via.placeholder.com/150",
        deployedLink: "https://mrkatrish.github.io/CurioCity/",
        githubLink: "https://github.com/MrKatrish/CurioCity"
    },
    {
        title: "Weather Dashboard",
        description: "Check the weather forecast for any city",
        image: "https://via.placeholder.com/150",
        deployedLink: "https://mrkatrish.github.io/weather_dashboard/",
        githubLink: "https://github.com/MrKatrish/weather_dashboard"
    },
    {
        title: "Work Day Scheduler",
        description: "Plan your workday efficiently",
        image: "https://via.placeholder.com/150", 
        deployedLink: "https://mrkatrish.github.io/work_day_scheduler/",
        githubLink: "https://github.com/MrKatrish/work_day_scheduler"
    },
    {
        title: "Code Quiz",
        description: "Test your coding knowledge with a quiz",
        image: "https://via.placeholder.com/150", 
        deployedLink: "https://mrkatrish.github.io/code_quiz/",
        githubLink: "https://github.com/MrKatrish/code_quiz"
    }
];

const Portfolio = () => {
    return (
      <Container>
          <h2 className="m-5 text-center">Project Gallery</h2>
          <Row>
              {projects.map((project, index) => (
                  <Col key={index} md={4}>
                      <ProjectCard {...project} />
                  </Col>
              ))}
          </Row>
      </Container>
    );
  }
  
  export default Portfolio;