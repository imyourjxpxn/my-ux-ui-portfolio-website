import React from 'react';
import { FaTrophy } from 'react-icons/fa'; // เพิ่ม import นี้ที่ด้านบน
import './mordee.css'; // Ensure this path is correct
import mordeeCover from '../../assets/cover/mordee-cover.png'; // Import the image
import logo from '../../assets/images/mordee/mordee-logo.png'; // Import the logo image

const Mordee = () => {
  return (
    <div className="mordee-container">
      <header className="mordee-header">
        <h1>Mordee</h1>
        <h2>Develop features to encourage online doctor consultations</h2>
        <p className="subhead">Hackathon Competition</p>
      </header>
      <div className="mordee-image-container">
        <img src={mordeeCover} alt="Mordee Project" className="mordee-image" />
      </div>
      <div className="mordee-content">
        <div className="mordee-logo">
          <img src={logo} alt="Mordee Logo" className="logo-image" />
        </div>
        <div className="mordee-description">
          <h2>What is Mordee</h2>
          <p>
            Mordee (หมอดี) is a Thai telemedicine platform developed by True Digital Group. It provides online medical consultations, allowing users to connect with certified doctors via video calls or chat. The platform offers services such as general health consultations, mental health support, prescription delivery, and health check-ups.
          </p>
        </div>
      </div>
      <div className="competition-section">
        <div className="challenge-icon">
          🏆
        </div>
        <h2 className="competition-title">Competition Challenge</h2>
        <blockquote className="feature-quote">Feature for Future Telemedicine Application</blockquote>
        <div className="columns">
          <div className="column">
            <h3 className="centered-bold">Where I Started</h3>
          </div>
          <div className="column">
            <p>Growing up, I witnessed my mother caring for patients, which gave me a deep understanding of the challenges in healthcare.</p>
            <p>I became particularly interested in Non-Communicable Diseases (NCDs), observing patterns in how they affect Thai patients. Through personal observations and research, I noticed gaps in early intervention, patient monitoring, and accessibility—especially for those in rural areas or managing chronic conditions.</p>
          </div>
        </div>
      </div>
      {/* Add more content and components as needed */}
      <div className="statistics-section">
        <p className="stats-text">
          In 2023 (B.E. 2566), non-communicable diseases (NCDs) remain a major public health concern in Thailand, particularly diabetes and hypertension. According to a report from the Department of Medical Services, Ministry of Public Health, the diagnosis follow-up rate for diabetes patients
          <a href="https://medinfo.dms.go.th/public-health/ncd.php?kpi_year=2566&utm_source=chatgpt.com" 
             className="stats-link" 
             target="_blank" 
             rel="noopener noreferrer">
            (รายงาน DMS NCD ปี 2566)
          </a>
        </p>
        <div className="donut-charts">
          <div className="donut-chart">
            <div className="donut-hole">
              <span className="donut-percent">68.45%</span>
              <span className="donut-label">Follow-up Rate</span>
            </div>
          </div>
          <div className="donut-chart">
            <div className="donut-hole">
              <span className="donut-percent">51.95%</span>
              <span className="donut-label">LDL Testing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="survey-section">
        <h2 className="survey-title">Research Process</h2>
        <div className="survey-columns">
          <div className="research-process">
            <h3 className="stage-title">Google Form Survey</h3>
            <p className="stage-description">Conducted online surveys targeting individuals aged 30 and above.</p>
          </div>
          <div className="interview-process">
            <h3 className="stage-title">Face-to-Face Interviews</h3>
            <ul className="interview-questions">
              <li>What are your thoughts on online doctor consultations?</li>
              <li>Have you ever used a telemedicine platform?</li>
              <li>What concerns do you have about online medical services?</li>
            </ul>
          </div>
        </div>
        <div className="survey-stats">
          <div className="survey-stat">
            <span className="survey-percent">70% </span>
            <span className="survey-label">Unaware of Online Consultation Apps</span>
          </div>
          <div className="survey-stat">
            <span className="survey-percent">60% </span>
            <span className="survey-label">At Risk of NCDs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mordee;