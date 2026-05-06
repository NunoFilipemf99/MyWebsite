const Experience = () => {
  const jobs = [
    {
      title: "IT Teaching & Code Developer",
      company: "Impact Academies, Leicester",
      period: "Dec 2024 - Present",
      color: "#ffb3c6", 
      description: "Leading technical education by designing custom curriculums and authoring original coding exercises across multiple languages.",
      bullets: [
        "Develop custom coding exercises from scratch in Python, Java, JavaScript, and Data Science.",
        "Transform complex algorithmic concepts into interactive, hands-on projects for diverse age groups.",
        "Utilize Machine Learning platforms to build intuitive learning modules and gamified education tools.",
        "Manage and lead technical sessions for classes averaging 15 students, fostering a collaborative environment."
      ]
    },
    {
      title: "Masters in Artificial Intelligence",
      company: "De Montfort University (DMU)",
      period: "Aug 2024 - Oct 2025",
      color: "#d8b4fe", 
      description: "Advanced research and development focused on the mathematics of intelligence and machine learning applications.",
      bullets: [
        "Specialized in advanced AI architectures and neural network optimization during intensive postgraduate research.",
        "Leveraged Python extensively for machine learning algorithms and advanced data analysis.",
        "Applied practical experience utilizing Kaggle datasets for complex model training.",
        "Mastered Deep Learning, Computer Vision, and Robotics through specialized academic modules."
      ]
    },
    {
      title: "Bachelors in Computer Science",
      company: "De Montfort University (DMU)",
      period: "Oct 2021 - Aug 2024",
      color: "#7dd3fc", 
      description: "Foundational software engineering focusing on Object-Oriented Programming and robust application logic.",
      bullets: [
        "Demonstrated proficiency in core software engineering principles and full-stack development architecture.",
        "Highly proficient in Java, focusing on OOP, exception handling, and robust application development.",
        "Gained hands-on experience in C# and Kotlin for cross-platform application development.",
        "Mastered SQL for relational database querying and server-side data manipulation."
      ]
    },
    {
      title: "DMU Futsal Chairperson",
      company: "De Montfort University",
      period: "Sep 2022 - Jun 2024",
      color: "#cbd5e1", 
      description: "Executive leadership role managing the operations, budget, and personnel for a major university sports organization.",
      bullets: [
        "Managed the committee budget and organized large-scale events and season game logistics.",
        "Coordinated personnel requirements and scheduled complex transport/game rotations.",
        "Developed strong administrative frameworks to ensure the smooth operation of the organization."
      ]
    },
    {
      title: "Software & Hardware Supporter",
      company: "Law Officer Paulo Figueiredo",
      period: "Apr 2014 - Aug 2019",
      color: "#ffb3c6", 
      description: "Primary technical point of contact for IT infrastructure, software troubleshooting, and hardware maintenance.",
      bullets: [
        "Diagnosed and resolved complex hardware malfunctions across the office network to minimize downtime.",
        "Troubleshot software conflicts and optimized business-critical applications and web platforms.",
        "Maintained secure daily business operations through proactive end-to-end IT support."
      ]
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.headerWrapper}>
        <h1 style={styles.title}>Experience</h1>
        <div style={styles.underline}></div>
        <p style={styles.introText}>
          A comprehensive timeline of technical education, AI research, and professional software roles.
        </p>
      </div>

      <div style={styles.timeline}>
        {jobs.map((job, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.dotColumn}>
              <div style={{ ...styles.dot, backgroundColor: job.color }}></div>
              {index !== jobs.length - 1 && <div style={styles.line}></div>}
            </div>

            <div style={styles.glassCard}>
              <div style={styles.cardHeader}>
                <h2 style={{ ...styles.jobTitle, color: job.color }}>{job.title}</h2>
                <span style={styles.period}>{job.period}</span>
              </div>
              <h3 style={styles.company}>{job.company}</h3>
              <p style={styles.description}>{job.description}</p>
              
              <ul style={styles.bulletList}>
                {job.bullets.map((bullet, i) => (
                  <li key={i} style={styles.bullet}>
                    <span style={{ color: job.color, marginRight: '12px', fontWeight: 'bold' }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem 5%',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  headerWrapper: {
    marginBottom: '4rem',
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
    backgroundColor: '#d8b4fe',
    borderRadius: '3px',
    marginBottom: '1.5rem',
  },
  introText: {
    fontSize: '1.25rem',
    color: '#cbd5e1', 
    lineHeight: '1.7',
    maxWidth: '700px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
  },
  timelineItem: {
    display: 'flex',
    gap: '2.5rem',
  },
  dotColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24px',
  },
  dot: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    zIndex: '2',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
    border: '4px solid rgba(255,255,255,0.1)',
  },
  line: {
    width: '3px',
    flexGrow: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    margin: '8px 0',
  },
  glassCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    padding: '2.5rem',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    marginBottom: '4rem',
    flex: '1',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '0.5rem',
    gap: '1rem',
  },
  jobTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  period: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '0.85rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 1.2rem',
    borderRadius: '100px',
    letterSpacing: '0.5px',
  },
  company: {
    fontSize: '1.2rem',
    color: '#d8b4fe',
    marginBottom: '1.5rem',
    fontWeight: '700',
  },
  description: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  bulletList: {
    listStyle: 'none',
    padding: 0,
  },
  bullet: {
    fontSize: '1.05rem',
    color: '#cbd5e1',
    marginBottom: '1rem',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'flex-start',
  }
};

export default Experience;