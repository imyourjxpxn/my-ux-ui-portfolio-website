import React, { useEffect } from 'react';
import './AgroBakeryLabBooking.css';
import heroImage from '../images/agrobakery/BakeryBookingcover.png';
import OldBusinessFlow from '../images/agrobakery/OldBusinessFlow.png';
import NewBusinessFlow from '../images/agrobakery/NewBusinessFlow.png';
import StudentWireframe from '../images/agrobakery/StudentWireframe.png';
import ProfWireframe from '../images/agrobakery/ProfWireframe.png';
import StaffWireframe from '../images/agrobakery/StaffWireframe.png';
import UIstyleguide from '../images/agrobakery/UIstyleguide.png';
import StudentUI from '../images/agrobakery/StudentUI.png';
import ProfUI from '../images/agrobakery/ProfUI.png';
import StaffUI from '../images/agrobakery/StaffUI.png';

const AgroBakeryLabBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="agrobakery-container">
      {/* Hero Section */}
      <section className="agrobakery-hero">
        <div className="hero-content">
          <h1>Agro Bakery Lab Booking System</h1>
          <p className="hero-subtitle">Streamlining lab reservations for Kasetsart University</p>
          <img src={heroImage} alt="Agro Bakery Hero" style={{ width: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* Project Overview */}
      <section className="agrobakery-section overview">
        <h2>Project Overview</h2>
        <div className="overview-content">
          <div className="overview-details">
            <div className="detail-item">
              <h3>Role</h3>
              <p>UX/UI Designer</p>
            </div>
            <div className="detail-item">
              <h3>Duration</h3>
              <p>4 Weeks</p>
            </div>
            <div className="detail-item">
              <h3>Tools</h3>
              <p>Figma, Miro, Google Forms</p>
            </div>
          </div>
          <div className="overview-description">
            <p>This project involved designing a booking system for a bakery lab at Kasetsart University, which allows students and staff to reserve time slots for using the lab facilities. The goal was to simplify the process and reduce the administrative burden on staff.</p>
          </div>
        </div>
      </section>

      {/* Problem Statement - NEW SECTION */}
      <section className="agrobakery-section problem-statement">
        <h2>Problem Statement</h2>
        <div className="problem-content">
          <p>The existing booking system was inefficient, requiring manual approval from three professors, often leading to delays and miscommunication. Rejections were relayed indirectly through administrative staff, creating confusion. Additionally, approval criteria were inconsistent, relying on subjective judgment rather than clear guidelines, making the process unpredictable for students and staff.</p>
        </div>
      </section>

      {/* Design Process */}
      <section className="agrobakery-section design-process">
        <h2>Design Process</h2>
        
        <div className="process-timeline">
          <div className="process-step">
            <div className="process-icon research"></div>
            <h3>Research</h3>
            <p>Conducted surveys and interviews with students and lab staff</p>
          </div>
          <div className="process-step">
            <div className="process-icon wireframing"></div>
            <h3>Wireframing</h3>
            <p>Created low-fidelity wireframes to establish the system structure</p>
          </div>
          <div className="process-step">
            <div className="process-icon prototyping"></div>
            <h3>Prototyping</h3>
            <p>Developed interactive prototypes for user testing</p>
          </div>
          <div className="process-step">
            <div className="process-icon testing"></div>
            <h3>Testing</h3>
            <p>Conducted usability tests with potential users</p>
          </div>
          <div className="process-step">
            <div className="process-icon final"></div>
            <h3>Final Design</h3>
            <p>Refined the UI based on feedback and created high-fidelity mockups</p>
          </div>
        </div>
      </section>

      {/* Research & User Insights */}
      <section className="agrobakery-section research">
        <h2>Research & User Insights</h2>
        
        <p>To ensure that the new booking system meets the needs of the users, I conducted surveys and user research with students and staff to gather insights into their challenges with the old system and preferences for the new system.</p>
        
        <div className="business-flow-images">
          <a href={OldBusinessFlow} target="_blank" rel="noopener noreferrer">
            <img src={OldBusinessFlow} alt="Old Business Flow" className="flow-image" />
            <p className="image-caption">Old Business Flow</p> 
          </a>
          <a href={NewBusinessFlow} target="_blank" rel="noopener noreferrer">
            <img src={NewBusinessFlow} alt="New Business Flow" className="flow-image" />
            <p className="image-caption">New Business Flow</p>
          </a>
        </div>
        
        <div className="key-findings">
          <h3>Key Findings</h3>
          <ul className="findings-list">
            <li>Users prefer simplicity and ease of use</li>
            <li>They want to check availability and book slots quickly</li>
            <li>Automatic reminders are essential to ensure bookings are not forgotten</li>
            <li>Admin staff need a comprehensive dashboard to manage all bookings</li>
          </ul>
        </div>
      </section>

      {/* Business Flow Comparison */}
      <section className="agrobakery-section business-flow">
        <h2>Business Flow Comparison</h2>
        
        <div className="flow-comparison">
          <div className="flow-column before">
            <h3>Before <span>(Manual Process)</span></h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <p>Student/Staff arrives at the bakery lab and asks staff for availability</p>
              </div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <p>Staff checks the schedule on a physical calendar</p>
              </div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <p>If the lab is available, the staff manually writes down the reservation</p>
              </div>
              <div className="flow-step">
                <div className="step-number">4</div>
                <p>Student/Staff might forget to cancel or reschedule, leading to confusion</p>
              </div>
            </div>
          </div>
          
          <div className="flow-column after">
            <h3>After <span>(Digital Booking System)</span></h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <p>Student/Staff accesses the online platform</p>
              </div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <p>Check lab availability in real-time</p>
              </div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <p>Selects preferred time slot and confirms booking</p>
              </div>
              <div className="flow-step">
                <div className="step-number">4</div>
                <p>Automatic reminder sent to the user before their booking</p>
              </div>
              <div className="flow-step">
                <div className="step-number">5</div>
                <p>Admin can manage lab availability and bookings through an admin panel</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Remove this placeholder */}
      </section>

      {/* Pain Points & Solutions */}
      <section className="agrobakery-section pain-points">
        <h2>Pain Points & Solutions</h2>
        
        <div className="pain-solutions-grid">
          <div className="pain-point-card">
            <div className="pain-icon">⏱️</div>
            <h3>Time-Consuming Process</h3>
            <p className="pain">Manual booking required physical presence and staff assistance</p>
            <div className="solution-divider"></div>
            <p className="solution"><span>Solution:</span> Online booking system accessible 24/7</p>
          </div>
          
          <div className="pain-point-card">
            <div className="pain-icon">❌</div>
            <h3>Human Error</h3>
            <p className="pain">Manual entries led to double bookings and scheduling conflicts</p>
            <div className="solution-divider"></div>
            <p className="solution"><span>Solution:</span> Automated system prevents overlapping bookings</p>
          </div>
          
          <div className="pain-point-card">
            <div className="pain-icon">🔍</div>
            <h3>No Visibility</h3>
            <p className="pain">Students couldn't check availability without contacting staff</p>
            <div className="solution-divider"></div>
            <p className="solution"><span>Solution:</span> Real-time calendar showing all available slots</p>
          </div>
          
          <div className="pain-point-card">
            <div className="pain-icon">🔔</div>
            <h3>Missed Bookings</h3>
            <p className="pain">No reminders led to forgotten reservations and wasted lab time</p>
            <div className="solution-divider"></div>
            <p className="solution"><span>Solution:</span> Automated email/SMS reminders before bookings</p>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="agrobakery-section wireframes">
        <h2>Wireframes & Prototyping</h2>
        
        <p>Based on the insights gathered, I designed wireframes and created prototypes to visualize the user journey.</p>
        
        <div className="wireframes-grid">
          <div className="wireframe-item">
            <a href={StudentWireframe} target="_blank" rel="noopener noreferrer">
              <img src={StudentWireframe} alt="Student Wireframe" className="wireframe-image" />
              <p className="image-caption">Student Wireframe</p>
            </a>
          </div>
          <div className="wireframe-item">
            <a href={ProfWireframe} target="_blank" rel="noopener noreferrer">
              <img src={ProfWireframe} alt="Professor Wireframe" className="wireframe-image" />
              <p className="image-caption">Professor Wireframe</p>
            </a>
          </div>
          <div className="wireframe-item">
            <a href={StaffWireframe} target="_blank" rel="noopener noreferrer">
              <img src={StaffWireframe} alt="Staff Wireframe" className="wireframe-image" />
              <p className="image-caption">Staff Wireframe</p>
            </a>
          </div>
        </div>
        
        <div className="key-features">
          <h3>Key Features</h3>
          <ul className="features-list">
            <li>Real-time calendar integration</li>
            <li>Booking confirmation and reminders</li>
            <li>Admin dashboard to manage bookings</li>
            <li>User profiles to track booking history</li>
          </ul>
        </div>
      </section>

      {/* UI Style Guide - SIMPLIFIED SECTION */}
      <section className="agrobakery-section style-guide">
        <h2>UI Style Guide</h2>
        
        <p>I developed a consistent style guide to ensure the interface is cohesive, accessible, and aligns with the Agro industry of KU brand identity.</p>
        
        <div className="style-guide-content">
          <div className="ui-item">
            <a href={UIstyleguide} target="_blank" rel="noopener noreferrer">
              <img src={UIstyleguide} alt="UI Style Guide" className="ui-image" />
              <p className="image-caption">UI Style Guide</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final UI Design */}
      <section className="agrobakery-section final-design">
        <h2>Final UI Design</h2>
        
        <p>After multiple iterations and user testing, I created the final UI designs that address all the identified pain points and incorporate user feedback.</p>
        
        <div className="final-screens">
          <div className="ui-item">
            <a href={StudentUI} target="_blank" rel="noopener noreferrer">
              <img src={StudentUI} alt="Student UI Design" className="ui-image" />
              <p className="image-caption">Student Interface</p>
            </a>
          </div>
          <div className="ui-item">
            <a href={ProfUI} target="_blank" rel="noopener noreferrer">
              <img src={ProfUI} alt="Professor UI Design" className="ui-image" />
              <p className="image-caption">Professor Interface</p>
            </a>
          </div>
          <div className="ui-item">
            <a href={StaffUI} target="_blank" rel="noopener noreferrer">
              <img src={StaffUI} alt="Staff UI Design" className="ui-image" />
              <p className="image-caption">Staff Admin Interface</p>
            </a>
          </div>
        </div>
      </section>

      {/* Impact & Takeaways */}
      <section className="agrobakery-section impact">
        <h2>Impact & Takeaways</h2>
        
        <div className="impact-content">
          <div className="impact-improvements">
            <h3>What Improved</h3>
            <ul className="improvements-list">
              <li>Efficiency: Streamlined the booking process for students ,staff and professor</li>
              <li>Accuracy: Reduced errors from manual entries and misunderstandings</li>
              <li>User Satisfaction: Users can now book and manage lab time independently</li>
              <li>Resource Utilization: Better tracking led to improved lab usage efficiency</li>
            </ul>
          </div>
          
          <div className="impact-learnings">
            <h3>What I Learned</h3>
            <ul className="learnings-list">
              <li>The importance of understanding existing workflows before designing</li>
              <li>How to balance the needs of different user groups (students vs. admin staff vs. professor)</li>
              <li>The value of iterative testing in creating intuitive booking interfaces</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroBakeryLabBooking;