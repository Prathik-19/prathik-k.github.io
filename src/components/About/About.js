import React from 'react';
import './About.css';

const About = () => {
  const skills = {
    'Programming Languages': [
      'Python (4yrs)', 'C/C++ (2yrs)', 'Java (1yr)', 'SQL (Postgres)', 'HTML/CSS/JavaScript', 'Haskell', 'Swift', 'RISC-V'
    ],
    'Frameworks & Tools': [
      'React', 'Vue.js', 'Flask', 'WordPress', 'Firebase', 'Django', 'TensorFlow', 'PyTorch', 'Kubernetes', 'REST API'
    ],
    'Developer Tools': [
      'Git', 'Docker', 'GCP', 'Vertex AI', 'AWS', 'VS Code', 'PyCharm', 'Figma', 'MongoDB', 'Agile', 'Squarespace'
    ],
    'Libraries & AI': [
      'pandas', 'NumPy', 'Matplotlib', 'Large Language Models', 'Natural Language Processing'
    ]
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Engineer with a strong foundation in computer science 
              and expertise in AI-driven solutions. Currently working at Cisco Systems, I develop 
              full-stack internal tools and AI-powered systems for global logistics workflows.
            </p>
            
            <p>
              I hold a Bachelor's degree in Computer Science from the University of California, Santa Cruz, 
              with a minor in Technology and Information Management. My academic journey included multiple 
              Dean's Honors Awards and active participation in research at the AIEA Lab, focusing on 
              explainability in Large Language Models.
            </p>
            
            <p>
              My experience spans from AI research and tutoring at UCSC to software engineering internships 
              at YourBookTeam. I'm passionate about creating innovative solutions that bridge AI and 
              practical applications, with expertise in full-stack development, machine learning, and 
              natural language processing.
            </p>
            
            <p>
              Beyond coding, I'm actively involved in the tech community through hackathons like CruzHacks, 
              where I won the Best Design Award, and contributing to open-source projects. I believe in 
              continuous learning and applying cutting-edge technology to solve real-world problems.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <div className="skill-tags">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
