import React from 'react';

interface LandingProps {
  show: boolean;
}

const Landing: React.FC<LandingProps> = ({ show }) => {
  return (
    <div className={`landing ${!show ? 'hidden' : ''}`}>
      <div className="landing-content">
        <h1>Welcome to my website</h1>
      </div>
    </div>
  );
};

export default Landing;