import "./About.css";
import { siteData } from "@/constants/siteData";
import { AboutPrincipleIcon } from "@/components/icons/icons";

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="about" aria-labelledby="about">
        <div className="about-container">
          
          <div className="about-content">
            <span className="about-eyebrow">{about.eyebrow}</span>
            <h2 id="about-heading" className="about-heading">
              Building reliable web applications with a focus on quality.
            </h2>
            
            <p className="about-description">
              {about.description}
            </p>

            <ul className="about-principles">
              {about.principles.map((principle) => (
                <li key={principle} className="about-principle-item">
                  <span className="about-principle-icon">
                    <AboutPrincipleIcon/>
                  </span>
                  <span className="about-principle-text">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-facts-grid">
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="about-fact-card">
                <strong className="about-fact-value">{fact.value}</strong>
                <span className="about-fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}