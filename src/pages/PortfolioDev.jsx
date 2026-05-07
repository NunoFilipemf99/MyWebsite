import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDev = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#d8b4fe' }}>
        Portfolio Website & AI Lab
      </h1>
      <p className="project-subtitle-text">Full-Stack React, Interactive Visualizations, and GenAI</p>
      <div className="project-underline" style={{ backgroundColor: '#d8b4fe' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['React.js', 'Vite', 'Google Gemini API', 'Interactive DOM Manipulation', 'React Router', 'Vercel CI/CD', 'CSS Glassmorphism'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(216, 180, 254, 0.1)', 
            color: '#d8b4fe', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(216, 180, 254, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: The Vision */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#d8b4fe' }}>1. The Vision: Beyond a Static CV</h3>
        <p className="project-body-text">
          In modern software engineering, a static PDF resume is often insufficient to demonstrate true technical capability. The objective of this project was to architect a "living portfolio"—a highly performant, interactive web application that serves as both a gallery of my work and a live demonstration of my front-end and API integration skills.
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Instead of relying on website builders or templates, I engineered this platform entirely from scratch using modern JavaScript frameworks and deployment pipelines.
        </p>
      </div>

      {/* Section 2: React Architecture & Deployment */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#d8b4fe' }}>2. Frontend Architecture & CI/CD</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          The application is built on a modern, lightning-fast technology stack designed for scalability and developer experience:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Vite & React Router</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              Bootstrapped with Vite for optimized Hot Module Replacement (HMR) and minimized build times. <code>react-router-dom</code> was implemented to handle seamless, single-page application (SPA) navigation across multiple distinct routes without page reloads.
            </p>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Vercel Continuous Deployment</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              The codebase is version-controlled via Git and linked to a Vercel CI/CD pipeline. Every code push to the `main` branch automatically triggers a new build process, dynamically updating the live server and custom DNS records.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: The AI Lab */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#d8b4fe' }}>3. The AI Lab Sandbox</h3>
        <p className="project-body-text">
          To demonstrate advanced front-end capabilities, I engineered a dedicated <strong>"AI Lab"</strong>—an interactive sandbox for machine learning visualizations. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          This section goes beyond standard UI components, featuring dynamic neural network animations and interactive DOM elements that allow users to explore AI concepts in real-time. Building this required complex React state management to track user interactions and synchronize them with visual feedback loops, showcasing an ability to build highly engaging, gamified user experiences.
        </p>
      </div>

      {/* Section 4: The AI Agent Integration */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#d8b4fe' }}>4. The Generative AI Agent</h3>
        <p className="project-body-text">
          To bridge my background in Artificial Intelligence with web development, I integrated a custom AI Agent directly into the application's global layout. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Using the <code>@google/generative-ai</code> SDK, I wired a custom React component (<code>ChatWidget.jsx</code>) to the Gemini API. The system prompt is engineered to act as my personal assistant—capable of answering recruiter queries, summarizing my project methodologies, and providing interactive, context-aware responses about my CV in real-time.
        </p>
      </div>

      {/* Section 5: UI/UX & Design Language */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#d8b4fe' }}>5. UI/UX & Glassmorphism</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          Visual identity is crucial for user retention. I designed a custom CSS framework utilizing a dark-mode aesthetic with neon accent colors to differentiate engineering categories.
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(216, 180, 254, 0.05)', borderLeft: '4px solid #d8b4fe', borderRadius: '0 12px 12px 0' }}>
          <p style={{ color: '#e2e8f0', margin: 0, lineHeight: '1.6', fontSize: '1.05rem' }}>
            The UI relies heavily on <strong>Glassmorphism</strong>—using semi-transparent backgrounds, CSS backdrop-filters, and subtle borders to create a sense of depth and hierarchy, ensuring that the dense technical text remains highly readable across both desktop and mobile devices.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PortfolioDev;