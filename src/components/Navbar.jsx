import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">Yeepoon</a>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#product-design">Home</a></li>
            <li><a href="#motion-design">Projects</a></li>
            <li><a href="#contact" className="contact-btn">Contact Me</a></li>
          </ul>
        </nav>
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;