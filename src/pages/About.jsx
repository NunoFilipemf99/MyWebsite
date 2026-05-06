const About = () => {
  return (
    <section style={styles.container}>
      <div style={styles.headerWrapper}>
        <h1 style={styles.title}>About Me</h1>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.contentGrid}>
        
        {/* Main Bio Section */}
        <div style={styles.mainBio}>
          <h2 style={styles.sectionSubtitle}>The Journey</h2>
          <p style={styles.paragraph}>
            My path into software engineering didn't start with just writing web applications; it started with a deep curiosity about how systems learn and adapt. Based in <strong style={styles.highlightLavender}>Leicester, UK</strong>, I am a Software Engineer who specializes in bridging the gap between theoretical machine learning and production-ready software.
          </p>
          <p style={styles.paragraph}>
            I hold a <strong style={styles.highlightLavender}>Master's degree in Artificial Intelligence</strong>, where I spent my time diving deep into the mathematics of neural architectures, robotics, and advanced data processing. Rather than just learning how to ping an API, I learned how to engineer algorithms from scratch. 
          </p>
          <p style={styles.paragraph}>
            One of my defining projects was developing a custom <strong style={styles.highlightPink}>Computer Vision model for Futsal sports analytics</strong>, where I tackled real-time tracking, spatial awareness, and performance metrics. Today, I use that highly analytical, data-driven mindset to build robust full-stack applications that are scalable, efficient, and intelligent.
          </p>
        </div>

        {/* Fast Facts / TL;DR Card */}
        <div style={styles.glassCard}>
          <h3 style={styles.cardTitle}>Quick Facts</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.listIcon}>🎓</span>
              <div>
                <strong style={styles.highlightLavender}>MSc in Artificial Intelligence</strong>
                <div style={styles.listSubtext}>Deep Learning, Computer Vision, Robotics</div>
              </div>
            </li>
            <li style={styles.listItem}>
              <span style={styles.listIcon}>📍</span>
              <div>
                <strong style={styles.highlightLavender}>Based in Leicester, UK</strong>
                <div style={styles.listSubtext}>Open to remote, hybrid, and on-site roles</div>
              </div>
            </li>
            <li style={styles.listItem}>
              <span style={styles.listIcon}>💻</span>
              <div>
                <strong style={styles.highlightLavender}>Full-Stack & AI Focus</strong>
                <div style={styles.listSubtext}>React, Node, Python, Neural Networks</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Hobbies Section */}
      <div style={{ ...styles.glassCard, marginTop: '3rem' }}>
        <h2 style={styles.sectionSubtitle}>When I'm Not Coding</h2>
        <p style={{ ...styles.paragraph, marginBottom: '2rem' }}>
          I believe that the best engineers are well-rounded people. When I step away from the IDE, I'm usually pushing my limits in competitive sports or engaging in strategic gaming:
        </p>
        
        <div style={styles.hobbyGrid}>
          {/* Hobby 1: Competitive Futsal */}
          <div style={styles.hobbyItem}>
            <div style={styles.hobbyIcon}>⚽</div>
            <h4 style={styles.hobbyTitle}>Competitive Futsal</h4>
            <p style={styles.hobbyDesc}>
              I don't just play for fun; I compete. The fast-paced, high-pressure environment of competitive Futsal keeps my decision-making sharp and my teamwork skills honed.
            </p>
          </div>
          
          {/* Hobby 2: Tactical Gaming */}
          <div style={styles.hobbyItem}>
            <div style={styles.hobbyIcon}>🎮</div>
            <h4 style={styles.hobbyTitle}>Tactical Strategy</h4>
            <p style={styles.hobbyDesc}>
              I'm drawn to games that require deep strategy and quick adaptation. Analyzing patterns and outmaneuvering opponents is essentially a mental workout for my code logic.
            </p>
          </div>

          {/* Hobby 3: Simulation/Open World */}
          <div style={styles.hobbyItem}>
            <div style={styles.hobbyIcon}>🧱</div>
            <h4 style={styles.hobbyTitle}>Sandbox Building</h4>
            <p style={styles.hobbyDesc}>
              I love games that allow for complex system building and resource management. If I'm not building software, I'm likely building digital cities or optimizing complex in-game economies.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

// Styles (Same as before, using the better contrast colors)
const styles = {
  container: {
    padding: '2rem 5%',
    maxWidth: '1000px',
    margin: '0 auto',
    color: '#a6a6b5', 
  },
  headerWrapper: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#ffb3c6', 
    marginBottom: '0.5rem',
  },
  underline: {
    height: '4px',
    width: '60px',
    backgroundColor: '#cba6f7', 
    borderRadius: '2px',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start',
  },
  mainBio: {
    flex: '2',
  },
  sectionSubtitle: {
    fontSize: '1.8rem',
    color: '#ffb3c6',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#a6a6b5', 
    marginBottom: '1.5rem',
  },
  highlightLavender: {
    color: '#cba6f7', 
    fontWeight: '600',
  },
  highlightPink: {
    color: '#ffb3c6', 
    fontWeight: '600',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#ffb3c6', 
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '0.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  listIcon: {
    fontSize: '1.8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '0.8rem',
    borderRadius: '12px',
  },
  listSubtext: {
    color: '#8f8f9d', 
    fontSize: '0.9rem',
    marginTop: '0.2rem',
  },
  hobbyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  hobbyItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    textAlign: 'center',
  },
  hobbyIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  hobbyTitle: {
    color: '#cba6f7', 
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  hobbyDesc: {
    color: '#8f8f9d', 
    fontSize: '0.9rem',
    lineHeight: '1.6',
  }
};

export default About;