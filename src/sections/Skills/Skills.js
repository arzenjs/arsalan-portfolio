"use client"

import { useState } from "react";
import { siteData } from "@/constants/siteData";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./Skills.css";

const ICON_MAP = {
  "HTML": <SiHtml5 className="skills-icon skills-icon-html" />,
  "CSS": <SiCss className="skills-icon skills-icon-css" />,
  "JavaScript": <SiJavascript className="skills-icon skills-icon-js" />,
  "TypeScript": <SiTypescript className="skills-icon skills-icon-ts" />,
  "React": <SiReact className="skills-icon skills-icon-react" />,
  "Next.js": <SiNextdotjs className="skills-icon skills-icon-next" />,
  "Tailwind CSS": <SiTailwindcss className="skills-icon skills-icon-tailwind" />,
  "Node.js": <SiNodedotjs className="skills-icon skills-icon-node" />,
  "Express.js": <SiExpress className="skills-icon skills-icon-express" />,
  "MongoDB": <SiMongodb className="skills-icon skills-icon-mongo" />,
  "Mongoose": <SiMongodb className="skills-icon skills-icon-mongoose" />,
  "REST APIs": <TbApi className="skills-icon skills-icon-api" />
};

const ITEM_CLASS_MAP = {
  "HTML": "skills-item-html",
  "CSS": "skills-item-css",
  "JavaScript": "skills-item-js",
  "TypeScript": "skills-item-ts",
  "React": "skills-item-react",
  "Next.js": "skills-item-next",
  "Tailwind CSS": "skills-item-tailwind",
  "Node.js": "skills-item-node",
  "Express.js": "skills-item-express",
  "MongoDB": "skills-item-mongo",
  "Mongoose": "skills-item-mongoose",
  "REST APIs": "skills-item-api"
};

export default function Skills() {
  const { skills } = siteData;
  const categories = skills.categories ?? [];
  
  const [activeTab, setActiveTab] = useState(categories[0]?.title || "");
  const activeCategory = categories.find(cat => cat.title === activeTab);

  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="skills-container">
        
        <div className="skills-layout-header">
          <div className="skills-text-group">
            <p className="skills-eyebrow">{skills.eyebrow}</p>
            <h2 id="skills-heading" className="skills-heading">
              {skills.heading}
            </h2>
          </div>

          <nav className="skills-tabs" aria-label="Technology categories">
            {categories.map((category) => (
              <button
                key={category.title}
                className={`skills-tab-btn ${activeTab === category.title ? "skills-tab-btn-active" : ""}`}
                onClick={() => setActiveTab(category.title)}
                aria-selected={activeTab === category.title}
                role="tab"
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="skills-content-panel" role="tabpanel">
          <div className="skills-list">
            {(activeCategory?.items ?? []).map((item) => {
              const specializedClass = ITEM_CLASS_MAP[item] || "";
              return (
                <div key={item} className={`skills-item ${specializedClass}`} tabIndex="0">
                  <div className="skills-icon-container" aria-hidden="true">
                    {ICON_MAP[item] || <TbApi className="skills-icon" />}
                  </div>
                  <span className="skills-item-name">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}