import { Briefcase } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section className="section experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-marker">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="period">{job.period}</span>
              </div>
              <h4 className="company">{job.company}</h4>
              <p>{job.description}</p>
              <div className="tech-tags">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

