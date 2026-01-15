import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Prathik Kallepalli";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px
      
      if (sectionId === 'home') {
        // For home section, scroll to the very top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // For other sections, scroll down slightly more to hide previous section
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight + 20; // Add 20px to scroll down more

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="typing-text">
              {(() => {
                const nameStart = "Hi, I'm ";
                const name = "Prathik Kallepalli";
                
                if (displayText.length <= nameStart.length) {
                  return displayText;
                } else if (displayText.length < nameStart.length + name.length) {
                  const nameTyped = displayText.slice(nameStart.length);
                  return (
                    <>
                      {nameStart}<span className="highlight">{nameTyped}</span>
                    </>
                  );
                } else {
                  return (
                    <>
                      {nameStart}<span className="highlight">{name}</span>
                    </>
                  );
                }
              })()}
            </span>
            <span className="typing-cursor">|</span>
          </h1>
          <p className="hero-subtitle">Software Engineer & Data Scientist</p>
          <p className="hero-description">
            Passionate about creating innovative solutions through code and AI-driven insights. 
            Currently working at Cisco Systems as a Full Stack Engineer, building internal tools 
            for global logistics workflows and developing AI-powered virtual assistants.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('about')}
            >
              <i className="fas fa-user"></i>
              About Me
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="profile-card">
          <div className="profile-img">
            <img src="/images/profile-photo.jpg" alt="Prathik Kallepalli" />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
