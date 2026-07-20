"use client";

import React from "react";
import { siteData } from "@/constants/siteData";
import { motion } from "motion/react";
import { 
  FileText, 
  ArrowUp,
  ArrowUpRight,
  Globe,
  Mail
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/icons";
import "./Contact.css";

const leftBlockVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const rightBlockVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 }
  }
};

export default function Contact() {
  const { contact, footer } = siteData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      case "x":
      case "twitter":
        return <TwitterIcon size={18} />;
      case "email":
        return <Mail size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact">
      <div className="con-container">
        
        <div className="con-split-layout">
          
          <motion.div 
            className="con-text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftBlockVariants}
          >
            <div className="con-badge-row">
              <span className="con-badge-indicator" aria-hidden="true"></span>
              <span className="con-eyebrow-text">{contact.eyebrow}</span>
            </div>

            <h2 id="contact-heading" className="con-main-heading">
              {contact.heading}
            </h2>

            <p className="con-description">
              {contact.description}
            </p>
          </motion.div>

          <motion.div 
            className="con-actions-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rightBlockVariants}
          >
            
            <motion.a 
              href={`mailto:${contact.email}`} 
              className="con-action-card con-email-card"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="con-card-left">
                <div className="con-card-icon-box">
                  <Mail size={20} />
                </div>
                <div className="con-card-meta">
                  <span className="con-card-title">Direct Mail</span>
                  <span className="con-card-sub">{contact.email}</span>
                </div>
              </div>
              <ArrowUpRight size={16} className="con-card-arrow" />
            </motion.a>

            {contact.resumeUrl && (
              <motion.a 
                href={contact.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="con-action-card con-resume-card"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="con-card-left">
                  <div className="con-card-icon-box">
                    <FileText size={20} />
                  </div>
                  <div className="con-card-meta">
                    <span className="con-card-title">View Credentials</span>
                    <span className="con-card-sub">Latest CV Portfolio • PDF</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="con-card-arrow" />
              </motion.a>
            )}

            <div className="con-social-grid">
              {siteData.socialLinks && siteData.socialLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="con-social-icon-btn"
                  aria-label={link.name}
                  title={link.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="con-social-btn-inner">
                    {getSocialIcon(link.name)}
                    <span className="con-social-name">{link.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>

        </div>

        <footer className="con-integrated-footer">
          <span className="con-copyright">{footer.copyright}</span>
          <motion.button 
            onClick={scrollToTop} 
            className="con-top-anchor-btn"
            aria-label="Scroll to top"
          >
            <span>Return to Top</span>
            <ArrowUp size={14} />
          </motion.button>
        </footer>

      </div>
    </section>
  );
}