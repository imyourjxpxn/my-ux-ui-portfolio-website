import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Projects.css';

// Create theme configuration for Montserrat
const fontStyle = {
  fontFamily: "'Montserrat', sans-serif"
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "KU Club",
      category: "Web app",
      image: "/assets/images/ku-club/project1.png",
      link: "/ku-club",
      tags: ["UX/UI+Frontend", "Website","DevOps project"]
    },
    {
      id: 2,
      title: "Mordee",
      category: "Mobile app",
      image: "/assets/images/mordee/project2.png",
      link: "/mordee",
      tags: ["UX/UI", "Mobile App","Hackathon"]
    },
    {
      id: 3,
      title: "SeniorPlay",
      category: "Mobile app",
      image: "/assets/images/seniorplay/project3.png",
      link: "/seniorplay",
      tags: ["UX/UI", "Mobile App", "StartUpBootcamp"]
    }, 
    {
      id: 4,
      title: "Agro Bakery Lab Booking",
      category: "Website",
      image: "/assets/images/Agrobakery/project4.png",
      link: "/agrobakery",
      tags: ["UX/UI+SA", "Website","SA project"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <Container maxWidth="lg" sx={fontStyle}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          className="section-title"
          sx={{ 
            marginBottom: '4rem',
            position: 'relative',
            paddingBottom: '1.5rem',
            ...fontStyle
          }}
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ margin: '0 auto' }}>
          {projects.map(project => (
            <Grid item xs={12} sm={6} key={project.id}>
              <Box 
                component={Link} 
                to={project.link} 
                sx={{ 
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  },
                  ...fontStyle
                }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    ...fontStyle
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    padding: '1.5rem',
                    justifyContent: 'space-between',
                    height: '160px',
                    ...fontStyle
                  }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        color: '#5D4037', 
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontSize: '1.5rem',
                        lineHeight: 1.2,
                        ...fontStyle
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#8D6E63', 
                        marginTop: 'auto',
                        fontSize: '0.9rem',
                        ...fontStyle
                      }}
                    >
                     {project.tags.join(' / ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;