import React from 'react';

const Contact = () => {
  return (
    <div className="project-container">
      {/* The Invisible Spacer to clear the fixed header */}
      <div style={{ height: '120px', width: '100%' }}></div>

      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="project-title-text" style={{ color: '#ffb3c6', fontSize: '3.5rem', marginBottom: '0.5rem' }}>
          Get In Touch
        </h1>
        <div className="project-underline" style={{ backgroundColor: '#7dd3fc', margin: '0 auto 1.5rem auto' }}></div>
        <p className="project-body-text" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Whether you have a question, a project proposal, or just want to discuss software engineering and AI, my inbox is always open.
        </p>
      </div>

      <div style={styles.grid}>
        
        {/* Contact Cards */}
        <a href="mailto:2hmanu4@gmail.com" style={styles.glassCard}>
          <span style={styles.icon}>✉️</span>
          <div>
            <h3 style={styles.cardTitle}>Email Me</h3>
            <p style={styles.cardText}>2hmanu4@gmail.com</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/nunofilipemf/" target="_blank" rel="noopener noreferrer" style={styles.glassCard}>
          <span style={styles.icon}>💼</span>
          <div>
            <h3 style={styles.cardTitle}>LinkedIn</h3>
            <p style={styles.cardText}>Let's connect professionally.</p>
          </div>
        </a>

        <a href="https://github.com/NunoFilipemf99" target="_blank" rel="noopener noreferrer" style={styles.glassCard}>
          <span style={styles.icon}>🐙</span>
          <div>
            <h3 style={styles.cardTitle}>GitHub</h3>
            <p style={styles.cardText}>Check out my repositories.</p>
          </div>
        </a>

        <div style={styles.glassCard}>
          <span style={styles.icon}>📍</span>
          <div>
            <h3 style={styles.cardTitle}>Location</h3>
            <p style={styles.cardText}>United Kingdom</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  glassCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    backgroundColor: 'rgba(15, 23, 42, 0.8)', 
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  icon: {
    fontSize: '2.5rem',
  },
  cardTitle: {
    color: '#ffb3c6', 
    margin: '0 0 0.5rem 0',
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '0.5px',
  },
  cardText: {
    color: '#cbd5e1', 
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: '500',
  }
};

export default Contact;