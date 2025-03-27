import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './ku-club.css';
import kuClubCover from '../../assets/cover/ku-club-cover.png';
import kuClubResearch from '../../assets/images/project-images/ku-club-research.png'; 
import lowWireframeImage from '../../assets/images/project-images/low-wireframe-image.jpg';
import midWireframeImage from '../../assets/images/project-images/mid-wireframe-image.png';
import iterationImage1 from '../../assets/images/project-images/iteration1.png';
import iterationImage2 from '../../assets/images/project-images/iteration2.png';
import iterationImage3 from '../../assets/images/project-images/iteration3.png';
import iterationImage4 from '../../assets/images/project-images/iteration4.png';
import typographyImage from '../../assets/images/project-images/typography.png';
import colorImage from '../../assets/images/project-images/color.png';
import componentImage from '../../assets/images/project-images/component.png';
import uiKitsImage from '../../assets/images/project-images/ui-kits.png';
import hifiWireframeImage from '../../assets/images/project-images/hifi-wireframe.png';
import wireframeMobileImage from '../../assets/images/project-images/wireframe-mobile.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const KUClub = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enables fade animation
  };

  const handleImageClick = () => {
    window.open(kuClubResearch, '_blank');
  };

  const handleIterationClick = (image) => {
    window.open(image, '_blank');
  };

  const handlePrevClick = () => {
    const container = document.querySelector('.carousel-images');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const handleNextClick = () => {
    const container = document.querySelector('.carousel-images');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const pieData = {
    labels: ['Lack of clarity on Favorites', 'Excessive clicks to find events', 'Join button placement confusion'],
    datasets: [
      {
        data: [2, 3, 1],
        backgroundColor: ['#A67C52', '#8FBC8F', '#D2B48C'],
        hoverBackgroundColor: ['#A67C52', '#8FBC8F', '#D2B48C']
      }
    ]
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || '';
            return `${label}: ${value}`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const labels = ['Favorites', 'Clicks', 'Join Button'];
          return labels[context.dataIndex];
        },
        anchor: 'center',
        align: 'center',
        offset: 0
      }
    }
  };

  return (
    <div className="project-container">
      <div className="banner">
        <img 
          src={kuClubCover}
          alt="KU Club Cover"
          onClick={() => window.open(kuClubCover, '_blank')}
        />
      </div>
      <div className="project-header">
        <h1>KU Clubs</h1>
        <p className="project-subtitle">
          A web application designed to help Kasetsart University students
          discover and join clubs
        </p>
        
        <div className="project-meta">
          <div className="meta-column">
            <div className="meta-item">
              <span className="meta-icon">💼</span>
              <div className="meta-content">
                <h4>Role</h4>
                <p>UXUI and Frontend</p>
              </div>
            </div>
            
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <div className="meta-content">
                <h4>Timeline</h4>
                <p>Feb, 2025 → March, 2025</p>
              </div>
            </div>
          </div>

          <div className="meta-column">
            <div className="meta-item">
              <span className="meta-icon">🏷️</span>
              <div className="meta-content">
                <h4>Tags</h4>
                <div className="tags">
                  <span className="tag ui-ux">UI/UX</span>
                  <span className="tag website">Website</span>
                </div>
              </div>
            </div>

            <div className="meta-item">
              <span className="meta-icon">🛠️</span>
              <div className="meta-content">
                <h4>Tools</h4>
                <div className="tools">
                  <span className="tool">Figma</span>
                  <span className="tool">Next.js</span>
                  <span className="tool">ClickUp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="overview" className="project-section">
        <h2>Project Overview</h2>
        <div className="overview-content">
          <p className="project-description">
            KU Club is a centralized hub that helps students discover clubs, explore activities, and join events at Kasetsart University. Instead of scattered LINE groups IG posts, KU Club provides a structured, easy-to-navigate directory where students can:
          </p>
          
          <div className="feature-list">
            <div className="feature-item">
              <span className="number">01</span>
              <p>Browse all clubs on campus</p>
            </div>
            <div className="feature-item">
              <span className="number">02</span>
              <p>Favorite clubs they're interested in</p>
            </div>
            <div className="feature-item">
              <span className="number">03</span>
              <p>View upcoming events for each club</p>
            </div>
            <div className="feature-item">
              <span className="number">04</span>
              <p>Sign up for activities via Google Forms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Problem Statement</h2>
        <div className="problem-circles">
          <div className="problem-circle">
            <div className="circle-content">
              <span className="problem-number">1</span>
              <p>Lack of Centralized Platform for Club Discovery</p>
            </div>
          </div>
          <div className="problem-circle">
            <div className="circle-content">
              <span className="problem-number">2</span>
              <p>Limited Awareness of Activities & Events</p>
            </div>
          </div>
          <div className="problem-circle">
            <div className="circle-content">
              <span className="problem-number">3</span>
              <p>No Easy Way to Explore & Join Clubs</p>
            </div>
          </div>
          <div className="problem-circle">
            <div className="circle-content">
              <span className="problem-number">4</span>
              <p>No Personalized Interaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Our Team Process</h2>
        <div className="process-flow">
          <div className="process-step">
            <div className="circle">1</div>
            <h3>Research & Strategy</h3>
            <p>Defined impact metrics & prioritized key features.</p>
          </div>
          <div className="line"></div>
          <div className="process-step">
            <div className="circle">2</div>
            <h3>Wireframing & Testing</h3>
            <p>Created wireframes & tested usability early</p>
          </div>
          <div className="line"></div>
          <div className="process-step">
            <div className="circle">3</div>
            <h3>UI Design & Responsiveness</h3>
            <p>Designed a scalable, mobile-friendly interface</p>
          </div>
          <div className="line"></div>
          <div className="process-step">
            <div className="circle">4</div>
            <h3>Development & Validation</h3>
            <p>Built frontend & conducted end-to-end testing</p>
          </div>
        </div>
        <h3 className="main-heading">1. Research & Strategy</h3>
        <p className="impact-text" style={{ marginTop: '2rem' }}>
          Defined impact metrics and prioritized key features to address user needs and project goals. We selected 4 key features for development, which are:
          <span className="highlight yellow">Club Listing</span>,
          <span className="highlight yellow">Club Detail</span>,
          <span className="highlight yellow">Club Activities</span>,
          <span className="highlight yellow">Favorites</span>.
        </p>
        <div className="research">
          <img 
            src={kuClubResearch} 
            alt="KU Club Impact Error metrix" 
            onClick={() => window.open(kuClubResearch, '_blank')}
          />
        </div>

        <h3 className="main-heading">2. Wireframing & Testing</h3>
        <p className="impact-text" style={{ marginTop: '2rem' }}>
          With key features defined, we moved to low-fidelity wireframing to visualize the user flow and test core interactions early, ensuring a solid foundation for the design.
        </p>
        <div className="wireframe">
          <img 
            src={lowWireframeImage} 
            alt="Low Fidelity Wireframe" 
            className="wireframe-image"
            onClick={() => window.open(lowWireframeImage, '_blank')}
          />
          <p className="image-caption">Low-Fidelity Wireframe</p>
        </div>

        <p className="impact-text" style={{ marginTop: '2rem' }}>
          After refining the user flow with low-fidelity wireframes, we moved to mid-fidelity wireframing, adding more structure and clarity to the design.
        </p>
        <div className="wireframe">
          <img 
            src={midWireframeImage} 
            alt="Mid Fidelity Wireframe" 
            className="wireframe-image"
            onClick={() => window.open(midWireframeImage, '_blank')}
          />
          <p className="image-caption">Mid-Fidelity Wireframe</p>
        </div>

        <div className="note-box">
          <i className="fas fa-lightbulb"></i>
          <p>Note: At this stage, we introduced a new flow to display detailed event information for each club, enhancing user engagement and navigation.</p>
        </div>
      </section>

      <section className="project-section">
        <h2>Testing Results</h2>
        <div className="testing-results-container">
          <div className="chart-container">
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="testing-text">
            <p>After testing the wireframe with five users, we identified key usability issues:</p>
            <ul>
              <li>Lack of clarity on Favorites: 2 out of 5 users didn't understand the purpose or benefits of the Favorite feature.</li>
              <li>Excessive clicks to find upcoming events: 3 out of 5 users felt that too many steps were required to check which clubs had upcoming activities.</li>
              <li>Join button placement confusion: 1 out of 5 users found the long activity page difficult to navigate, as the Join button at the bottom made it unclear whether the page was informational or actionable.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Iteration</h2>
        <div className="iteration-slider-container">
          <Slider {...settings}>
            <div className="iteration-slide">
              <img 
                src={iterationImage1} 
                alt="Iteration Image 1" 
                className="iteration-image" 
                onClick={() => window.open(iterationImage1, '_blank')}
              />
            </div>
            <div className="iteration-slide">
              <img 
                src={iterationImage2} 
                alt="Iteration Image 2" 
                className="iteration-image" 
                onClick={() => window.open(iterationImage2, '_blank')}
              />
            </div>
            <div className="iteration-slide">
              <img 
                src={iterationImage3} 
                alt="Iteration Image 3" 
                className="iteration-image" 
                onClick={() => window.open(iterationImage3, '_blank')}
              />
            </div>
            <div className="iteration-slide">
              <img 
                src={iterationImage4} 
                alt="Iteration Image 4" 
                className="iteration-image" 
                onClick={() => window.open(iterationImage4, '_blank')}
              />
            </div>
          </Slider>
        </div>
      </section>
      <section className="project-section">
        <h2>3. Visual Design</h2>
        <div className="design-content">
          <p>After iterating on the wireframes, we moved on to the visual design phase.</p>
          
          <div className="design-elements">
            <div className="design-element">
              <h4>Color Palette</h4>
              <p>Yellow, cream, black, and gray – representing energy, warmth, and creativity, while keeping the interface clean and modern.</p>
            </div>
            
            <div className="design-element">
              <h4>Symbol</h4>
              <p>A duck, embodying the idea that KU students are versatile learners who take on various challenges and continuously grow.</p>
            </div>
            
            <div className="design-element">
              <h4>Design Goal</h4>
              <p>To create a stimulating hub for learning and collaboration, where students can discover, engage, and participate in activities effortlessly while feeling inspired by the "power of the duck."</p>
            </div>
          </div>
        </div>
        
        <h3 className="style-guide-heading">UI STYLE GUIDE</h3>
        <div className="style-guide-images">
          <div className="style-guide-item">
            <img 
              src={typographyImage} 
              alt="Typography Style Guide" 
              className="style-guide-image"
              onClick={() => window.open(typographyImage, '_blank')}
            />
          </div>
          <div className="style-guide-item">
            <img 
              src={colorImage} 
              alt="Color Style Guide" 
              className="style-guide-image"
              onClick={() => window.open(colorImage, '_blank')}
            />
          </div>
          <div className="style-guide-item">
            <img 
              src={componentImage} 
              alt="Component Style Guide" 
              className="style-guide-image"
              onClick={() => window.open(componentImage, '_blank')}
            />
          </div>
          <div className="style-guide-item">
            <img 
              src={uiKitsImage} 
              alt="UI Kits Style Guide" 
              className="style-guide-image"
              onClick={() => window.open(uiKitsImage, '_blank')}
            />
          </div>
        </div>
      </section>
      <section className="grid-info-section">
        <h2>Grid Configuration for MacBook Air</h2>
        <p>Columns: 12 | Margin: 24px | Gutter: 20px</p>
      </section>
      <section className="design-showcase">
        <h2>KU Clubs Design Showcase</h2>
        <p>We have designed KU Clubs in both website and responsive formats, including layouts for iPhone 13 & 14.</p>
        <div className="design-images">
          <div className="design-image">
            <img 
              src={hifiWireframeImage} 
              alt="Hi-Fi Wireframe" 
              onClick={() => window.open(hifiWireframeImage, '_blank')}
            />
            <p className="image-caption">Hi-Fi Wireframe</p>
          </div>
          <div className="design-image">
            <img 
              src={wireframeMobileImage} 
              alt="Wireframe Mobile" 
              onClick={() => window.open(wireframeMobileImage, '_blank')}
            />
            <p className="image-caption">Wireframe Mobile</p>
          </div>
        </div>
      </section>
      <section className="project-section">
        <h2>What I Learned</h2>
        <div className="learning-content">
          <p>
            Through this project, I honed my skills in UX/UI design and frontend development. I learned the importance of feature prioritization, which helped me understand the scope of work between UX/UI and development. It was exciting to work on a large-scale web project and see the integration of design and functionality come to life.
          </p>
        </div>
      </section>
      
      </div>
        );
      };
      
      export default KUClub;