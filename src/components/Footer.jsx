import './Footer.css';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2>Let's Connect!</h2>
          <p>I'm currently looking for UX/UI internship opportunities</p>
          <p className="email-link">
            <MdEmail className="email-icon" />
            yeepoon.ps@gmail.com
          </p>

          {/* Project Links */}
          <div className="project-links">
            <h3>My Projects</h3>
            <div className="links-container">
              <Link to="/ku-club">KU Club</Link>
              <Link to="/mordee">Mordee</Link>
              <Link to="/seniorplay">SeniorPlay</Link>
              <Link to="/agrobakery">Agro Bakery</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;