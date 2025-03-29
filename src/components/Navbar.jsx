import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const dropdownRef = useRef(null);

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
      if (dropdownOpen &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen, dropdownOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">Yeepoon</Link>
        </div>
        <nav className={menuOpen ? 'active' : ''} ref={navRef}>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* Commenting out the dropdown menu */}
            {/* <li className="dropdown" ref={dropdownRef}>
              <button 
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Project
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/kuclubs">KU Clubs</Link></li>
                  <li><Link to="/mordee">Mordee</Link></li>
                  <li><Link to="/seniorplay">Senior Play</Link></li>
                  <li><Link to="/bakerylabbooking">Bakery Lab Booking</Link></li>
                </ul>
              )}
            </li> */}
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