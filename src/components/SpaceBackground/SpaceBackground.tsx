import React from 'react';

interface SpaceBackgroundProps {
  children: React.ReactNode;
  animationEnabled: boolean;
  onAnimationToggle: (enabled: boolean) => void;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ 
  children, 
  animationEnabled, 
  onAnimationToggle 
}) => {
  const handleToggle = () => {
    onAnimationToggle(!animationEnabled);
  };

  return (
    <div className={`space-container ${!animationEnabled ? 'paused' : ''}`}>
      <div className="stars layer-1"></div>
      <div className="stars layer-2"></div>
      <div className="stars layer-3"></div>
      <div className="animation-toggle">
        <input 
          type="checkbox" 
          id="animation-switch" 
          checked={animationEnabled}
          onChange={handleToggle}
        />
        <label htmlFor="animation-switch" className="toggle-slider">
          <span className="slider-text">spaceship</span>
        </label>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default SpaceBackground;