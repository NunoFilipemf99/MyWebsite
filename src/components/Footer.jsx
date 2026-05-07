import React from 'react';

const Footer = () => {
  // This automatically gets the current year so you never have to update it!
  const currentYear = new Date().getFullYear(); 

  return (
    <footer style={{
      padding: '3rem 1rem',
      marginTop: '5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      textAlign: 'center',
      color: '#8f8f9d'
    }}>
      
      {/* Social Links */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '2rem', 
        marginBottom: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <a 
          href="https://github.com/NunoFilipemf99" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
          style={styles.link}
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/nunofilipemf/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
          style={styles.link}
        >
          LinkedIn
        </a>
        <a 
          href="mailto:2hmanu4@gmail.com" 
          className="footer-link"
          style={styles.link}
        >
          Email
        </a>
      </div>

      {/* Copyright & Tech Flex */}
      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
        © {currentYear} Nuno Filipe. All rights reserved.
      </p>
      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontStyle: 'italic' }}>
        Engineered from scratch with React & Vite.
      </p>

    </footer>
  );
};

const styles = {
  link: {
    color: '#cbd5e1', 
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
    transition: 'color 0.2s ease, transform 0.2s ease',
  }
};

export default Footer;