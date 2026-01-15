import React, { useState, useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: 'fas fa-briefcase',
      title: 'Full Stack Engineer I at Cisco Systems',
      description: 'Joined Cisco as a Full Stack Engineer, developing internal tools for global logistics workflows and building AI-powered virtual assistants for enterprise solutions.',
      date: 'July 2025 - Present'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'B.S. Computer Science - UC Santa Cruz',
      description: 'Graduated from UC Santa Cruz with a Bachelor of Science in Computer Science and a minor in Technology and Information Management.',
      date: 'September 2021 - March 2025'
    },
    {
      icon: 'fas fa-award',
      title: 'Dean\'s Honors Award (Multiple Terms)',
      description: 'Recognized on the Dean\'s Honors List for academic excellence (Top 15% of academic group) across multiple terms: Fall \'21, Winter \'22, Spring \'22, Fall \'22, Fall \'23.',
      date: '2021 - 2023'
    },
    {
      icon: 'fas fa-trophy',
      title: 'CruzHacks 2022 Best Design Award',
      description: 'Won the Best Design Award at CruzHacks 2022 for developing Serene, an AI-driven mental health support chatbot with innovative design and user experience.',
      date: '2022'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(achievements.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>
        
        <div className="achievements-carousel">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-container">
            <div 
              className="achievements-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView) * cardsPerView}%)`
              }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                  <div className="achievement-date">{achievement.date}</div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
