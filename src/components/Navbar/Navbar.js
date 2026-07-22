"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsScrolled(latest > 50);

    if (latest > previous && latest > 150) {
      if (!isOpen) setHidden(true);
    } else {
      setHidden(false);
    }
  });

  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);

            
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", 
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  
  const handleNavClick = useCallback(
    (e, href) => {
      closeMenu();

      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", href);
          setActiveSection(targetId);
        }
      }
    },
    []
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          Arsalan<span>.</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="secondary-button nav-cta"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}