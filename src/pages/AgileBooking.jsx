import React from 'react';
import { Link } from 'react-router-dom';

const AgileBooking = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#fbbf24' }}>
        Agile Service Platform
      </h1>
      <p className="project-subtitle-text">E-Commerce Booking & Staff Management System</p>
      <div className="project-underline" style={{ backgroundColor: '#fbbf24' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['Agile Methodologies', 'System Architecture', 'Relational Databases (SQL)', 'Order Processing', 'Payment Logic', 'Team Collaboration'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(251, 191, 36, 0.1)', 
            color: '#fbbf24', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: System Overview */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#fbbf24' }}>1. System Architecture</h3>
        <p className="project-body-text">
          Developed as a collaborative Agile project alongside three other engineers, this platform was designed as a comprehensive e-commerce marketplace for purchasing and booking personalized services. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          The architecture supported both guest checkouts and registered user profiles. The core engine dynamically calculated service availability by cross-referencing customer-selected timeslots with real-time staff schedules. This prevented double-booking and ensured smooth service delivery.
        </p>
      </div>

      {/* Section 2: My Component - Order Processing */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#fbbf24' }}>2. Core Component: Order Processing</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          As part of the Agile workflow, I was assigned ownership of the most critical business logic layer: the <strong>Order Processing Engine</strong>. This component managed the complete lifecycle of a transaction.
        </p>
        
        <ul style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px', marginTop: '1rem' }}>
          <li><strong style={{color: '#ffffff'}}>Transaction Validation:</strong> Engineered the logic to capture, validate, and securely route payment states before authorizing a final booking.</li>
          <li><strong style={{color: '#ffffff'}}>Lifecycle Management:</strong> Built the backend triggers to immediately notify assigned staff members once an order was successfully processed.</li>
          <li><strong style={{color: '#ffffff'}}>Cancellation Logic:</strong> Implemented a strict business rule allowing users to modify or cancel their service appointments, automatically locking this feature 48 hours prior to the scheduled delivery time.</li>
        </ul>
      </div>

      {/* Section 3: Relational Database Design */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#fbbf24' }}>3. Relational Database Schema</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          A robust transactional system requires strict data integrity. The backend database was designed using normalized relational schemas to link customers, orders, staff, and products.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>tblOrders (My Implementation)</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              PK: OrderNo (Int)<br/>
              OrderDate (Date)<br/>
              OrderDetails (String)<br/>
              OrderPrice (Decimal)<br/>
              OrderAvailability (Boolean)
            </p>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Staff & Product Relations</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
              Foreign Keys were strictly utilized to map <code>StaffNo</code> to specific services, ensuring that order requests were always routed to the correctly qualified personnel based on their live availability flags.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Team Dynamics */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#fbbf24' }}>4. Agile Delivery</h3>
        <p className="project-body-text">
          Working in a team of four, we utilized iterative Agile sprints to merge our individual components. Integrating my Order Processing engine with the independent Staff Management and Product UI modules required rigorous interface mapping and clear communication. The result was a cohesive, fully functioning marketplace that satisfied all client requirements.
        </p>
      </div>

    </div>
  );
};

export default AgileBooking;