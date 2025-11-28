import { GraduationCap } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <GraduationCap size={32} />
            </div>
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

