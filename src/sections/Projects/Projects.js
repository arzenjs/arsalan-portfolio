import { siteData } from "@/constants/siteData";
import "./Projects.css";

export default function Projects() {
  const { projects } = siteData;

  return (
    <section id="projects" className="projects" aria-labelledby="projects">
      <div className="projects-container">
        
        <div className="projects-sidebar">
          <div className="projects-tag-lockup">
            <span className="projects-telemetry-dot" aria-hidden="true"></span>
            <span className="projects-system-eyebrow">Projects</span>
          </div>
          <h2 id="projects-heading" className="projects-system-heading">
            Architecting Reliable Solutions.
          </h2>
          <div className="projects-system-footer">
            <span className="projects-system-status"></span>
          </div>
        </div>

        <div className="projects-scroll-deck">
          {projects.map((project, index) => (
            <article key={project.title} className="projects-deck-card">
              
              <div className="projects-card-topline">
                <span className="projects-card-index">0{index + 1} // {project.category}</span>
              </div>

              <div className="projects-card-main">
                <h3 className="projects-card-title">{project.title}</h3>
                <p className="projects-card-body">{project.description}</p>
              </div>

              <div className="projects-card-footer">
                <div className="projects-tech-registry">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects-tech-token">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}