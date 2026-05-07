import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.headline}>
          Nuno Filipe.<br />
          <span style={styles.highlight}>AI & Software Engineer.</span>
        </h1>

        <h2 style={styles.subHeadline}>
         Writing full-stack code, training complex models, and keeping the robots friendly.
        </h2>

        {/* Grounded, Professional AI Paragraph */}
        <p style={styles.paragraph}>
          My Master's in Artificial Intelligence gave me a solid foundation in how machine learning 
          models actually work under the hood. Rather than just integrating external APIs, I enjoy 
          building custom neural networks, managing data pipelines, and optimizing model performance. 
        </p>

        <div style={styles.buttonGroup}>
          <Link to="/projects" className="btn-primary" style={styles.primaryButton}>
            View My Projects
          </Link>
          <Link to="/ailab" className="btn-accent" style={styles.accentButton}>
            Try My AI Sandbox
          </Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    minHeight: '80vh',
    padding: '2rem 5%',
    color: '#e0e0e0', 
  },
  content: {
    maxWidth: '800px',
  },
  headline: {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    color: '#f8f9fa', 
  },
  highlight: {
    color: '#ffb3c6', 
  },
  subHeadline: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '2rem',
    color: '#b0b0c0', 
    lineHeight: '1.5',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#8f8f9d', 
    marginBottom: '3rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: '#d0d0d0',
    textDecoration: 'none',
    border: '2px solid #4a4a5a', 
    borderRadius: '8px', 
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  accentButton: {
    padding: '0.8rem 2rem',
    backgroundColor: '#ffb3c6',
    color: '#1a1a24', 
    textDecoration: 'none',
    border: '2px solid #ffb3c6',
    borderRadius: '8px', 
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)', 
    transition: 'all 0.3s ease',
  }
};

export default Home;