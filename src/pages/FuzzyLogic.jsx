import React from 'react';
import { Link } from 'react-router-dom';

const FuzzyLogic = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#7dd3fc' }}>
        Remote Work Productivity Advisor
      </h1>
      <p className="project-subtitle-text">Fuzzy Inference System (FIS) built in MATLAB</p>
      <div className="project-underline" style={{ backgroundColor: '#7dd3fc' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['MATLAB', 'Fuzzy Logic', 'Mamdani FIS', 'Defuzzification', 'Membership Functions', 'Algorithm Design'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(125, 211, 252, 0.1)', 
            color: '#7dd3fc', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(125, 211, 252, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: The Problem */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>1. The Post-Pandemic Dilemma</h3>
        <p className="project-body-text">
          Determining whether an employee should work from home, adopt a hybrid arrangement, or commute to the office is a highly complex HR decision. Standard binary logic (Yes/No) or rigid statistical models fail because the deciding factors—such as a person's "ability to focus" or the "burden of a commute"—are inherently imprecise and qualitative.
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          To solve this, I developed a <strong>Fuzzy Inference System (FIS)</strong>. Unlike traditional AI that relies on massive historical datasets, Fuzzy Logic mathematically models human reasoning, allowing the system to compute with words and varying degrees of truth.
        </p>
      </div>

      {/* Section 2: System Architecture */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>2. System Architecture & Inputs</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          The system was programmed entirely via MATLAB scripts, avoiding drag-and-drop GUIs to ensure maximum algorithmic control. The architecture processes four highly subjective inputs to generate a single actionable recommendation.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>The Four Inputs</h4>
            <ul style={{ color: '#8f8f9d', margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li><strong>Internet Quality:</strong> Reliability of home network.</li>
              <li><strong>Focus Ability:</strong> Individual capacity to avoid home distractions.</li>
              <li><strong>Commute Burden:</strong> Time, cost, and stress of travel.</li>
              <li><strong>Collaboration:</strong> Role-specific need for face-to-face interaction.</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>The Output Landscape</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              A continuous output score mapping to three distinct categorical recommendations: <strong>Home</strong>, <strong>Hybrid</strong>, or <strong>Office</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Mathematical Engineering */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>3. Mathematical Tuning & Membership Functions</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          A core component of the project involved mathematically tuning the shape of the data. I engineered a combination of <strong>Triangular, Trapezoidal, and Gaussian Membership Functions</strong> to smoothly map the linguistic variables (e.g., mapping exactly what "Moderate Commute Burden" means mathematically).
        </p>
        
        <p className="project-body-text">
          Furthermore, I systematically evaluated the impact of different logical operators and aggregation methods on the final output:
        </p>
        <ul style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px', marginTop: '1rem' }}>
          <li><strong style={{color: '#ffffff'}}>Operator Selection:</strong> Benchmarked standard `min/max` operators against probabilistic `prod/probor` techniques to observe label-change sensitivity.</li>
          <li><strong style={{color: '#ffffff'}}>Defuzzification Methods:</strong> The raw fuzzy output is essentially a 2D geometric shape. I programmed and compared multiple defuzzification algorithms—including <em>Centroid</em> (Center of Gravity), <em>Bisector</em>, <em>Mean of Maximum (MoM)</em>, <em>Smallest of Maximum (SoM)</em>, and <em>Largest of Maximum (LoM)</em>—to determine the most robust final scalar output.</li>
        </ul>
      </div>

      {/* Section 4: Results */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#7dd3fc' }}>4. Evaluation & Results</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          To validate the system, I designed a dataset of 16 highly realistic edge-cases (e.g., an employee with terrible internet but an extremely burdensome commute). 
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(125, 211, 252, 0.05)', borderLeft: '4px solid #7dd3fc', borderRadius: '0 12px 12px 0' }}>
          <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6', fontSize: '1.05rem' }}>
            The final Centroid-based Mamdani system successfully processed the complex rule-base, outputting highly intuitive HR recommendations. By tracking operator label-changes via custom MATALB tracking scripts (`rwpa_compare_operators.csv`), the system proved that using Fuzzy Logic provides significantly more nuanced, human-centric decisions than rigid algorithmic thresholds.
          </p>
        </div>
      </div>

    </div>
  );
};

export default FuzzyLogic;