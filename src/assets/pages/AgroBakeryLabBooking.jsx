import React, { useEffect } from 'react';
import './AgroBakeryLabBooking.css';

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
          
          {/* Hero Image Placeholder */}
          <div className="hero-image-placeholder">
            <p>Hero Image - Agro Bakery Lab Booking System</p>
          </div>
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
        
        {/* Business Flow Diagram Placeholder */}
        <div className="flow-diagram-placeholder">
          <p>Business Flow Comparison Diagram</p>
        </div>
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

      {/* Research & User Insights */}
      <section className="agrobakery-section research">
        <h2>Research & User Insights</h2>
        
        <p>To ensure that the new booking system meets the needs of the users, I conducted surveys and user research with students and staff to gather insights into their challenges with the old system and preferences for the new system.</p>
        
        {/* Research Image Placeholder */}
        <div className="research-image-placeholder">
          <p>User Research Findings</p>
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

      {/* Wireframes */}
      <section className="agrobakery-section wireframes">
        <h2>Wireframes & Prototyping</h2>
        
        <p>Based on the insights gathered, I designed wireframes and created prototypes to visualize the user journey.</p>
        
        <div className="wireframes-grid">
          <div className="wireframe-placeholder">
            <p>Wireframe - Home Screen</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Booking Calendar</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Confirmation</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Admin Dashboard</p>
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

      {/* Final UI Design */}
      <section className="agrobakery-section final-design">
        <h2>Final UI Design</h2>
        
        <div className="design-elements">
          <div className="color-palette">
            <h3>Color Scheme</h3>
            <div className="colors">
              <div className="color-item" style={{ backgroundColor: '#E57F9E' }}><span>Pink</span></div>
              <div className="color-item" style={{ backgroundColor: '#A0A0A0' }}><span>Gray</span></div>
              <div className="color-item" style={{ backgroundColor: '#7FB77E' }}><span>Green</span></div>
              <div className="color-item" style={{ backgroundColor: '#F9F9F9' }}><span>Light Gray</span></div>
              <div className="color-item" style={{ backgroundColor: '#333333' }}><span>Dark Gray</span></div>
            </div>
          </div>
        </div>
        
        <div className="final-screens">
          <div className="screen-placeholder">
            <p>Home Screen</p>
          </div>
          <div className="screen-placeholder">
            <p>Booking Calendar</p>
          </div>
          <div className="screen-placeholder">
            <p>Booking Confirmation</p>
          </div>
          <div className="screen-placeholder">
            <p>User Profile</p>
          </div>
          <div className="screen-placeholder">
            <p>Admin Dashboard</p>
          </div>
          <div className="screen-placeholder">
            <p>Mobile View</p>
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
              <li>Efficiency: Streamlined the booking process for students and staff</li>
              <li>Accuracy: Reduced errors from manual entries and misunderstandings</li>
              <li>User Satisfaction: Users can now book and manage lab time independently</li>
              <li>Resource Utilization: Better tracking led to improved lab usage efficiency</li>
            </ul>
          </div>
          
          <div className="impact-learnings">
            <h3>What I Learned</h3>
            <ul className="learnings-list">
              <li>The importance of understanding existing workflows before redesigning</li>
              <li>How to balance the needs of different user groups (students vs. admin staff)</li>
              <li>The value of iterative testing in creating intuitive booking interfaces</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroBakeryLabBooking;