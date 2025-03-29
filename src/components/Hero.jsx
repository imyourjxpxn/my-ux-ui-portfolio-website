import { MdGroups } from 'react-icons/md';
import { BiPalette } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="profile-image">
            <img src="/assets/images/profile.png" alt="Profile" />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="name">Yeepoon</span>!</h1>
            <h2 className="main-heading">
              After three years of studying Computer Science,
              I'm currently seeking a <span className="highlight">UX/UI designer internship</span> 
            </h2>
            <p className="sub-heading" style={{ fontSize: '1.2rem' }}>
              I'm eager to apply my skills to create designs that meet both user needs and business goals.
            </p>
          </div>
          
          <div className="skills-container">
            <div className="skill-card">
              <span className="skill-icon">
                <MdGroups />
              </span>
              <h3>UX Research</h3>
              <p>Understanding user needs and behaviors</p>
            </div>
            
            <div className="skill-card">
              <span className="skill-icon">
                <BiPalette />
              </span>
              <h3>UI Design</h3>
              <p>Creating beautiful, intuitive interfaces</p>
            </div>
            
            <div className="skill-card">
              <span className="skill-icon">
                <FaCode />
              </span>
              <h3>Development</h3>
              <p>Bringing designs to life with code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;