import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">View My Resume</h2>
        <p className="section-description">
          Get a comprehensive overview of my experience, skills, and accomplishments.
        </p>
        
        <div className="resume-content">
          <div className="resume-buttons">
            <a 
              href={process.env.PUBLIC_URL + "/Resume_Prathik_Kallepalli.pdf"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary resume-btn"
            >
              <i className="fas fa-external-link-alt"></i>
              View Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/prathik-kallepalli-4aa267242/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary resume-btn"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn Profile
            </a>
          </div>
          
          <div className="resume-preview">
            <div className="resume-document">
              <i className="fas fa-file-pdf"></i>
              <span>Resume.pdf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
