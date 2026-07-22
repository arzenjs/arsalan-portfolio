"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/constants/siteData";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { ArrowUpRight, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { containerVariants, fadeUpVariant, visualVariant } from "@/lib/motion";

import "./Hero.css";

export default function Hero() {
  const titles = [
    "Full-Stack Web Developer",
    "Frontend Developer",
    "UI/UX Architect",
    "Backend Developer"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  
  const currentTitle = titles[titleIndex];

  useEffect(() => {
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          setCharIndex((prev) => prev - 1);
        }
      } else {
        if (charIndex === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        } else {
          setCharIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTitle, titles.length]);

  return (
    <section className="hero" id="hero" aria-label="Hero Section">
      <motion.div
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content">

          <motion.div className="hero-headline-group" variants={fadeUpVariant}>
            <span className="hero-greeting-sub">Hello, I am</span>
            
            <h1 className="hero-name-display">{siteData.hero.name}</h1>

            <div className="hero-role-display">
              <span className="role-highlight">
                {currentTitle.slice(0, charIndex)}
              </span>
              <motion.span
                className="typing-cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </div>
          </motion.div>

          <motion.p className="hero-description" variants={fadeUpVariant}>
            {siteData.hero.description}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUpVariant}>
            <Link href="#contact" className="hero-cta-btn">
              <span>Let's Talk</span>
              <ArrowUpRight size={18} className="cta-icon" />
            </Link>

            <div className="hero-socials">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div className="hero-value-props" variants={fadeUpVariant}>
            <div className="prop-item">
              <CheckCircle2 size={16} className="prop-icon" />
              <span>Modern Engineering</span>
            </div>
            <div className="prop-divider" />
            <div className="prop-item">
              <Code2 size={16} className="prop-icon" />
              <span>Clean & Scalable Code</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual-wrapper"
          variants={visualVariant}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <div className="hero-portrait-card">
            <div className="card-glass-glow" />

            <motion.div
              className="floating-glass-pill pill-top"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={14} className="pill-star" />
              <span>Full-Stack Solutions</span>
            </motion.div>

            <motion.div
              className="floating-glass-pill pill-bottom"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="pill-pulse-dot" />
              <span>Next.js & React Expert</span>
            </motion.div>

            <div className="portrait-image-wrapper">
              <Image
                src="/hero.png"
                alt={`${siteData.hero.name} Portrait`}
                className="hero-portrait"
                width={440}
                height={440}
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}