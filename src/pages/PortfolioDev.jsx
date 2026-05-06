import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDev = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#d8b4fe' }}>
        Portfolio Website
      </h1>
      <p className="project-subtitle-text">Full-Stack React & Neural Logic</p>
      <div className="project-underline" style={{ backgroundColor: '#d8b4fe' }}></div>

      <div className="project-card">
        <p className="project-body-text" style={{ fontStyle: 'italic' }}>
          [Detailed technical breakdown coming soon...]
        </p>
      </div>
    </div>
  );
};

// THIS IS THE LINE THAT FIXES THE CRASH:
export default PortfolioDev;