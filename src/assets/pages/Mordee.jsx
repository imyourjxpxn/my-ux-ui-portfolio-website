import React, { useEffect } from 'react';
import './mordee.css';

// Import images
import mainAppScreenshot from '../images/mordee/main-app-screenshot.png';
import wireframe from '../images/mordee/wireframe.png';
import finalHome from '../images/mordee/final.png';
import typography from '../images/mordee/typography.png';
import color from '../images/mordee/color.png';
import component from '../images/mordee/component.png';
import UIkits from '../images/mordee/UIkits.png';

const Mordee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mordee-container">
      {/* Hero Section */}
      <div className="mordee-hero">
        <div className="hero-content">
          <h1>Mordee</h1>
          <p className="hero-subtitle">Telemedicine Application for NCD Patients</p>
          <img src={mainAppScreenshot} alt="Main App Screenshot" />
        </div>
      </div>

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
        {/* <img src={problemVisualization} alt="Problem Visualization" /> */}
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
        {/* <img src={userFlowDiagram} alt="User Flow Diagram" /> */}
      </section>

      {/* Wireframes */}
      <section className="mordee-section wireframes">
        <h2>Wireframes & Iterations</h2>
        <p>Initial sketches focused on simplifying the booking process and integrating reminders. Feedback showed users needed clearer medication tracking and symptom logging.</p>
        <div className="wireframes-grid">
          <img src={wireframe} alt="Wireframe - Home Screen" style={{ width: '100%', height: 'auto' }} />
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
          <div className="visual-images" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <a href={typography} target="_blank" rel="noopener noreferrer">
              <img src={typography} alt="Typography" style={{ width: '48%', objectFit: 'contain', marginBottom: '10px' }} />
            </a>
            <a href={color} target="_blank" rel="noopener noreferrer">
              <img src={color} alt="Color Scheme" style={{ width: '48%', objectFit: 'contain', marginBottom: '10px' }} />
            </a>
            <a href={component} target="_blank" rel="noopener noreferrer">
              <img src={component} alt="Component" style={{ width: '48%', objectFit: 'contain' }} />
            </a>
            <a href={UIkits} target="_blank" rel="noopener noreferrer">
              <img src={UIkits} alt="UI Kits" style={{ width: '48%', objectFit: 'contain' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="mordee-section final-design">
        <h2>Final UI Design</h2>
        <div className="final-screens">
          <img src={finalHome} alt="Final UI Design" style={{ width: '100%', height: 'auto' }} />
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