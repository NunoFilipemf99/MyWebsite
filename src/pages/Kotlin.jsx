import React from 'react';
import { Link } from 'react-router-dom';

const Kotlin = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#7dd3fc' }}>
        Kotlin Mobile Application
      </h1>
      <p className="project-subtitle-text">Full-Stack Coffee Ordering System (Android)</p>
      <div className="project-underline" style={{ backgroundColor: '#7dd3fc' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['Kotlin', 'Android SDK', 'Mobile UI/UX', 'State Management', 'Agile Workflow', 'Secure Authentication'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(125, 211, 252, 0.1)', 
            color: '#7dd3fc', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(125, 211, 252, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: Project Scope */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>1. The Project Scope</h3>
        <p className="project-body-text">
          Many mobile development projects focus entirely on the end-user. For this project, my team and I engineered a comprehensive, <strong>dual-interface mobile application</strong> designed to serve both everyday customers and store administrators simultaneously. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Built natively for Android using Kotlin, the app digitized the entire lifecycle of a coffee shop—from browsing the menu and processing secure payments, to managing backend inventory and generating live sales analytics.
        </p>
      </div>

      {/* Section 2: Dual Architecture */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>2. Feature Architecture</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          The application logic was strictly separated into two distinct permission levels, each with its own tailored UI and functional requirements:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Customer Interface</h4>
            <ul style={{ color: '#8f8f9d', margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Secure user registration and authentication.</li>
              <li>Dynamic menu browsing with category filters.</li>
              <li>Real-time order status tracking and push notifications.</li>
              <li>Encrypted payment gateway integration.</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Admin Dashboard</h4>
            <ul style={{ color: '#8f8f9d', margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Live order queue management and status updates.</li>
              <li>Full CRUD capabilities for product inventory.</li>
              <li>Automated low-stock alerts.</li>
              <li>Sales report generation and customer preference analytics.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Engineering Teamwork */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>3. Agile Workflow & Remote Collaboration</h3>
        <p className="project-body-text">
          Beyond the code, this project was a rigorous exercise in software engineering team dynamics. Developed alongside a co-engineer, the project was challenged by geographical dispersion and unexpected personal emergencies near the deployment deadline.
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          To maintain velocity, we implemented strict Agile methodologies. We utilized continuous integration testing to catch regressions early, maintained transparent communication channels, and held regular virtual stand-ups to dynamically reassign tasks. This iterative approach allowed us to adapt to blockers instantly and deliver a highly polished, robust application on schedule.
        </p>
      </div>

    </div>
  );
};

export default Kotlin;