// src/components/About.js
import React from 'react';
import profileImage from '../images/profile.jpg'; // Add your profile image path here

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm [Erica Bolanio], a passionate and dedicated [UI/UX] based in [Davao]. With a background in [BSIT], I specialize in [making prototype].
          </p>
          <p>
            I thrive on exploring new things and continuously learning new technologies. My goal is to deliver high-quality solutions and contribute to innovative projects that make a difference.
          </p>
          <p>
            When I'm not prototyping, you can find me [attend concert of my kpop idols]. I enjoy [adventure, reading, eating and sleeping].
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX</li>
              <li>Microsoft Office</li>
              <li>Justinmind</li>
              <li>Project Manager</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
