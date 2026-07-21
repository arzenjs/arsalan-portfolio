"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    
    if (latest > previous && latest > 150) {
      
      if (!isOpen) setHidden(true);
    } else {
      
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="navbar__container">
        <Link href="/" className="navbar__logo" onClick={closeMenu}>
          Arsalan<span>.</span>
        </Link>

        <button 
          className="navbar__toggle" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar__menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="#about" className="navbar__link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="navbar__link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="navbar__link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="navbar__link" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="secondary-button nav-cta" 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}