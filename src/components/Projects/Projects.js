import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Serene - AI Mental Health Chatbot',
      description: 'CruzHacks 2022 Best Design Award winner. Engineered an AI-driven mental health support chatbot, integrating machine learning and NLP techniques with keyword detection for relevant user responses.',
      technologies: ['Python', 'React', 'Firebase', 'PyTorch', 'Tkinter', 'NLP'],
      github: 'https://github.com/Prathik-19/Serene'
    },
    {
      title: 'Streakify - Habit Tracking App',
      description: 'A Swift-based habit tracking app with goal management and user engagement features. Led front-end development with intuitive user experience and integrated Firebase for authentication.',
      technologies: ['Swift', 'Firebase', 'iOS', 'User Authentication'],
      github: 'https://github.com/Prathik-19/Streakify'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-main-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-bottom-content">
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
