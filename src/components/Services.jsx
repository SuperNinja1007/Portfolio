import { 
  Code2, 
  Smartphone, 
  Brain, 
  Workflow, 
  Database, 
  Cloud,
  Bot,
  Layers
} from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Workflow,
  Database,
  Cloud,
  Bot,
  Layers
};

export default function Services({ services }) {
  return (
    <section className="section services-section">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

