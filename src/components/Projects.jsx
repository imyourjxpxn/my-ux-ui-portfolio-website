import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "KU Club",
      category: "Web app",
      image: "/src/assets/project1.png",
      link: "/ku-club"  
    },
    {
      id: 2,
      title: "Mordee",
      category: "Mobile app",
      image: "/src/assets/project2.png",
      link: "/mordee"
    },
    {
      id: 3,
      title: "SeniorPlay",
      category: "Mobile app",
      image: "/src/assets/project3.png",
      link: "/projects/seniorplay"
    }, {
      id: 4,
      title: "Agro Bakery Lab Booking",
      category: "Website",
      image: "/src/assets/project4.png",
      link: "/projects/AgroBakeryLabBooking"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-wrapper">
          <div className="projects-list">
            {projects.map(project => (
              <Link to={project.link} className="project-item" key={project.id}>
                <div className="project-content">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;