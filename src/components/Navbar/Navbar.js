"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="navbar">
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
            <Link 
              href="#contact" 
              className="secondary-button nav-button" 
              onClick={closeMenu}
            >
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}