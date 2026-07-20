"use client";

import React from "react";
import { siteData } from "@/constants/siteData";
import { AboutPrincipleIcon } from "@/components/icons/icons";
import { motion } from "motion/react";
import "./About.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const factCardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 15 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <motion.div
        className="about-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Content Card (Left / Top) */}
        <div className="about-main-card">
          <div className="about-card-glow" aria-hidden="true" />
          
          <motion.div className="about-badge-row" variants={itemVariants}>
            <span className="about-status-dot" aria-hidden="true" />
            <span className="about-eyebrow-text">{about.eyebrow}</span>
          </motion.div>

          <motion.h2 id="about-heading" className="about-title" variants={itemVariants}>
            Building reliable web applications with a focus on quality.
          </motion.h2>

          <motion.p className="about-bio" variants={itemVariants}>
            {about.description}
          </motion.p>

          <motion.div className="about-principles-wrapper" variants={itemVariants}>
            <ul className="about-principles-grid">
              {about.principles.map((principle, index) => (
                <motion.li
                  key={principle}
                  className="about-principle-tag"
                  whileHover={{ x: 4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="about-principle-icon-box">
                    <AboutPrincipleIcon />
                  </span>
                  <span className="about-principle-text">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quick Facts Side Grid (Right / Bottom) */}
        <div className="about-facts-column">
          <div className="about-facts-header">
            <span className="about-facts-title">Metrics & Telemetry</span>
          </div>
          <div className="about-facts-container">
            {about.quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                className="about-fact-tile"
                custom={index}
                variants={factCardVariants}
                whileHover={{ 
                  y: -4, 
                  borderColor: "rgba(220, 38, 38, 0.4)",
                  boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.15)"
                }}
              >
                <div className="about-fact-indicator" />
                <span className="about-fact-number">{fact.value}</span>
                <span className="about-fact-desc">{fact.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}