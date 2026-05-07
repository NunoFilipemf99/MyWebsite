import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 179, 198, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 4px 20px rgba(255, 179, 198, 0.3)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1rem 0'
    }}>
      <nav>
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ 
              color: scrolled ? '#0f172a' : '#cbd5e1', 
              margin: 0,
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
              Nuno Filipe
            </h1>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/ailab">AI Lab</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;