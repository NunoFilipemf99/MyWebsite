import React from 'react';
import { Link } from 'react-router-dom';

const Dissertation = () => {
  return (
    <div className="project-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <h1 className="project-title-text" style={{ color: '#ffb3c6' }}>
        Master's Dissertation
      </h1>
      <p className="project-subtitle-text">Applied AI in Sports Analytics: Predictive Models for the Portuguese Futsal League</p>
      <div className="project-underline" style={{ backgroundColor: '#ffb3c6' }}></div>

      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {['Python', 'HistGradientBoosting', 'Poisson Regression', 'Monte Carlo Simulation', 'Elo Rating Systems', 'Feature Engineering', 'Data Imputation'].map((tech, i) => (
          <span key={i} style={{ 
            backgroundColor: 'rgba(255, 179, 198, 0.1)', 
            color: '#ffb3c6', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '50px', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            border: '1px solid rgba(255, 179, 198, 0.3)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Section 1: The Research Problem */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#ffb3c6' }}>1. The Futsal Challenge</h3>
        <p className="project-body-text">
          While predictive analytics has heavily saturated sports like association football and baseball, Futsal remains a highly complex, underexplored domain. Commercial bookmakers and analytical platforms frequently recycle generalized football models that fail to capture Futsal's unique dynamics. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          Unlike outdoor football, which averages roughly 2.7 goals per game, my analysis of the 2024/25 Portuguese Liga Placard revealed a massive <strong>6.42 goals per match</strong>. Futsal is characterized by a smaller pitch, rapid tactical transitions, infinite player substitutions, and heavy-tailed scoring distributions (with extreme scorelines like 9-1 occurring regularly). This required a fundamental redesign of traditional sports prediction pipelines to account for extreme volatility and high shot volumes (averaging 65-75 shots per match).
        </p>
      </div>

      {/* Section 2: Data Engineering & Feature Space */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#ffb3c6' }}>2. Feature Engineering & Preprocessing</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          To build robust models, I curated a comprehensive dataset from the Portuguese Liga Placard, encompassing match metadata, goals, shots, shots on target, possession metrics, passes, fouls, and corners. Missing secondary statistics were handled via rigorous rolling mean imputation to prevent look-ahead bias. 
        </p>
        <p className="project-body-text">
          Instead of feeding raw data into the algorithms, I engineered three specific feature classes to capture momentum:
        </p>
        <ul style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px', marginTop: '1rem' }}>
          <li><strong style={{color: '#ffffff'}}>Volatility Windows (Rolling Averages):</strong> Short 3-game rolling windows for goals, shots, and possession to capture rapid shifts in team momentum.</li>
          <li><strong style={{color: '#ffffff'}}>Form Indicators:</strong> 5-game points accumulation and Goal For/Against metrics to mirror intuitive psychological advantages.</li>
          <li><strong style={{color: '#ffffff'}}>Dynamic Elo Ratings:</strong> Adapted from chess, implementing a recursive rating update mechanism with a specific learning parameter (K=24) and Home Field Advantage constant (HFA=60) to mathematically quantify underlying structural team strength.</li>
        </ul>
      </div>

      {/* Section 3: The Three ML Architectures */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#ffb3c6' }}>3. Multi-Model Architecture Design</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          I developed and benchmarked three distinct machine learning frameworks to evaluate different predictive philosophies:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#d8b4fe', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>A. Poisson Gradient Boosting (Poisson-GBR)</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              A high-dimensional, 21-feature model combining Poisson regression with gradient-boosted decision trees. It utilized non-linear interactions between possession, shots, and passes to estimate expected goals (μ_home, μ_away).
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#d8b4fe', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>B. Form-Based Ensemble</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              A streamlined 6-feature model prioritizing recent psychological and physical momentum. It utilized a GradientBoostingRegressor for goal prediction and LogisticRegression for outcome classification (Win/Draw/Loss).
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#d8b4fe', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>C. Elo-GBR Hybrid</h4>
            <p style={{ color: '#8f8f9d', margin: 0, lineHeight: '1.6' }}>
              A highly efficient 4-feature model combining the historical consistency of Elo differentials with the adaptability of gradient boosting. This approach balanced long-term structural dominance with short-term rating momentum.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Monte Carlo Engine */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#ffb3c6' }}>4. Stochastic Monte Carlo Simulation</h3>
        <p className="project-body-text">
          Because Futsal is inherently stochastic, relying on deterministic point estimates (e.g., predicting an exact 4-2 scoreline) is statistically fragile. To quantify uncertainty, I built a Monte Carlo simulation engine. 
        </p>
        <p className="project-body-text" style={{ marginTop: '1rem' }}>
          The engine takes the expected goals parameters (μ_home, μ_away) outputted by the models and injects controlled jitter (10-15% perturbation) to prevent over-determinism. It then draws thousands of random Poisson-distributed scorelines (running 20,000 simulations per fixture), yielding a full probability distribution landscape rather than a single odds line. 
        </p>
      </div>

      {/* Section 5: Evaluation & Results */}
      <div className="project-card">
        <h3 className="project-section-title" style={{ color: '#ffb3c6' }}>5. Results & Evaluation</h3>
        <p className="project-body-text" style={{ marginBottom: '1.5rem' }}>
          Models were strictly evaluated using an 85/15 time-based split to replicate live deployment forecasting. 
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2.5rem', color: '#ffb3c6', fontWeight: '900' }}>60%</div>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Outcome Accuracy</div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2.5rem', color: '#7dd3fc', fontWeight: '900' }}>1.56</div>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Home Goals MAE</div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2.5rem', color: '#d8b4fe', fontWeight: '900' }}>20k</div>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Monte Carlo Sims / Match</div>
          </div>
        </div>

        <p className="project-body-text">
          The <strong>Elo-GBR Hybrid</strong> emerged as the superior architecture. While the 21-feature Poisson-GBR model suffered from noise amplification (achieving only 35% accuracy), the highly efficient 4-feature Elo-GBR model achieved a 60% outcome classification accuracy with a Mean Absolute Error of 1.56.
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(255,179,198,0.05)', borderLeft: '4px solid #ffb3c6', borderRadius: '0 12px 12px 0' }}>
          <h4 style={{ color: '#ffffff', margin: '0 0 0.5rem 0' }}>Real-World Case Study: Leões Porto Salvo vs Fundão</h4>
          <p style={{ color: '#cbd5e1', margin: 0, lineHeight: '1.6', fontSize: '1.05rem' }}>
            In deployment, the Monte Carlo simulation correctly identified a strong home advantage, projecting a 70.45% win probability for Leões Porto Salvo with expected goals of μ_home = 4.14 and μ_away = 1.67. The actual match concluded in a 6-1 home victory, validating the system's capacity to recognize highly dominant probabilistic trends beyond the capabilities of standard bookmaker odds.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Dissertation;