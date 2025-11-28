import { useState, useEffect } from 'react';

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`.${sectionId}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <span className="navbar-brand">{name}</span>
        <div className="navbar-links">
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('education')}>Education</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

