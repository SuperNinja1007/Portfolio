import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Header({ personal }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src={personal.avatar} alt={personal.name} className="avatar" />
        <div className="header-text">
          <h1>{personal.name}</h1>
          <h2>{personal.title}</h2>
          <p className="bio">{personal.bio}</p>
          <div className="contact-info">
            <span><Mail size={16} /> {personal.email}</span>
            <span><MapPin size={16} /> {personal.location}</span>
          </div>
          <div className="social-links">
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

