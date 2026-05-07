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
      boxShadow: scrolled ? '0 4px 10px rgba(0,0,0,0.1)' : '0 2px 5px rgba(0,0,0,0.1)',
      /* You might already have background colors or other styles in your CSS, 
         this just handles the dynamic shadow you set up! */
    }}>
      <nav>
        
        {/* === UPDATED LOGO BUTTON === */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ 
              color: '#ffb3c6', 
              margin: 0,
              fontSize: '1.5rem', // You can tweak this if you want the name bigger/smaller
              cursor: 'pointer',
              transition: 'opacity 0.2s ease'
            }}>
              Nuno Filipe
            </h1>
          </Link>
        </div>
        {/* =========================== */}

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