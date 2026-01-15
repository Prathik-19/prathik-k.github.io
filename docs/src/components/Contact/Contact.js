import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content-centered">
          <div className="contact-info-centered">
            <h3 className="contact-subtitle">Let's Connect!</h3>
            <p className="contact-description">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question, want to work together, or just want to say hello, 
              feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>prathikvarmak@gmail.com</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <span>408-717-3714</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <span>Tracy, CA</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/prathik-kallepalli-4aa267242/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Prathik-19" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:prathikvarmak@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
