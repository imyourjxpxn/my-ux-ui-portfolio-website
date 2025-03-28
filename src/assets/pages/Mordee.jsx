import React, { useEffect } from 'react';
import './mordee.css';

const Mordee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a style object for consistent font usage
  const fontStyle = {
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <div className="mordee-container" style={fontStyle}>
      {/* Hero Section */}
      <div className="mordee-hero">
        <div className="hero-content">
          <h1>Mordee</h1>
          <p className="hero-subtitle">Telemedicine Application for NCD Patients</p>
          {/* ตรงนี้ควรใส่รูปหน้าจอหลักของแอพ Mordee */}
          <div className="hero-image-placeholder">
            <p>Main App Screenshot</p>
          </div>
        </div>
      </div>

      {/* Project Details - ย้ายมาอยู่ด้านบนสุดถัดจาก Hero */}
      <section className="mordee-section details">
        <div className="details-grid">
          <div className="detail-card">
            <h3>Role</h3>
            <p>UX/UI Designer</p>
          </div>
          <div className="detail-card">
            <h3>Timeline</h3>
            <p>6 weeks</p>
          </div>
          <div className="detail-card">
            <h3>Tools</h3>
            <div className="tools-list">
              <span>Figma</span>
              <span>Google Forms</span>
              <span>Miro</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="mordee-section how-started">
        <h2>👩‍⚕️ How It Started</h2>
        <p>One day, I came across an announcement about the TrueLab x Mordee Hackathon, which aimed to develop innovative features for telemedicine applications. The challenge focused on improving accessibility to online medical services for Thai people.</p>
        <p>I saw this as a great opportunity to design a user experience that directly addresses real healthcare challenges.</p>
      </section>

      {/* Project Overview */}
      <section className="mordee-section overview">
        <h2>Project Overview</h2>
        <div className="overview-content">
          <div className="overview-text">
            <h3>Background</h3>
            <p>
              Growing up, I was surrounded by stories from my mother, who is a nurse. She often shared how many NCD 
              (Non-Communicable Disease) patients struggled with managing their health. Many of them had to frequently 
              visit hospitals for medication refills and follow-ups. Yet, some missed appointments due to inconvenience, 
              long wait times, or lack of transportation—leading to worsened conditions.
            </p>
          </div>
          <div className="overview-stats">
            <div className="stat-item">
              <h4>70%</h4>
              <p>of people surveyed weren't aware of telemedicine apps</p>
            </div>
            <div className="stat-item">
              <h4>60%</h4>
              <p>of users had lifestyle habits that increased their risk of NCDs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ลบส่วน Project Details ที่ซ้ำกันอยู่ในไฟล์ mordee.jsx ผมจะแนะนำให้ลบส่วนที่ซ้ำออกครับ */}

      {/* Problem Statement */}
      <section className="mordee-section problem">
        <h2>Problem Statement</h2>
        <div className="problem-content">
          <div className="problem-challenges">
            <h3>The Challenge</h3>
            <ul className="challenge-list">
              <li>Forgetting to take medication regularly</li>
              <li>Difficulty tracking symptoms over time</li>
              <li>Long wait times and inconvenient travel for hospital visits</li>
              <li>Limited awareness of telemedicine services as an alternative</li>
            </ul>
          </div>
          <div className="quote-container">
            <blockquote>
              "I don't know how to use telemedicine apps, so I just go to the clinic when I have time."
            </blockquote>
            <p className="quote-attribution">— NCD Patient, 58</p>
          </div>
        </div>
        {/* ตรงนี้ควรใส่รูปแสดงปัญหาหรือ pain points */}
        <div className="problem-image-placeholder">
          <p>Problem Visualization</p>
        </div>
      </section>

      {/* User Flow */}
      <section className="mordee-section user-flow">
        <h2>User Flow Comparison</h2>
        <div className="flow-comparison">
          <div className="flow-column traditional">
            <h3>Before <span>(Traditional Hospital Journey)</span></h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <p>Patient experiences symptoms and decides to visit a doctor</p>
              </div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <p>Travels to the hospital/clinic (often far & inconvenient)</p>
              </div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <p>Waits in a long queue to see the doctor</p>
              </div>
              <div className="flow-step">
                <div className="step-number">4</div>
                <p>Doctor prescribes medication and sets a follow-up appointment</p>
              </div>
              <div className="flow-step">
                <div className="step-number">5</div>
                <p>Patient may forget follow-ups or have difficulty managing medications</p>
              </div>
            </div>
          </div>
          <div className="flow-column mordee">
            <h3>After <span>(Mordee's Telemedicine Feature)</span></h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <p>Patient logs into Mordee app and books an online consultation</p>
              </div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <p>Consults with a doctor remotely from home</p>
              </div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <p>Receives e-prescription and automated medication reminders</p>
              </div>
              <div className="flow-step">
                <div className="step-number">4</div>
                <p>Tracks symptoms and health data in the app</p>
              </div>
              <div className="flow-step">
                <div className="step-number">5</div>
                <p>Gets follow-up reminders & rebooks consultations seamlessly</p>
              </div>
            </div>
          </div>
        </div>
        {/* ตรงนี้ควรใส่รูป user flow diagram */}
        <div className="flow-diagram-placeholder">
          <p>User Flow Diagram</p>
        </div>
      </section>

      {/* Design Process */}
      <section className="mordee-section design-process">
        <h2>Design Process</h2>
        <div className="process-timeline">
          <div className="process-step">
            <div className="process-icon research"></div>
            <h3>Research</h3>
            <p>Conducted surveys and interviews with NCD patients to understand their challenges</p>
          </div>
          <div className="process-step">
            <div className="process-icon ideation"></div>
            <h3>Ideation</h3>
            <p>Brainstormed solutions to address key pain points identified in research</p>
          </div>
          <div className="process-step">
            <div className="process-icon wireframing"></div>
            <h3>Wireframing</h3>
            <p>Created low-fidelity wireframes to establish the app structure</p>
          </div>
          <div className="process-step">
            <div className="process-icon testing"></div>
            <h3>Testing</h3>
            <p>Conducted usability tests with potential users to refine the design</p>
          </div>
          <div className="process-step">
            <div className="process-icon final"></div>
            <h3>Final Design</h3>
            <p>Developed high-fidelity mockups and interactive prototype</p>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="mordee-section wireframes">
        <h2>Wireframes & Iterations</h2>
        <p>Initial sketches focused on simplifying the booking process and integrating reminders. Feedback showed users needed clearer medication tracking and symptom logging.</p>
        <div className="wireframes-grid">
          {/* ตรงนี้ควรใส่รูป wireframes 3-4 รูป */}
          <div className="wireframe-placeholder">
            <p>Wireframe - Home Screen</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Appointment Booking</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Medication Reminder</p>
          </div>
          <div className="wireframe-placeholder">
            <p>Wireframe - Health Tracking</p>
          </div>
        </div>
        <div className="iterations">
          <h3>Key Iterations After Usability Testing</h3>
          <ul className="iteration-list">
            <li>Improved navigation flow to reduce user confusion</li>
            <li>Added a daily health tracker for NCD patients</li>
            <li>Enhanced visual hierarchy for medication alerts</li>
          </ul>
        </div>
      </section>

      {/* Visual Design */}
      <section className="mordee-section visual-design">
        <h2>Visual Design</h2>
        <div className="design-elements">
          <div className="color-palette">
            <h3>Color Scheme</h3>
            <div className="colors">
              <div className="color-item" style={{ backgroundColor: '#4ECDC4' }}><span>Mint Green</span></div>
              <div className="color-item" style={{ backgroundColor: '#FF6B6B' }}><span>Coral</span></div>
              <div className="color-item" style={{ backgroundColor: '#FFE66D' }}><span>Yellow</span></div>
              <div className="color-item" style={{ backgroundColor: '#F7FFF7' }}><span>Off-White</span></div>
              <div className="color-item" style={{ backgroundColor: '#1A535C' }}><span>Dark Teal</span></div>
            </div>
            <p>The color scheme was chosen to create a warm, trustworthy feel while emphasizing health and energy.</p>
          </div>
          <div className="typography">
            <h3>Typography</h3>
            <div className="font-samples">
              <div className="font-heading">Montserrat</div>
              <div className="font-body">Roboto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="mordee-section final-design">
        <h2>Final UI Design</h2>
        <div className="final-screens">
          {/* ตรงนี้ควรใส่รูปหน้าจอสุดท้าย 4-6 รูป */}
          <div className="screen-placeholder">
            <p>Home & Dashboard</p>
          </div>
          <div className="screen-placeholder">
            <p>Appointment Booking</p>
          </div>
          <div className="screen-placeholder">
            <p>Medication Reminder</p>
          </div>
          <div className="screen-placeholder">
            <p>Health Tracking</p>
          </div>
          <div className="screen-placeholder">
            <p>Doctor Consultation</p>
          </div>
          <div className="screen-placeholder">
            <p>Reports</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mordee-section impact">
        <h2>Impact & Takeaways</h2>
        <div className="impact-content">
          <div className="impact-improvements">
            <h3>What Improved</h3>
            <ul className="improvements-list">
              <li>Reduced appointment friction & increased telemedicine adoption</li>
              <li>Helped users stay on track with medication via reminders</li>
              <li>Made healthcare more accessible, especially for those in remote areas</li>
            </ul>
          </div>
          <div className="impact-learnings">
            <h3>What I Learned</h3>
            <ul className="learnings-list">
              <li>Usability testing is key—small design tweaks made a huge impact</li>
              <li>Users need reassurance about telemedicine being affordable & reliable</li>
              <li>Balancing accessibility & aesthetics ensures a better user experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievement */}
      <section className="mordee-section achievement">
        <h2>Achievement</h2>
        <div className="achievement-content">
          <div className="achievement-highlight">
            <h3>Selected as 1 of 15 Teams</h3>
            <p>I'm proud that this project was selected as one of the top 15 teams out of 150 participating teams in the competition. This recognition validates the user-centered approach and innovative solutions we developed for NCD patients.</p>
          </div>
          <div className="achievement-badge">
            <div className="badge-circle">
              <span>TOP</span>
              <span className="badge-number">15</span>
              <span>of 150</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mordee;