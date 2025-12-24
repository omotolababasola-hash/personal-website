import React, { useState } from 'react';
import TopNav from '../TopNav/TopNav';
import SpaceBackground from '../SpaceBackground/SpaceBackground';
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const handleNavClick = (section: 'home' | 'about' | 'blog' | 'resume') => {
    switch (section) {
      case 'home':
        setShowAboutMe(false);
        setShowBlog(false);
        break;
      case 'about':
        setShowBlog(false);
        setShowAboutMe(!showAboutMe);
        break;
      case 'blog':
        setShowAboutMe(false);
        setShowBlog(!showBlog);
        break;
      case 'resume':
        setShowAboutMe(false);
        setShowBlog(false);
        // Allow normal navigation for resume
        break;
    }
  };

  const showLanding = !showAboutMe && !showBlog;

  return (
    <SpaceBackground animationEnabled={animationEnabled} onAnimationToggle={setAnimationEnabled}>
      <Landing show={showLanding} />
      <TopNav onNavClick={handleNavClick} />
      <AboutMe show={showAboutMe} />
      <Blog show={showBlog} />
      <Footer />
    </SpaceBackground>
  );
};

export default App;