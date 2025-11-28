export default function Skills({ skills }) {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    cloud: 'Cloud',
    devops: 'DevOps'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3>{categories[category]}</h3>
            {categorySkills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

