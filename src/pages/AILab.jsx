import { useState, useEffect } from 'react';

const AILab = () => {
  const [text, setText] = useState('');
  const [inputLayer, setInputLayer] = useState([0, 0, 0]);
  const [hiddenLayer, setHiddenLayer] = useState([0, 0, 0, 0]);
  const [outputLayer, setOutputLayer] = useState({ pos: 0.33, pro: 0.33, neg: 0.33 });

  // Dictionaries
  const dictionaries = {
    pos: ['good', 'great', 'excellent', 'love', 'amazing', 'perfect', 'happy', 'yes', 'awesome', 'fast'],
    pro: ['api', 'robust', 'scalable', 'data', 'model', 'system', 'react', 'python', 'architecture', 'deploy'],
    neg: ['bad', 'error', 'bug', 'broken', 'slow', 'fail', 'worst', 'crash', 'no', 'terrible', 'issue']
  };

  // --- MATH UTILITIES ---
  const softmax = (arr) => {
    const exps = arr.map(x => Math.exp(x));
    const sum = exps.reduce((a, b) => a + b, 0);
    return exps.map(x => x / sum);
  };

  useEffect(() => {
    if (!text.trim()) {
      setInputLayer([0, 0, 0]);
      setHiddenLayer([0, 0, 0, 0]);
      setOutputLayer({ pos: 0.33, pro: 0.33, neg: 0.33 });
      return;
    }

    // 🚀 --- THE NUNO EASTER EGG --- 🚀
    if (text.toLowerCase().includes('nuno')) {
      setInputLayer([1.0, 1.0, 0.0]);       
      setHiddenLayer([1.0, 1.0, 1.0, 0.0]); 
      setOutputLayer({ pos: 1.0, pro: 1.0, neg: 0.0 }); 
      return; 
    }

    const words = text.toLowerCase().split(/\s+/);
    
    // 1. INPUT LAYER: Linear scaling clamped at 1.0 
    const i1 = Math.min(words.filter(w => dictionaries.pos.includes(w)).length * 0.5, 1);
    const i2 = Math.min(words.filter(w => dictionaries.pro.includes(w)).length * 0.5, 1);
    const i3 = Math.min(words.filter(w => dictionaries.neg.includes(w)).length * 0.5, 1);
    setInputLayer([i1, i2, i3]);

    // 2. HIDDEN LAYER: ReLU Activation 
    const h1 = Math.max(0, (i1 * 3.0) - (i3 * 2.0)); 
    const h2 = Math.max(0, (i1 * 1.5) + (i2 * 1.5)); 
    const h3 = Math.max(0, (i2 * 2.0) + (i3 * 1.0)); 
    const h4 = Math.max(0, (i3 * 3.0) - (i1 * 2.0)); 
    setHiddenLayer([h1, h2, h3, h4]);

    // 3. OUTPUT LAYER: Aggressive Logits 
    const logitPos = (h1 * 4.0) - (h2 * 0.5) - (h3 * 1.0) - (h4 * 3.0);
    const logitPro = (h2 * 3.0) + (h3 * 1.5) - (h1 * 2.0) - (h4 * 2.0);
    const logitNeg = (h4 * 4.0) + (h3 * 0.5) - (h1 * 3.0) - (h2 * 1.0);

    // 4. SOFTMAX
    const [finalPos, finalPro, finalNeg] = softmax([logitPos, logitPro, logitNeg]);

    setOutputLayer({ pos: finalPos, pro: finalPro, neg: finalNeg });

  }, [text]);

  const getNodeColor = (val, color) => val > 0.3 ? color : 'rgba(255, 255, 255, 0.1)';

  return (
    <section className="ai-lab-container" style={{ padding: '2rem 5%', maxWidth: '900px', margin: '0 auto', color: '#e0e0e0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#f8f9fa' }}>Neural Display</h2>
      
      {/* Soft, Elegant Explainer Box */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.03)', 
        padding: '1.5rem 2rem', 
        borderRadius: '16px', 
        marginBottom: '2.5rem', 
        textAlign: 'left', 
        borderLeft: '4px solid #ffb3c6',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{ margin: 0, color: '#cfcfd6', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <strong style={{ color: '#ffb3c6' }}>New to AI?</strong> Think of a Neural Network like a digital brain making a decision. 
          The dots on the left act as its "eyes" reading your words. The lines pass that information to the hidden "neurons" in the middle, which weigh the positive concepts against the negative ones. Finally, it reaches a conclusion on the right. 
          Type a sentence below to watch the brain light up and "think" in real-time!
        </p>
      </div>
      
      <input 
        type="text" 
        className="neural-input"
        placeholder="Type here (e.g., 'Excellent scalable system')"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '1.2rem 1.5rem', 
          borderRadius: '16px', 
          border: '1px solid rgba(255, 255, 255, 0.15)', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)',  
          color: '#ffffff',            
          fontSize: '1.1rem',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)',
          outline: 'none',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      {/* Subtle Easter Egg Hint */}
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#8f8f9d', marginTop: '0.75rem', marginBottom: '2rem', fontStyle: 'italic' }}>
        *psst... don't forget to try typing "Nuno"
      </p>

      <div className="network-wrapper" style={{ margin: '2rem 0' }}>
        <svg width="100%" height="320" viewBox="0 0 600 320">
          {[0, 1, 2].map(i => [0, 1, 2, 3].map(h => (
            <line 
              key={`ih-${i}-${h}`} x1="100" y1={60 + (i * 100)} x2="300" y2={40 + (h * 80)} 
              stroke="#00ffcc" strokeWidth={0.2 + (inputLayer[i] * 3)} 
              strokeOpacity={0.05 + (inputLayer[i] * 0.5)} 
            />
          )))}
          
          {[0, 1, 2, 3].map(h => [0, 1, 2].map(o => (
            <line 
              key={`ho-${h}-${o}`} x1="300" y1={40 + (h * 80)} x2="500" y2={60 + (o * 100)} 
              stroke="#ffb3c6" strokeWidth={0.2 + (hiddenLayer[h] * 3)} 
              strokeOpacity={0.05 + (hiddenLayer[h] * 0.5)} 
            />
          )))}

          {inputLayer.map((v, i) => (
            <circle key={`in-${i}`} cx="100" cy={60 + (i * 100)} r="12" fill={getNodeColor(v, '#00ffcc')} />
          ))}
          
          {hiddenLayer.map((v, i) => (
            <circle key={`hid-${i}`} cx="300" cy={40 + (i * 80)} r="12" fill={getNodeColor(v, '#ffb3c6')} />
          ))}
          
          {Object.values(outputLayer).map((v, i) => (
            <circle key={`out-${i}`} cx="500" cy={60 + (i * 100)} r="18" fill={getNodeColor(v, '#ffff00')} />
          ))}

          <text x="530" y="65" fill="#a0a0b0" fontSize="12" fontWeight="bold">Positive</text>
          <text x="530" y="165" fill="#a0a0b0" fontSize="12" fontWeight="bold">Technical</text>
          <text x="530" y="265" fill="#a0a0b0" fontSize="12" fontWeight="bold">Critical</text>
        </svg>
      </div>

      {/* Softened Results Panel */}
      <div className="results-panel" style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem'}}>
        <div className="metric" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px', width: '30%', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontWeight: 'bold', color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Positive</div>
          <div style={{ fontSize: '2rem', color: '#00ccaa', fontWeight: 'bold' }}>{(outputLayer.pos * 100).toFixed(0)}%</div>
        </div>
        <div className="metric" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px', width: '30%', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontWeight: 'bold', color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Technical</div>
          <div style={{ fontSize: '2rem', color: '#ffb3c6', fontWeight: 'bold' }}>{(outputLayer.pro * 100).toFixed(0)}%</div>
        </div>
        <div className="metric" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px', width: '30%', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontWeight: 'bold', color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Critical</div>
          <div style={{ fontSize: '2rem', color: '#e6e600', fontWeight: 'bold' }}>{(outputLayer.neg * 100).toFixed(0)}%</div>
        </div>
      </div>

      {/* Smooth "How it Works" Box */}
      <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', color: '#b0b0c0', textAlign: 'left', lineHeight: '1.8', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
        <h3 style={{ color: '#ffb3c6', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>How it Works Under the Hood</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#e0e0e0' }}>Data Processing (Input):</strong> The system tokenizes your sentence and maps words against domain-specific vocabularies (Positive, Technical, Critical).</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#e0e0e0' }}>Neural Inhibition (Hidden Layer):</strong> Instead of just adding scores together, the network uses negative weights. If it detects a "Critical" word, it actively suppresses the "Positive" neurons from firing.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#e0e0e0' }}>Leak Prevention (ReLU):</strong> It uses a Rectified Linear Unit (ReLU) algorithm. If a category receives zero hits, its activation is hard-clamped to exactly 0.0, preventing phantom data from skewing the results.</li>
          <li><strong style={{ color: '#e0e0e0' }}>Probability Distribution (Softmax):</strong> The final output runs through a Softmax function, forcing the raw data to compete and sum to exactly 100%, exactly like a professional classification model.</li>
        </ul>
      </div>
    </section>
  );
};

export default AILab;