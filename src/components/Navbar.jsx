import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) &&
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${isContactPage ? 'navbar-fixed' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">Yeepoon</Link>
        </div>
        <nav className={menuOpen ? 'active' : ''} ref={navRef}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/contact" className="contact-btn">Contact Me</Link></li>
          </ul>
        </nav>
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          ref={hamburgerRef}
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