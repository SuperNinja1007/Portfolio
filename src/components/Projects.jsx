import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

export default function Projects({ projects }) {
  const [modalImage, setModalImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (project) => {
    setModalImage(project);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalImage(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project)}
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className={`image-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
          <div className={`image-modal ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={modalImage.image} alt={modalImage.title} />
            <div className="modal-caption">
              <h3>{modalImage.title}</h3>
              <p>{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

