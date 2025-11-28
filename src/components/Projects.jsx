import { Github, ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

