import React from 'react';
import resumeImage from '../assets/CV-Picture.jpg'; // Adjust the path to where your CV image is located
import resumePDF from '../assets/CV Michal Paleczny.pdf'; // Adjust the path to your CV's PDF file

const Resume = () => {
  return (
    <div className="resume-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>My Resume</h2>
      <img src={resumeImage} alt="My Resume" style={{ maxWidth: '100%', height: 'auto' }} />
      <div style={{ marginTop: '20px' }}>
        <a href={resumePDF} download="My_Resume.pdf" className="btn btn-primary">Download My CV</a>
      </div>
    </div>
  );
}

export default Resume;
