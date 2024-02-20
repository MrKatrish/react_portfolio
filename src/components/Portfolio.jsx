import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const projects = [
    {
        title: "Team Profile Generator",
        description: "Generate team profiles using Node.js",
        image: "src/assets/cards/Team Profile Generator.png",
        deployedLink: "https://mrkatrish.github.io/team_profile_generator/",
        githubLink: "https://github.com/MrKatrish/team_profile_generator"
    },
    {
        title: "README Generator",
        description: "Generate README files using Node.js",
        image: "src/assets/cards/README Generator.png", 
        deployedLink: "https://github.com/MrKatrish/README_Generator",
        githubLink: "https://github.com/MrKatrish/README_Generator"
    },
    {
        title: "CurioCity",
        description: "Explore various cities around the world",
        image: "src/assets/cards/CurioCity.png",
        deployedLink: "https://mrkatrish.github.io/CurioCity/",
        githubLink: "https://github.com/MrKatrish/CurioCity"
    },
    {
        title: "Weather Dashboard",
        description: "Check the weather forecast for any city",
        image: "src/assets/cards/Weather Dashboard.png",
        deployedLink: "https://mrkatrish.github.io/weather_dashboard/",
        githubLink: "https://github.com/MrKatrish/weather_dashboard"
    },
    {
        title: "Work Day Scheduler",
        description: "Plan your workday efficiently",
        image: "src/assets/cards/Work Day Schedule.png", 
        deployedLink: "https://mrkatrish.github.io/work_day_scheduler/",
        githubLink: "https://github.com/MrKatrish/work_day_scheduler"
    },
    {
        title: "Code Quiz",
        description: "Test your coding knowledge with a quiz",
        image: "src/assets/cards/Code Quiz.png", 
        deployedLink: "https://mrkatrish.github.io/code_quiz/",
        githubLink: "https://github.com/MrKatrish/code_quiz"
    }
];

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true, 
        });
    }, []);

    return (
        <Element name="portfolio" className="portfolio-section">
            <div className="grid-container mb-5">
                <Container className="my-5">
                    <Row>
                        <Col>
                            <h2 className="text-center title mb-5">Portfolio</h2>
                        </Col>
                    </Row>
                    <Row>
                        {projects.map((project, index) => (
                            <Col md={4} key={index} className="project-card-col mb-5">
                                <div className="project-card" onMouseEnter={() => {/* Obsługa hover */}} onMouseLeave={() => {/* Obsługa hover */}}>
                                    <img src={project.image} alt={project.title} className="project-image"/>
                                    <div className="project-info">
    <h5>{project.title}</h5>
    <p>{project.description}</p>
    <div className="project-card-btns">
        <Button variant="primary" href={project.deployedLink} target="_blank">Live Demo</Button>
        <Button variant="secondary" href={project.githubLink} target="_blank">GitHub</Button>
    </div>
</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Element>
    );
}

export default Portfolio;