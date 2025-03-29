import React, { useEffect } from 'react';
import './seniorplay.css';
import main from '../images/seniorplay/main.png';
import Assumption_map from '../images/seniorplay/Assumption_map.png';
import Marketfit from '../images/seniorplay/Marketfit.png'; 
import wireframe from '../images/seniorplay/wireframe.png'; 
import Styleguide from '../images/seniorplay/Styleguide.png';
import UIkits from '../images/seniorplay/UI.png'; // Updated import
// Removed import for UI

const SeniorPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="seniorplay-container">
      {/* Hero Section - Using Primary Colors #8B5CF6, #561368, #DFD5F6 */}
      <div className="seniorplay-hero">
        <div className="hero-content">
          <h1>Senior<span>Play</span></h1>
          <p className="hero-subtitle">A Fun & Engaging Game App for Seniors</p>
          <img src={main} alt="SeniorPlay Hero" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>

      {/* Project Details - Using Secondary Colors #F9BA49, #F97316 */}
      <section className="seniorplay-section details">
        <div className="details-grid">
          <div className="detail-card">
            <h3>Role</h3>
            <p>UX/UI Designer</p>
          </div>
          <div className="detail-card">
            <h3>Timeline</h3>
            <p>KU Startup Bootcamp</p>
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

      {/* Achievement - Using Secondary Color #17634A */}
      <section className="seniorplay-section achievement">
        <h2>Achievement</h2>
        <div className="achievement-content">
          <div className="achievement-highlight">
            <h3>3rd Place in KU Startup Bootcamp</h3>
            <p>Our team was awarded 3rd place in the KU Startup Bootcamp for presenting Senior Play as a business-driven solution for elderly-friendly gaming. This recognition validated our approach to creating accessible technology for seniors.</p>
          </div>
          <div className="achievement-badge">
            <div className="badge-circle">
              <span>3rd</span>
              <span className="badge-number">PLACE</span>
              <span>KU Bootcamp</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started - Using Primary Color #8B5CF6 */}
      <section className="seniorplay-section how-started">
        <h2>🎓 How It Started</h2>
        <p>One of the most exciting experiences I had was joining the KU Startup Bootcamp, where students from different campuses came together to brainstorm innovative business ideas.</p>
        <p>At the beginning of the program, we were randomly grouped and given a challenge: come up with a startup idea that solves a real-world problem.</p>
        
        <h3>💡 From Brainstorming to Business Idea</h3>
        <p>Our team started by discussing various social issues, and one common theme stood out—our grandparents.</p>
        <p>We realized that many of us had elderly family members who struggled with boredom, loneliness, and a lack of engaging digital activities. Some of them wanted to play games but found most mobile games too fast, confusing, or difficult to use.</p>
        <p>This inspired us to create Senior Play—a mobile game app designed specifically for seniors, focusing on accessibility, cognitive engagement, and social connection.</p>
      </section>

      {/* Problem Statement - Using Primary Color #561368 */}
      <section className="seniorplay-section problem">
        <h2>Problem Statement</h2>
        <div className="problem-content">
          <div className="problem-challenges">
            <h3>🚨 The Problem</h3>
            <ul className="challenge-list">
              <li>Seniors want to play mobile games but struggle with small buttons, fast gameplay, and confusing menus</li>
              <li>Many games are not accessible for aging eyes, slower reflexes, or hearing impairments</li>
              <li>Social isolation is common among seniors, and games could help them connect with friends and family</li>
            </ul>
          </div>
          <div className="quote-container">
            <blockquote>
              "I love playing games, but most of them are too fast for me."
            </blockquote>
            <p className="quote-attribution">— Senior, 72</p>
          </div>
        </div>
        {/* Removed User Pain Points and Image */}
      </section>

      {/* Research & Insights - Using Secondary Colors #F9BA49, #FFEFC6 */}
      <section className="seniorplay-section research">
        <h2>Research & Insights</h2>
        <p>For this project, we took a unique approach to understanding the needs of elderly users by performing Assumption Mapping. We hypothesized the potential pain points and needs that seniors might face while engaging with mobile apps, specifically in the context of gaming and cognitive engagement. This method allowed us to form educated assumptions about how the target audience would interact with a game app and what challenges they might encounter.</p>
        
        <div className="research-image-container">
          <img src={Assumption_map} alt="Assumption Mapping" style={{ width: '100%', height: 'auto' }} />
        </div>
        
        <p>Through Assumption Mapping, we identified key areas to focus on:</p>
        <ul className="insights-list">
          <li>The need for simplicity in design and navigation.</li>
          <li>The importance of games that stimulate memory and cognitive skills.</li>
          <li>The potential for fostering social connections within the app, as isolation is a major issue for many elderly individuals.</li>
        </ul>
        
        <p>Once we had our assumptions mapped out, we then looked at the market fit by analyzing existing apps targeted at the elderly. We evaluated their strengths, weaknesses, and gaps in the user experience, which helped us refine the features we would include in Senior Play.</p>
        
        <div className="market-analysis-container">
          <img src={Marketfit} alt="Market Fit Analysis" style={{ width: '100%', height: 'auto' }} />
        </div>
        
      </section>

      {/* Solution - Using Primary Color #DFD5F6 and Secondary #17634A */}
      <section className="seniorplay-section solution">
        <h2>Solution: What Makes Senior Play Special?</h2>
        
        <div className="solution-features">
          <div className="feature-card">
            <h3>🎮 Senior-Friendly Games</h3>
            <ul className="feature-list">
              <li><span className="check">✔️</span> Large buttons & readable text</li>
              <li><span className="check">✔️</span> Simple touch-based interactions</li>
              <li><span className="check">✔️</span> Adjustable game speed & difficulty</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>🤝 Social & Family Play</h3>
            <ul className="feature-list">
              <li><span className="check">✔️</span> Play with grandkids or friends</li>
              <li><span className="check">✔️</span> Friendly challenges & leaderboards</li>
              <li><span className="check">✔️</span> Chat & voice messaging</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>🧠 Brain-Boosting Fun</h3>
            <ul className="feature-list">
              <li><span className="check">✔️</span> Word games, puzzles, memory challenges</li>
              <li><span className="check">✔️</span> Relaxing music & visuals</li>
              <li><span className="check">✔️</span> Daily rewards to encourage play</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wireframes & UI Design - Using Neutral Colors #F3F3F3, #757575 */}
      <section className="seniorplay-section wireframes">
        <h2>Wireframes & UI Design</h2>
        
        <p>Our design process focused on creating an interface that's easy to read, navigate, and enjoy for seniors with varying levels of tech experience.</p>
        
        <div className="wireframes-grid">
          <img src={wireframe} alt="Wireframe Design" style={{ width: '100%', height: 'auto' }} />
        </div>
        
        <div className="design-elements">
          <h3>UI Style Guide</h3>
          <div className="style-guide-container">
            <a href={Styleguide} target="_blank" rel="noopener noreferrer">
              <img src={Styleguide} alt="Typography & Colors" />
            </a>
            <a href={UIkits} target="_blank" rel="noopener noreferrer">
              <img src={UIkits} alt="Components & Elements" />
            </a>
          </div>
          <p>Our style guide was designed with accessibility in mind, featuring high contrast colors, readable typography, and clear iconography for senior users.</p>
        </div>
      </section>

      {/* Final Design - Using all colors from the palette */}
      <section className="seniorplay-section final-design">
        <h2>Final UI Design</h2>
        <div className="final-screens">
          <img src={UIkits} alt="Final UI Design" style={{ width: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* Impact - Using Secondary Colors #CFEE9A, #FFCAA4 */}
      <section className="seniorplay-section impact">
        <h2>Impact & Takeaways</h2>
        <div className="impact-content">
          <div className="impact-improvements">
            <h3>✨ What Improved</h3>
            <ul className="improvements-list">
              <li>Increased engagement from seniors</li>
              <li>More accessible gaming experience</li>
              <li>Strengthened family connections</li>
            </ul>
          </div>
          <div className="impact-learnings">
            <h3>✨ What I Learned</h3>
            <ul className="learnings-list">
              <li>Accessibility is key—small changes in UI make a big difference</li>
              <li>Seniors value social interaction in gaming</li>
              <li>Designing for different age groups requires empathy and research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Thoughts - Using Primary Color #8B5CF6 */}
      <section className="seniorplay-section final-thoughts">
        <h2>Final Thoughts</h2>
        <p>Senior Play is more than just a game app—it's a bridge between generations and a way to keep seniors mentally active and socially connected.</p>
        <p>This project taught me the importance of inclusive design and how technology can address social isolation among the elderly population.</p>
      </section>
    </div>
  );
};

export default SeniorPlay;