import React from 'react';

interface AboutMeProps {
  show: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ show }) => {
  return (
    <div className={`about-modal ${show ? 'show' : ''}`}>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate developer who loves creating beautiful and functional web experiences. 
          I enjoy working with modern technologies and building projects that make a difference.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, reading about design patterns, 
          or working on personal projects that challenge me to grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;