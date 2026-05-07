import React from 'react';
import { Link } from 'react-router-dom';

const RoboticsSim = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#cbd5e1' }}>
        AI for Mobile Robots
      </h1>
      <p className="project-subtitle-text">2D Occupancy Grid Mapping via ROS & Laser Odometry</p>
      <div className="project-underline" style={{ backgroundColor: '#cbd5e1' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['ROS (Robot Operating System)', 'Gazebo', 'RViz', 'TurtleBot3', 'Laser Scanning', 'Odometry', 'TF Transformations'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(203, 213, 225, 0.1)', 
            color: '#cbd5e1', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(203, 213, 225, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: The Objective */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#cbd5e1' }}>1. The Mapping Challenge</h3>
        <p className="project-body-text">
          Mapping is a fundamental challenge in autonomous robotics, serving as the prerequisite for navigation and decision-making. The objective of this project was to engineer a system capable of constructing a highly accurate <strong>2D Occupancy Grid Map</strong> in real-time.
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Running within a ROS (Robot Operating System) environment, the system processed continuous live data from a simulated TurtleBot3 robot, successfully bridging the gap between raw environmental scans and a static, navigable mathematical grid.
        </p>
      </div>

      {/* Section 2: Sensor Integration & Architecture */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#cbd5e1' }}>2. Sensor Fusion & Node Architecture</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          To build an accurate representation of the environment, the architecture relied on the continuous fusion of two primary data streams:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Laser Scanners</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              Providing high-frequency distance measurements to surrounding obstacles.
            </p>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Odometry Data</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              Tracking the robot's specific position and spatial orientation relative to global coordinates.
            </p>
          </div>
        </div>

        <p className="project-body-text" style={{ marginTop: '2rem' }}>
          The software was strictly organized using object-oriented principles. A <strong>Mapper Class</strong> handled node communication and raw data processing, while a dedicated <strong>Map Class</strong> managed the underlying grid logic. The map continuously converted global coordinates into grid indices, labeling cells as either <em>Occupied (1)</em> or <em>Free (0)</em> based on laser detections.
        </p>
      </div>

      {/* Section 3: The Technical Challenge */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#cbd5e1' }}>3. The Technical Challenge: Frame Transformations</h3>
        <p className="project-body-text">
          Early in development, a critical bug emerged: the generated map appeared to "move" continuously with the robot, rendering it useless for actual navigation. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Fixing this required a deep dive into ROS TF (Transform) libraries. I had to engineer precise mathematical conversions between the robot's local frame and the global map frame, utilizing the <code>tf</code> library to handle complex conversions between Quaternions and Euler angles. Once the odometry and laser scan data were correctly synchronized and anchored to a static global coordinate frame, the map stabilized perfectly.
        </p>
      </div>

      {/* Section 4: Simulation Results */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#cbd5e1' }}>4. Simulation & Results</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          The system was rigorously tested using the Gazebo physics engine, with the live map rendering synchronously in RViz.
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(203, 213, 225, 0.05)', borderLeft: '4px solid #cbd5e1', borderRadius: '0 12px 12px 0' }}>
          <p style={{ color: '#e2e8f0', margin: 0, lineHeight: '1.6', fontSize: '1.05rem' }}>
            <strong>Final Outcome:</strong> The completed codebase successfully produced a reliable, real-time occupancy grid map. It demonstrated high accuracy in capturing complex environmental geometries—such as circular cylinders in the center of the room—proving the robustness of the coordinate transformation logic and sensor fusion algorithms.
          </p>
        </div>
      </div>

    </div>
  );
};

export default RoboticsSim;