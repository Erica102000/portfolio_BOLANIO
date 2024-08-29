// src/components/Projects.js
import React from 'react';
import project1Image from '../images/project1.jpg'; // Adjust path if necessary
import project2Image from '../images/project2.jpg'; // Adjust path if necessary

const projects = [
  {
    id: 1,
    title: 'Concert Ticket Online System',
    description: 'Get ready for an unforgettable night of live music with [Artist/Band Name]! Known for their [genre/style] and electric stage presence, this is a concert you won’t want to miss',
    image: project1Image,
    link: 'https://youtu.be/KH2VpBWDGM8?si=JhPIL97wxMGUP42-' // Replace with actual project link
  },
  {
    id: 2,
    title: 'Erkang Airline Booking System',
    description: ' Streamline your travel planning with our intuitive Airline Booking System. Effortlessly search for flights based on your preferred Streamline your travel planning with our intuitive Airline Booking System.dates and destinations, compare options, and select the best itinerary that suits your needs. .',
    image: project2Image,
    link: 'https://youtu.be/Fj3euSYAtnc?si=X88JTX__j2JA7rjl' // Replace with actual project link
  }
  
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
