import React from 'react';

interface TopNavProps {
  onNavClick: (section: 'home' | 'about' | 'blog' | 'resume') => void;
}

const TopNav: React.FC<TopNavProps> = ({ onNavClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: 'home' | 'about' | 'blog' | 'resume') => {
    if (section !== 'resume') {
      e.preventDefault();
    }
    onNavClick(section);
  };

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <a 
          href="/" 
          className="nav-link" 
          onClick={(e) => handleClick(e, 'home')}
        >
          home
        </a>
      </div>
      <ul className="nav-right">
        <li className="nav-item">
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => handleClick(e, 'about')}
          >
            about me
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="/resume" 
            className="nav-link"
            onClick={(e) => handleClick(e, 'resume')}
          >
            resume
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => handleClick(e, 'blog')}
          >
            blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;