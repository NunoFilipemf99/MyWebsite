const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      color: "#ffb3c6", // Matte Rose
      skills: ["Neural Networks", "Computer Vision", "Deep Learning", "Predictive Modeling", "Robotics", "NLP"]
    },
    {
      title: "Software Engineering",
      icon: "💻",
      color: "#d8b4fe", // Soft Lavender
      skills: ["React.js", "Node.js", "Python", "JavaScript (ES6+)", "RESTful APIs", "Full-Stack Dev"]
    },
    {
      title: "Data & Architecture",
      icon: "🧱", 
      color: "#7dd3fc", // New Sky Blue
      skills: ["SQL / NoSQL", "Data Pipelines", "Scalable Systems", "Git / Version Control", "MLOps", "Linux"]
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.headerWrapper}>
        <h1 style={styles.title}>Technical Expertise</h1>
        <div style={styles.underline}></div>
        <p style={styles.introText}>
          A collection of the languages, frameworks, and specialized AI concepts I’ve mastered through academic research and hands-on engineering.
        </p>
      </div>

      <div style={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} style={styles.glassCard}>
            <div style={styles.cardHeader}>
              <span style={styles.icon}>{category.icon}</span>
              <h2 style={{ ...styles.categoryTitle, color: category.color }}>{category.title}</h2>
            </div>
            <div style={styles.tagContainer}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{ 
                  ...styles.tag, 
                  backgroundColor: category.color, 
                  color: "#0f172a" // Deep navy text for maximum contrast on bright tags
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Section */}
      <div style={styles.footerNote}>
        <h3 style={styles.footerTitle}>The Stack & Beyond</h3>
        <p style={styles.footerText}>
          My philosophy is simple: tools change, but core principles remain. I focus on writing <strong style={{color: '#ffb3c6'}}>clean, maintainable code</strong> and building <strong style={{color: '#7dd3fc'}}>intelligent algorithms</strong> that serve a purpose. Whether it's a React frontend or a Python-based neural net, the goal is always performance and scalability.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem 5%',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  headerWrapper: {
    marginBottom: '4rem',
    textAlign: 'left',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#ffb3c6',
    marginBottom: '0.5rem',
    letterSpacing: '-1px',
  },
  underline: {
    height: '6px',
    width: '100px',
    backgroundColor: '#7dd3fc', // Sky Blue underline to balance the Pink title
    borderRadius: '3px',
    marginBottom: '1.5rem',
  },
  introText: {
    fontSize: '1.25rem',
    color: '#cbd5e1', // High-contrast Silver Blue
    maxWidth: '750px',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  glassCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.8)', // Solid Deep Navy base
    padding: '2.5rem',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(12px)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    marginBottom: '2rem',
  },
  icon: {
    fontSize: '2.2rem',
  },
  categoryTitle: {
    fontSize: '1.6rem',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
  },
  tag: {
    padding: '0.6rem 1.2rem',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '800', // Boldest text for readability
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  footerNote: {
    marginTop: '6rem',
    padding: '3.5rem',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerTitle: {
    color: '#d8b4fe',
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
  },
  footerText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
    maxWidth: '850px',
    margin: '0 auto',
  }
};

export default Skills;