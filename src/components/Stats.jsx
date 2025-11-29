import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Award, value: '15+', label: 'Years of Experience' },
    { icon: Users, value: '90+', label: 'Satisfied Clients' },
    { icon: Briefcase, value: '28+', label: 'Completed Projects' },
    { icon: TrendingUp, value: '98%', label: 'Client Retention Rate' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

