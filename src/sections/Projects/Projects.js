"use client";

import { siteData } from "@/constants/siteData";
import { motion } from "motion/react";
import "./Projects.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Projects() {
  const { projects } = siteData;

  return (
    <section id="projects" className="projects" aria-labelledby="projects">
      <div className="projects-container">
        
        <motion.div 
          className="projects-sidebar"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <div className="projects-scroll-deck">
          {projects.map((project, index) => (
            <motion.article 
              key={project.title} 
              className="projects-deck-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="projects-card-topline">
                <span className="projects-card-url">{project.url}</span>
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
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}