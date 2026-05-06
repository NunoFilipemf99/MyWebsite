import React from 'react';
import { Link } from 'react-router-dom';

const RoboticsSim = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#cbd5e1' }}>
        Python in CoppeliaSim
      </h1>
      <p className="project-subtitle-text">Robotics & Sensor Integration</p>
      <div className="project-underline" style={{ backgroundColor: '#cbd5e1' }}></div>

      <div className="project-card">
        <p className="project-body-text" style={{ fontStyle: 'italic' }}>
          [Detailed technical breakdown coming soon...]
        </p>
      </div>
    </div>
  );
};

// THIS IS THE LINE THAT FIXES YOUR ERROR:
export default RoboticsSim;