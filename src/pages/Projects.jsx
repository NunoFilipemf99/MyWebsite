import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      title: "Master's Dissertation",
      subtitle: "Applied AI in Sports Analytics",
      path: "/projects/dissertation", 
      category: "Artificial Intelligence",
      color: "#ffb3c6",
      description: "Research focused on deep learning pipelines, Elo ratings, and Monte Carlo simulations for predicting Futsal match outcomes."
    },
    {
      title: "Kotlin Implementation",
      subtitle: "Coffee Shop Mobile App",
      path: "/projects/kotlin", 
      category: "Software Engineering",
      color: "#7dd3fc",
      description: "A dual-interface Android application featuring real-time order tracking, secure authentication, and a dedicated admin dashboard for inventory management."
    },
    {
      title: "This Portfolio Website",
      subtitle: "Full-Stack React Portfolio",
      path: "/projects/portfolio", 
      category: "Web Development",
      color: "#d8b4fe",
      description: "A high-performance interactive platform built with React and Vite, featuring neural network visualizations and responsive UI design."
    },
    {
      title: "AI for Mobile Robots",
      subtitle: "2D Occupancy Grid Mapping",
      path: "/projects/robotics", 
      category: "Robotics / ROS",
      color: "#cbd5e1",
      description: "Engineered a ROS-based mapping system using a TurtleBot3, fusing laser scans and odometry data via TF transformations to build real-time spatial grids."
    },
    {
      title: "Fuzzy Inference System",
      subtitle: "Remote Work Advisor",
      path: "/projects/fuzzylogic", 
      category: "Algorithms / MATLAB",
      color: "#6ee7b7", 
      description: "A complex mathematical model built entirely in MATLAB scripts using Mamdani architecture to quantify human reasoning and qualitative decision-making."
    },
    {
      title: "Agile Service Platform",
      subtitle: "E-Commerce & Staff Management",
      path: "/projects/agile", 
      category: "System Design / Agile",
      color: "#fbbf24", 
      description: "Collaborated in an Agile team to engineer a full-stack booking marketplace, taking direct ownership of the relational database schema and the order processing lifecycle."
    },
    {
      title: "Workforce Management App",
      subtitle: "Clock In/Out Android System",
      path: "/projects/clockinout", 
      category: "Mobile Development",
      color: "#818cf8",
      description: "An enterprise-grade Android application engineered for time logistics, featuring robust Role-Based Access Control for administrators and employees."
    }
  ];

  return (
    <div className="project-container">
      {/* The Invisible Spacer */}
      <div style={{ height: '120px', width: '100%' }}></div>

      {/* THE FIX: Changed from <header> to <div> so global CSS doesn't make it sticky! */}
      <div style={{ marginBottom: '4rem' }}>
        <h1 className="project-title-text" style={{ color: '#ffb3c6' }}>Featured Projects</h1>
        <div className="project-underline" style={{ backgroundColor: '#d8b4fe' }}></div>
        <p className="project-body-text" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
          A collection of my work spanning Machine Learning, Software Engineering, Mobile Development, and System Architecture.
        </p>
      </div>

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