import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';
import profileImg from '../assets/profile-picture.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    new PureCounter();
  }, []);

  return (
    <>
      {/* About Section */}
      <Element name="About" className="about-section">
          <div className="grid-container mb-5">
        <section className="about">
          <div className="container">
            <div className="section-title">
              <h2 className="text-center mb-5 mt-5 title">About</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={profileImg} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content mt-5" data-aos="fade-left">
                <h3>UI/UX Designer & Web Developer.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut...
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
      </Element>

      <Element name="facts" className="facts-section">
  <section id="facts" className="facts grid-container mt-5 mb-5">
    <div className="container">
      <div className="section-title">
        <h2 className="text-center mb-5 title">Facts</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>
      </div>

      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div className="count-box">
            <i className="bi bi-emoji-smile"></i>
            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Happy Clients</strong> consequuntur quae</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="count-box">
            <i className="bi bi-journal-richtext"></i>
            <span data-purecounter-start="0" data-purecounter-end="22" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Projects</strong> adipisci atque cum quia aut</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <div className="count-box">
            <i className="bi bi-headset"></i>
            <span data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
          <div className="count-box">
            <i className="bi bi-people"></i>
            <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</Element>

<Element name="skills" className="skills-section">
  <section id="skills" className="skills section-bg grid-container mt-5 mb-5">
    <div className="container">
      <div className="section-title">
        <h2 className="text-center mb-5 title">Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>
      </div>

      <div className="row skills-content">
        <div className="col-lg-6" data-aos="fade-up">
          {/* Skill Item */}
          <div className="progress mt-4">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="progress mt-4">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="progress mt-4">
            <span className="skill">JaveScript <i className="val">65%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
            </div>
          </div>

        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="progress mt-4">
            <span className="skill">node.js <i className="val">50%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="progress mt-4">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="progress mt-4">
            <span className="skill">react.js <i className="val">30%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</Element>
</>
  );
};

export default About;