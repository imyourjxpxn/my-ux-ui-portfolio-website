import React, { useEffect } from 'react';
import './ku-club.css';

// Mock images with dimensions
const mockImages = {
  banner: {
    name: "ku-club-banner.jpg",
    size: "1920x1080px",
    description: "Banner image showing KU Club homepage"
  },
  wireframe1: {
    name: "ku-club-wireframe-1.jpg",
    size: "800x600px",
    description: "Low-fidelity wireframe of club listing"
  },
  wireframe2: {
    name: "ku-club-wireframe-2.jpg",
    size: "800x600px",
    description: "Low-fidelity wireframe of club details"
  },
  wireframe3: {
    name: "ku-club-wireframe-3.jpg",
    size: "800x600px",
    description: "Low-fidelity wireframe of event calendar"
  },
  final1: {
    name: "ku-club-final-1.jpg",
    size: "1200x800px",
    description: "Final design of club listing page"
  },
  final2: {
    name: "ku-club-final-2.jpg",
    size: "1200x800px",
    description: "Final design of club details page"
  },
  final3: {
    name: "ku-club-final-3.jpg",
    size: "1200x800px",
    description: "Final design of event calendar"
  },
  responsive1: {
    name: "ku-club-responsive-1.jpg",
    size: "375x812px",
    description: "Mobile view of club listing"
  },
  responsive2: {
    name: "ku-club-responsive-2.jpg",
    size: "768x1024px",
    description: "Tablet view of club details"
  }
};

const KUClub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="mock-image">
          <div className="mock-image-placeholder">
            <p className="mock-image-name">{mockImages.banner.name}</p>
            <p className="mock-image-size">{mockImages.banner.size}</p>
            <p className="mock-image-desc">{mockImages.banner.description}</p>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="project-header">
        <h1>KU Clubs</h1>
        <p className="project-subtitle">
          A web application designed to help Kasetsart University students discover and join clubs
        </p>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="info-item">
          <h3>Role</h3>
          <p>UX/UI Designer</p>
        </div>
        <div className="info-item">
          <h3>Timeline</h3>
          <p>4 weeks</p>
        </div>
        <div className="info-item">
          <h3>Tools</h3>
          <div className="tools-list">
            <span className="tool">Figma</span>
            <span className="tool">Adobe XD</span>
            <span className="tool">Miro</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section">
        <h2>Overview</h2>
        <p>
          KU Clubs is a platform designed to centralize information about student clubs at Kasetsart University. 
          The goal was to create an intuitive interface where students can easily discover clubs, 
          view upcoming events, and join activities that match their interests.
        </p>
      </section>

      {/* Problem Section */}
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

      {/* Research Section */}
      <section className="section">
        <h2>Research</h2>
        <p>
          I conducted user interviews with 5 students to understand their experiences with 
          university clubs. Key findings included:
        </p>
        <div className="research-findings">
          <div className="finding">
            <h3>80%</h3>
            <p>of students found it difficult to discover new clubs</p>
          </div>
          <div className="finding">
            <h3>65%</h3>
            <p>missed events because they weren't aware of them</p>
          </div>
          <div className="finding">
            <h3>90%</h3>
            <p>wanted a single platform for all club information</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section">
        <h2>Design Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Research & Analysis</h3>
            <p>User interviews, competitive analysis, and problem definition</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Ideation & Wireframing</h3>
            <p>Sketching solutions and creating low-fidelity wireframes</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Prototyping</h3>
            <p>Building interactive prototypes for user testing</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Testing & Iteration</h3>
            <p>Gathering feedback and refining the design</p>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="section">
        <h2>Wireframes</h2>
        <p>
          I started with low-fidelity wireframes to establish the basic structure and user flow.
        </p>
        <div className="wireframes">
          <div className="wireframe">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.wireframe1.name}</p>
                <p className="mock-image-size">{mockImages.wireframe1.size}</p>
                <p className="mock-image-desc">{mockImages.wireframe1.description}</p>
              </div>
            </div>
            <p>Club Listing</p>
          </div>
          <div className="wireframe">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.wireframe2.name}</p>
                <p className="mock-image-size">{mockImages.wireframe2.size}</p>
                <p className="mock-image-desc">{mockImages.wireframe2.description}</p>
              </div>
            </div>
            <p>Club Details</p>
          </div>
          <div className="wireframe">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.wireframe3.name}</p>
                <p className="mock-image-size">{mockImages.wireframe3.size}</p>
                <p className="mock-image-desc">{mockImages.wireframe3.description}</p>
              </div>
            </div>
            <p>Event Calendar</p>
          </div>
        </div>
      </section>

      {/* Visual Design */}
      <section className="section">
        <h2>Visual Design</h2>
        <p>
          The visual design was inspired by Kasetsart University's brand colors and identity,
          with a focus on creating a clean, modern interface that appeals to students.
        </p>
        <div className="design-elements">
          <div className="element">
            <h3>Color Palette</h3>
            <div className="colors">
              <div className="color" style={{ backgroundColor: '#006C3B' }}></div>
              <div className="color" style={{ backgroundColor: '#E8B32F' }}></div>
              <div className="color" style={{ backgroundColor: '#FFFFFF' }}></div>
              <div className="color" style={{ backgroundColor: '#F5F5F5' }}></div>
              <div className="color" style={{ backgroundColor: '#333333' }}></div>
            </div>
          </div>
          <div className="element">
            <h3>Typography</h3>
            <div className="typography">
              <p className="font-heading">Heading: Montserrat Bold</p>
              <p className="font-body">Body: Roboto Regular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="section">
        <h2>Final Design</h2>
        <div className="final-designs">
          <div className="design">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.final1.name}</p>
                <p className="mock-image-size">{mockImages.final1.size}</p>
                <p className="mock-image-desc">{mockImages.final1.description}</p>
              </div>
            </div>
            <p>Club Listing Page</p>
          </div>
          <div className="design">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.final2.name}</p>
                <p className="mock-image-size">{mockImages.final2.size}</p>
                <p className="mock-image-desc">{mockImages.final2.description}</p>
              </div>
            </div>
            <p>Club Details Page</p>
          </div>
          <div className="design">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.final3.name}</p>
                <p className="mock-image-size">{mockImages.final3.size}</p>
                <p className="mock-image-desc">{mockImages.final3.description}</p>
              </div>
            </div>
            <p>Event Calendar</p>
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="section">
        <h2>Responsive Design</h2>
        <p>
          The application was designed to work seamlessly across desktop, tablet, and mobile devices.
        </p>
        <div className="responsive-designs">
          <div className="responsive-design">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.responsive1.name}</p>
                <p className="mock-image-size">{mockImages.responsive1.size}</p>
                <p className="mock-image-desc">{mockImages.responsive1.description}</p>
              </div>
            </div>
            <p>Mobile View</p>
          </div>
          <div className="responsive-design">
            <div className="mock-image">
              <div className="mock-image-placeholder">
                <p className="mock-image-name">{mockImages.responsive2.name}</p>
                <p className="mock-image-size">{mockImages.responsive2.size}</p>
                <p className="mock-image-desc">{mockImages.responsive2.description}</p>
              </div>
            </div>
            <p>Tablet View</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section">
        <h2>Outcomes & Learnings</h2>
        <div className="outcomes">
          <div className="outcome">
            <h3>User Satisfaction</h3>
            <p>
              User testing showed a 90% satisfaction rate with the new design, with particular 
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

      {/* Next Steps */}
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