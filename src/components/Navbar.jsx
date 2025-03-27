import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${isContactPage ? 'navbar-fixed' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">Yeepoon</Link>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/contact" className="contact-btn">Contact Me</Link></li>
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