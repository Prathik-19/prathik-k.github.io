import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Engineer I, Returns, Repairs, Replacements (RRR)',
      company: 'Cisco Systems',
      duration: 'July 2025 - Present',
      location: 'San Jose, CA',
      description: [
        'Developing full-stack internal tools to automate return-goods workflows across global logistics teams',
        'Building an AI-powered virtual assistant for return requests, status tracking, and policy queries, reducing tickets',
        'Developed RESTful Python APIs enabling logistics data integration and automation',
        'Leveraging cloud-native tooling and CI/CD pipelines to deliver scalable, maintainable enterprise solutions'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'YourBookTeam',
      duration: 'August 2024 - February 2025',
      location: 'Remote',
      description: [
        'Built and maintained client websites using Squarespace, focusing on clean design and easy content management',
        'Linked SQL-managed data to Squarespace by exporting JSON and embedding it with custom code blocks',
        'Helped transition to a flexible tech stack by developing modular components with HTML, CSS, and JavaScript'
      ]
    },
    {
      title: 'AI Researcher',
      company: 'AIEA Lab at Baskin Engineering',
      duration: 'June 2024 - January 2025',
      location: 'Santa Cruz, CA',
      description: [
        'Researched explainability in LLMs under Professor Leilani Gilpin through the LLM Logic Project, aiming to improve AI transparency and reliability',
        'Built Python script to generate GPT-4 prompts to convert natural language into Prolog facts using OpenAI\'s API',
        'Designed and evaluated prompt engineering techniques to improve structured output',
        'Validated outputs with SwiProlog to trace reasoning paths, detect logic errors, and guide model improvement'
      ]
    },
    {
      title: 'Tutor and Grader',
      company: 'UCSC Baskin Engineering',
      duration: 'January 2024 - June 2025',
      location: 'Santa Cruz, CA',
      description: [
        'Tutored and graded students in Intermediate Python, Discrete Mathematics, Calculus 2, Foundations of Programming Languages, Foundations of Video Game Design, Computer Architecture, and Computational Models',
        'Conducted personalized tutoring sessions to help students grasp complex concepts in programming and mathematics, resulting in an average grade improvement of 15% for tutored students',
        'Evaluated assignments, quizzes, and exams, maintaining fairness, following established criteria and grading rubrics'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <div className="date-location">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
