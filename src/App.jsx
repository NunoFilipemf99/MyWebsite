import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import AILab from './pages/AILab';

// Import Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import Project Detail Pages
import ProjectDissertation from './pages/Dissertation';
import ProjectWebsite from './pages/PortfolioDev';
import ProjectKotlin from './pages/Kotlin'; 
import ProjectCopelia from './pages/RoboticsSim';
import ProjectFuzzyLogic from './pages/FuzzyLogic';
import ProjectAgileBooking from './pages/AgileBooking';
import ProjectClockInOut from './pages/ClockInOut';

function App() {
  return (
    <Router>
      <Header />
      
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<div style={{ marginTop: '-80px' }}><Home /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Detail Routes */}
          <Route path="/projects/dissertation" element={<ProjectDissertation />} />
          <Route path="/projects/portfolio" element={<ProjectWebsite />} />
          <Route path="/projects/kotlin" element={<ProjectKotlin />} />
          <Route path="/projects/robotics" element={<ProjectCopelia />} />
          <Route path="/projects/fuzzylogic" element={<ProjectFuzzyLogic />} />
          <Route path="/projects/agile" element={<ProjectAgileBooking />} />
          <Route path="/projects/clockinout" element={<ProjectClockInOut />} />
          
          <Route path="/ailab" element={<AILab />} />
        </Routes>
      </main>
      
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;