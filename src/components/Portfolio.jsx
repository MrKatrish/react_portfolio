import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

import teamProfileGeneratorImg from '../assets/cards/Team Profile Generator.png';
import readmeGeneratorImg from '../assets/cards/README Generator.png';
import curioCityImg from '../assets/cards/CurioCity.png';
import weatherDashboardImg from '../assets/cards/Weather Dashboard.png';
import workDayScheduleImg from '../assets/cards/Work Day Schedule.png';
import codeQuizImg from '../assets/cards/Code Quiz.png';

const projects = [
    {
        title: "Team Profile Generator",
        description: "Generate team profiles using Node.js",
        image: teamProfileGeneratorImg,
        deployedLink: "https://mrkatrish.github.io/team_profile_generator/",
        githubLink: "https://github.com/MrKatrish/team_profile_generator"
    },
    {
        title: "README Generator",
        description: "Generate README files using Node.js",
        image: readmeGeneratorImg, 
        deployedLink: "https://github.com/MrKatrish/README_Generator",
        githubLink: "https://github.com/MrKatrish/README_Generator"
    },
    {
        title: "CurioCity",
        description: "Explore various cities around the world",
        image: curioCityImg,
        deployedLink: "https://mrkatrish.github.io/CurioCity/",
        githubLink: "https://github.com/MrKatrish/CurioCity"
    },
    {
        title: "Weather Dashboard",
        description: "Check the weather forecast for any city",
        image: weatherDashboardImg,
        deployedLink: "https://mrkatrish.github.io/weather_dashboard/",
        githubLink: "https://github.com/MrKatrish/weather_dashboard"
    },
    {
        title: "Work Day Scheduler",
        description: "Plan your workday efficiently",
        image: workDayScheduleImg, 
        deployedLink: "https://mrkatrish.github.io/work_day_scheduler/",
        githubLink: "https://github.com/MrKatrish/work_day_scheduler"
    },
    {
        title: "Code Quiz",
        description: "Test your coding knowledge with a quiz",
        image: codeQuizImg, 
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
                            <Col md={4} key={index} className="mb-5"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    deployedLink={project.deployedLink}
                                    githubLink={project.githubLink}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Element>
    );
}

export default Portfolio;