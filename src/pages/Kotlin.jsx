import React from 'react';
import { Link } from 'react-router-dom';

const Kotlin = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#7dd3fc' }}>
        Kotlin Implementation
      </h1>
      <p className="project-subtitle-text">Software Engineering Logic</p>
      <div className="project-underline" style={{ backgroundColor: '#7dd3fc' }}></div>

      <div className="project-card">
        <p className="project-body-text">
          [Detailed technical breakdown coming soon...]
        </p>
      </div>
    </div>
  );
};

export default Kotlin;