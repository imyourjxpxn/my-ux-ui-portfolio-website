import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import KUClub from './assets/pages/ku_club';
import Mordee from './assets/pages/mordee';

// Lazy loading components
const SeniorPlay = React.lazy(() => import('./assets/pages/seniorplay'));
const AgroBakeryLabBooking = React.lazy(() => import('./assets/pages/AgroBakeryLabBooking'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
              </>
            } />
            <Route path="/ku-club" element={<KUClub />} />
            <Route path="/mordee" element={<Mordee />} />
            <Route path="/seniorplay" element={<SeniorPlay />} />
            <Route path="/agrobakery" element={<AgroBakeryLabBooking />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
