import { siteData } from "@/constants/siteData";
import "./Experience.css";

export default function Experience() {
  const { experience } = siteData;

  return (
    <section id="experience" className="experience" aria-labelledby="experience">
      <div className="exp-container">
        
        <header className="exp-grid-cell exp-cell-header">
          <div className="exp-header-tag">
            <span className="exp-status-indicator" aria-hidden="true"></span>
            <span className="exp-eyebrow">{experience.eyebrow}</span>
          </div>
          <h2 id="exp-heading" className="exp-heading">
            {experience.heading}
          </h2>
        </header>

        {experience.items.map((item, index) => (
          <article key={`${item.company}-${index}`} className="exp-grid-cell exp-cell-node">
            
            <div className="exp-node-meta">
              <span className="exp-node-index">CRON // 0{index + 1}</span>
              <span className="exp-node-period">{item.period}</span>
            </div>

            <div className="exp-node-content">
              <h3 className="exp-node-role">{item.role}</h3>
              <h4 className="exp-node-company">{item.company}</h4>
              <p className="exp-node-description">{item.description}</p>
            </div>

            <div className="exp-node-footer">
              <div className="exp-tech-stack">
                {item.technologies.map((tech) => (
                  <span key={tech} className="exp-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </article>
        ))}

      </div>
    </section>
  );
}