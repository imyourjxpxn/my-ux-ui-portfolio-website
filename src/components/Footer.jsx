import './Footer.css';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2>Let's Connect!</h2>
          <p>I'm currently looking for UX/UI internship opportunities</p>
          <a href="mailto:yeepoon.s@ku.th" className="email-link">
            <MdEmail className="email-icon" />
            yeepoon.ps@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;