import React from 'react';
import { Link } from 'react-router-dom';

const ClockInOut = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#818cf8' }}>
        Workforce Management App
      </h1>
      <p className="project-subtitle-text">Clock In/Out: Enterprise Time & Logistics System</p>
      <div className="project-underline" style={{ backgroundColor: '#818cf8' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['Android Development', 'System Architecture', 'Role-Based Access (RBAC)', 'Database Design', 'Security & Compliance', 'Mobile UI/UX'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(129, 140, 248, 0.1)', 
            color: '#818cf8', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(129, 140, 248, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: The Enterprise Problem */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#818cf8' }}>1. The Workforce Logistics Challenge</h3>
        <p className="project-body-text">
          Tracking employee attendance, hours worked, and organizational logistics using legacy systems often leads to inefficiencies, payroll errors, and compliance risks. The objective of this project was to engineer a modernized, mobile-first solution that empowers employees with flexibility while giving administrators strict oversight.
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          I developed "Clock In/Out", a comprehensive Android application designed to handle organizational time logistics, bridging the gap between operational efficiency and seamless user experience.
        </p>
      </div>

      {/* Section 2: Role-Based Architecture */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#818cf8' }}>2. Dual-Role System Architecture</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          Enterprise software requires strict permission boundaries. I engineered the application with Role-Based Access Control (RBAC), dividing the feature set into two highly distinct environments:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Employee Portal</h4>
            <ul style={{ color: '#8f8f9d', margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Frictionless mobile clock-in/out mechanisms.</li>
              <li>Personal attendance tracking and historical logs.</li>
              <li>Secure, individualized data access prioritizing usability.</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Admin Dashboard</h4>
            <ul style={{ color: '#8f8f9d', margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>High-level organizational oversight and reporting.</li>
              <li>Employee management and schedule tracking.</li>
              <li>System-wide attendance verification and auditing.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Non-Functional Requirements */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#818cf8' }}>3. Enterprise-Grade Security & Performance</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          Beyond basic functionality, workforce management systems handle sensitive personal and operational data. I prioritized strict non-functional requirements during the development lifecycle:
        </p>
        <ul style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px', marginTop: '1rem' }}>
          <li><strong style={{color: '#ffffff'}}>Security & Compliance:</strong> Ensured robust data protection protocols to prevent unauthorized access and maintain compliance with privacy standards.</li>
          <li><strong style={{color: '#ffffff'}}>Reliability & Maintainability:</strong> Built on a scalable software architecture with a clean, normalized database structure, ensuring the app remains stable during peak clock-in hours and is easily extensible for future organizational growth.</li>
        </ul>
      </div>

    </div>
  );
};

export default ClockInOut;