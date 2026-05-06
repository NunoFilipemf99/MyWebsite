import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      title: "Master's Dissertation",
      subtitle: "Applied AI in Sports Analytics",
      path: "/projects/dissertation", // Matches App.jsx
      category: "Artificial Intelligence",
      color: "#ffb3c6",
      description: "Research focused on deep learning pipelines for real-time player tracking and performance visualization in Futsal."
    },
    {
      title: "Kotlin Implementation",
      subtitle: "Software Engineering Logic",
      path: "/projects/kotlin", // Matches App.jsx
      category: "Software Engineering",
      color: "#7dd3fc",
      description: "A deep dive into robust application logic, modern JVM paradigms, and scalable backend architecture."
    },
    {
      title: "This Portfolio Website",
      subtitle: "Full-Stack React Portfolio",
      path: "/projects/portfolio", // Matches App.jsx
      category: "Web Development",
      color: "#d8b4fe",
      description: "A high-performance interactive platform built with React, featuring neural network visualizations and smooth UI."
    },
    {
      title: "Python in CoppeliaSim",
      subtitle: "Robotics & Simulation",
      path: "/projects/robotics", // Matches App.jsx
      category: "Robotics / AI",
      color: "#cbd5e1",
      description: "Early foundational work in robotic path-finding, sensor integration, and algorithmic control within a simulated environment."
    }
  ];

  return (
    <div className="project-container">
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="project-title-text" style={{ color: '#ffb3c6' }}>Featured Projects</h1>
        <div className="project-underline" style={{ backgroundColor: '#d8b4fe' }}></div>
        <p className="project-body-text" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
          A collection of my work spanning Artificial Intelligence, Software Engineering, and Robotic simulations.
        </p>
      </header>

      <div style={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              color: project.color, 
              fontSize: '0.8rem', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px',
              marginBottom: '1rem'
            }}>
              {project.category}
            </span>
            
            <h2 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h2>
            <p style={{ color: project.color, fontStyle: 'italic', marginBottom: '1.5rem', fontWeight: '600' }}>{project.subtitle}</p>
            
            <p className="project-body-text" style={{ marginBottom: '2rem', flexGrow: 1 }}>
              {project.description}
            </p>

            <Link 
              to={project.path} 
              style={{ 
                ...styles.button, 
                backgroundColor: project.color 
              }}
            >
              Explore Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  button: {
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '12px',
    color: '#0f172a',
    fontWeight: '800',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
  }
};

export default Projects;