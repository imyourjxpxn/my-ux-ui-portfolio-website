import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Contact from './assets/pages/contact';
import KUClub from './assets/pages/ku-club';
import Mordee from './assets/pages/Mordee';

// Create a wrapper component to handle footer logic
const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <div className="hero-section">
              <Hero />
            </div>
            <div className="projects-section">
              <Projects />
            </div>
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ku-club" element={<KUClub />} />
        <Route path="/mordee" element={<Mordee />} /> 
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
