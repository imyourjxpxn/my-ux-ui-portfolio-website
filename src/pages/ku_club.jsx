import React, { useEffect } from 'react';
import './ku-club.css';

import KUClubBanner from '/assets/images/ku-club/ku-club-banner.png';
import lowwireframe from '/assets/images/ku-club/low-wireframe-image.jpg';
import midwireframe from '/assets/images/ku-club/mid-wireframe-image.png';
import Iteration1 from '/assets/images/ku-club/Iteration1.png';
import Iteration2 from '/assets/images/ku-club/Iteration2.png';
import Iteration3 from '/assets/images/ku-club/Iteration3.png';
import Iteration4 from '/assets/images/ku-club/Iteration4.png';

import typography from '/assets/images/ku-club/typography.png';
import color from '/assets/images/ku-club/color.png';
import component from '/assets/images/ku-club/component.png';
import UIkits from '/assets/images/ku-club/UIkits.png';

import ImpactErrorMatrix from '/assets/images/ku-club/ImpactMatrix.png';

import FinalDesign from '/assets/images/ku-club/hifi-wireframe.png';

import responsive from '/assets/images/ku-club/wireframe-mobile.png';

const KUClub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      {/* Banner Section - ปรับปรุงให้ดูสวยงามขึ้น */}
      <div className="banner">
        <img 
          src={KUClubBanner} 
          alt="KU Clubs Banner" 
        />
      </div>

      {/* Project Header - เพิ่ม animation และปรับแต่งให้ดูโดดเด่น */}
      <div className="project-header">
        <h1>KU Clubs</h1>
        <div className="header-underline"></div>
        <p className="project-subtitle">
          A web application designed to help Kasetsart University students discover and join clubs
        </p>
      </div>

      {/* Project Info - ปรับการแสดงผลให้ดูทันสมัยขึ้น */}
      <div className="project-info">
        <div className="info-item">
          <h3>Role</h3>
          <p>UX/UI Designer and Frontend developer</p>
        </div>
        <div className="info-item">
          <h3>Timeline</h3>
          <p>Feb,2025- March 2025</p>
        </div>
        <div className="info-item">
          <h3>Tools</h3>
          <p className="tools-paragraph">
            <span className="tool">Figma</span>
            <span className="tool">Next.js</span>
            <span className="tool">TailwindCss</span>
            <span className="tool">ClickUp</span>
          </p>
        </div>
      </div>

      {/* Overview Section - เพิ่ม highlight */}
      <section className="section">
        <h2>Overview</h2>
        <p>
          KU Clubs is a platform designed to centralize information about student clubs at Kasetsart University. 
          The goal was to create an <span className="highlight">intuitive interface</span> where students can easily discover clubs, 
          view upcoming events, and join activities that match their interests.
        </p>
      </section>

      {/* Problem Section - ปรับ list style */}
      <section className="section">
        <h2>Problem</h2>
        <p>
          Students at Kasetsart University face challenges finding and joining clubs due to:
        </p>
        <ul className="problem-list">
          <li>Scattered information across multiple platforms</li>
          <li>Lack of centralized event calendar</li>
          <li>Difficulty discovering clubs that match their interests</li>
          <li>Complicated joining processes</li>
        </ul>
      </section>

      {/* Research Section - เพิ่ม card effect */}
      <section className="section">
        <h2>Research</h2>
        <p>
          I conducted user depth interviews with 5 students to understand their experiences with 
          university clubs. Key findings included:
        </p>
        <div className="research-findings">
          <div className="finding">
            <h3>4/5</h3>
            <p>of students found it difficult to discover new clubs</p>
          </div>
          <div className="finding">
            <h3>3/5</h3>
            <p>missed events because they weren't aware of them</p>
          </div>
          <div className="finding">
            <h3>100%</h3>
            <p>wanted a single platform for all club information</p>
          </div>
        </div>
      </section>

      {/* Design Process - ปรับการแสดงผลของรูปภาพ */}
      <section className="section">
        <h2>Design Process</h2>
        <p>
          To ensure efficient development and maximum user value, I utilized an Impact-Error Matrix 
          for feature prioritization. This approach helped balance user expectations with our 
          development timeline.
        </p>
        <div className="impact-matrix">
          <img 
            src={ImpactErrorMatrix} 
            alt="Impact-Error Matrix" 
            className="responsive-image" 
            onClick={() => window.open(ImpactErrorMatrix, '_blank')}
            style={{ cursor: 'pointer' }}
          />
          <p className="image-caption">Impact-Error Matrix for Feature Prioritization</p>
        </div>
      </section>

      {/* Wireframes - ปรับการแสดงผลให้ดูสวยงามขึ้น */}
      <section className="section">
        <h2>Wireframes</h2>
        <p>
          I started with low-fidelity wireframes to establish the basic structure and user flow.
        </p>
        <div className="wireframes">
          <div className="wireframe">
            <img 
              src={lowwireframe} 
              alt="Low-fidelity wireframe" 
              onClick={() => window.open(lowwireframe, '_blank')}
            />
            <p>Low-fidelity Wireframe</p>
          </div>
        </div>
        <p className="wireframe-description">
          After validating the basic structure, I developed mid-fidelity wireframes to refine the layout and interactions.
        </p>
        <div className="wireframes">
          <div className="wireframe">
            <img 
              src={midwireframe} 
              alt="Mid-fidelity wireframe" 
              onClick={() => window.open(midwireframe, '_blank')}
            />
            <p>Mid-fidelity Wireframe</p>
          </div>
        </div>
      </section>

      {/* Iterations - ปรับ slider ให้ดูทันสมัยขึ้น */}
      <section className="section">
        <h2>Iterations</h2>
        <p>
          Through multiple iterations, I refined the design based on user feedback and testing results. 
          Each iteration brought significant improvements to the user experience.
        </p>
        <div className="iterations-container">
          <div className="iterations-slider">
            <div className="iteration-slide">
              <img 
                src={Iteration1} 
                alt="First iteration" 
                className="iteration-image" 
                onClick={() => window.open(Iteration1, '_blank')}
              />
              <p>Upcoming Eventx</p>
            </div>
            <div className="iteration-slide">
              <img 
                src={Iteration2} 
                alt="Second iteration" 
                className="iteration-image" 
                onClick={() => window.open(Iteration2, '_blank')}
              />
              <p>Fast Register</p>
            </div>
            <div className="iteration-slide">
              <img 
                src={Iteration3} 
                alt="Third iteration" 
                className="iteration-image" 
                onClick={() => window.open(Iteration3, '_blank')}
              />
              <p>Data Summary from Past Events</p>
            </div>
            <div className="iteration-slide">
              <img 
                src={Iteration4} 
                alt="Final iteration" 
                className="iteration-image" 
                onClick={() => window.open(Iteration4, '_blank')}
              />
              <p>Favorite Club</p>
            </div>
          </div>
          <div className="slider-controls">
            <p className="slide-instruction">← Swipe to see different iterations →</p>
          </div>
        </div>
      </section>

      {/* Visual Design - ปรับ grid layout ให้ดูสวยงามขึ้น */}
      <section className="section">
        <h2>Visual Design</h2>
        <p>
          The visual design system was crafted to embody the essence of KU Club—not just as a platform but
          as a community for the "human duck" spirit: curious, adaptable, and always eager to learn.
          Instead of adhering to Kasetsart University’s official colors, the design embraces a bold yellow,
          symbolizing enthusiasm and versatility. The duck-themed elements reinforce the idea of students
          exploring diverse interests, while the modern and user-friendly interface ensures an engaging and inclusive experience.
        </p>
        <div className="visual-design-grid">
          <div className="design-item">
            <img 
              src={color} 
              alt="Color System" 
              className="responsive-image" 
              onClick={() => window.open(color, '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <h3>Color System</h3>
            <p>Brand-aligned color palette optimized for accessibility.  The colors reflect the platform’s energetic and inclusive nature while
              maintaining readability and usability across all interfaces.</p>
          </div>
          <div className="design-item">
            <img 
              src={typography} 
              alt="Typography System" 
              className="responsive-image" 
              onClick={() => window.open(typography, '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <h3>Typography</h3>
            <p>Clear hierarchical type system for optimal readability</p>
          </div>
          <div className="design-item">
            <img 
              src={component} 
              alt="Component Library" 
              className="responsive-image" 
              onClick={() => window.open(component, '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <h3>Components</h3>
            <p>Reusable components ensuring consistent interactions</p>
          </div>
          <div className="design-item">
            <img 
              src={UIkits} 
              alt="UI Kit Overview" 
              className="responsive-image" 
              onClick={() => window.open(UIkits, '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <h3>UI Kit</h3>
            <p>Comprehensive design system for scalable development</p>
          </div>
        </div>
      </section>

      {/* Final Design - เพิ่ม caption และปรับการแสดงผล */}
      <section className="section">
        <h2>Final Design</h2>
        <p>
          The final design presents a clean, intuitive interface that enables students to effortlessly explore and engage with university clubs.
          It effectively addresses the key challenges identified through research while embracing the spirit of Kasetsart University in a fresh and dynamic way.
        </p>
        <div className="final-design-showcase">
          <img 
            src={FinalDesign} 
            alt="KU Clubs Final Design" 
            className="showcase-image" 
            onClick={() => window.open(FinalDesign, '_blank')}
            style={{ cursor: 'pointer' }}
          />
          <p className="image-caption">Final High-Fidelity Design</p>
        </div>

        <div className="responsive-design">
          <h3>Responsive Design</h3>
          <p>
            The design was optimized for mobile devices, ensuring a seamless experience 
            across different screen sizes while maintaining the core functionality and visual hierarchy.
          </p>
          <div className="responsive-showcase">
            <img 
              src={responsive} 
              alt="Mobile responsive design" 
              className="responsive-image" 
              onClick={() => window.open(responsive, '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <p className="image-caption">Mobile Responsive Design</p>
          </div>
        </div>
      </section>

      {/* Outcomes - ปรับ card design */}
      <section className="section">
        <h2>Outcomes & Learnings</h2>
        <div className="outcomes">
          <div className="outcome">
            <h3>User Satisfaction</h3>
            <p>
              User testing showed a <span className="highlight">80% satisfaction rate</span> with the new design, with particular 
              appreciation for the intuitive navigation and comprehensive club information.
            </p>
          </div>
          <div className="outcome">
            <h3>Key Learnings</h3>
            <p>
              This project reinforced the importance of thorough user research and iterative design. 
              I learned that even small usability improvements can significantly enhance the overall user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps - ปรับ list style */}
      <section className="section">
        <h2>Next Steps</h2>
        <ul className="next-steps">
          <li>Implement user authentication for personalized experiences</li>
          <li>Add direct messaging between students and club representatives</li>
          <li>Develop analytics dashboard for club administrators</li>
          <li>Integrate with university calendar system</li>
        </ul>
      </section>
      
    </div>
  );
};

export default KUClub;