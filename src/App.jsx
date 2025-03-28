import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Contact from './assets/pages/contact';
import KUClub from './assets/pages/ku_club';
import Mordee from './assets/pages/mordee';
// Lazy loading SeniorPlay component for better performance
const SeniorPlay = React.lazy(() => import('./assets/pages/seniorplay'));
// Lazy loading AgroBakeryLabBooking component
const AgroBakeryLabBooking = React.lazy(() => import('./assets/pages/AgroBakeryLabBooking'));

// Create a wrapper component to handle footer logic
const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
          <Route path="/seniorplay" element={<SeniorPlay />} />
          <Route path="/agrobakery" element={<AgroBakeryLabBooking />} />
        </Routes>
      </Suspense>
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
