import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <div className="hero-section">
          <Hero />
        </div>
        <div className="projects-section">
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
