import { Github, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header({ personal }) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const title = personal.title;

    const typeInterval = setInterval(() => {
      if (index <= title.length) {
        setDisplayedTitle(title.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [personal.title]);

  return (
    <header className="header">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="header-content">
        <h1 className="animate-fade-in">{personal.name}</h1>
        <h2 className="typing-text">
          {displayedTitle}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </h2>
        <p className="bio animate-fade-in-delay">{personal.bio}</p>
        <div className="contact-info animate-fade-in-delay-2">
          <span><Mail size={16} /> {personal.email}</span>
          <span><MapPin size={16} /> {personal.location}</span>
        </div>
        <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="github-btn animate-fade-in-delay-3">
          <Github size={20} />
          <span>View GitHub Profile</span>
        </a>
      </div>
    </header>
  );
}

