"use client"
import React from "react";
import { siteData } from "@/constants/siteData";
import { 
  FileText, 
  ArrowUp,
  ArrowUpRight,
  Globe,
  Mail
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/icons";
import "./Contact.css";

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
        return <GithubIcon size={20} />;
      case "linkedin":
        return <LinkedinIcon size={20} />;
      case "x":
      case "twitter":
        return <TwitterIcon size={20} />;
      case "email":
        return <Mail size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact">
      <div className="con-container">
        
        
        <div className="con-split-layout">
          
          <div className="con-text-block">
            <div className="con-badge-row">
              <span className="con-badge-indicator" aria-hidden="true"></span>
              <span className="con-badge-txt">{contact.eyebrow}</span>
            </div>
            <h2 id="con-heading" className="con-heading">
              {contact.heading}
            </h2>
            <p className="con-description">
              {contact.description}
            </p>
          </div>

          <div className="con-actions-block">

            {contact.resume && (
              <a 
                href={contact.resume} 
                target="-blank" 
                rel="noopener noreferrer" 
                className="con-resume-card"
              >
                <div className="con-card-content">
                  <FileText size={20} className="con-card-icon" />
                  <div className="con-card-text">
                    <span className="con-card-title">View Credentials</span>
                    <span className="con-card-sub">Latest CV Portfolio • PDF</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="con-card-arrow" />
              </a>
            )}

            <div className="con-social-strip">
              {siteData.socialLinks && siteData.socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="-blank" 
                  rel="noopener noreferrer" 
                  className="con-social-icon-btn"
                  aria-label={link.name}
                  title={link.name}
                >
                  <div className="con-social-btn-inner">
                    {getSocialIcon(link.name)}
                    <span className="con-social-name">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>

        <footer className="con-integrated-footer">
          <span className="con-copyright">{footer.copyright}</span>
          <button 
            onClick={scrollToTop} 
            className="con-top-anchor-btn"
            aria-label="Scroll to top"
          >
            <span>Return to Top</span>
            <ArrowUp size={14} />
          </button>
        </footer>

      </div>
    </section>
  );
}