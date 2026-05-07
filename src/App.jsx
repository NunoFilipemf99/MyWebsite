import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget'; 
import AILab from './pages/AILab';

// Import Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import Project Detail Pages - Matched EXACTLY to your VS Code sidebar
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
          {/* Main Navigation Routes */}
          <Route path="/" element={
             <div style={{ marginTop: '-80px' }}> 
               <Home /> 
             </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<div className="bg-light"><Skills /></div>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<div className="bg-light"><Projects /></div>} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Detail Routes - Paths match your Projects.jsx buttons perfectly */}
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

      {/* The Chat Widget sits outside the Routes so it appears on every page */}
      <ChatWidget />
      
      <Footer />
    </Router>
  );
}

export default App;