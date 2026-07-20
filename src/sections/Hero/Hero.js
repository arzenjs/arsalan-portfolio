"use client";

import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/constants/siteData";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { ArrowUpRight, Code, Brackets } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import "./Hero.css";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const titles = [
    "Full-Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  let title = titles[titleIndex];

  useEffect(() => {
    let speed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex === 0) {
          setIsDeleting(false);
          if (titleIndex === 2) {
            setTitleIndex(0);
          } else {
            setTitleIndex(titleIndex + 1);
          }
        } else {
          setCharIndex(charIndex - 1);
        }
      } else if (title.length !== charIndex) {
        setCharIndex(charIndex + 1);
      } else if (title.length === charIndex) {
        setTimeout(() => {
          setIsDeleting(!isDeleting);
        }, 1200);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [titleIndex, charIndex, isDeleting, title]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content Column */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            {siteData.hero.name}
          </motion.h1>

          <motion.h2 className="hero-role" variants={itemVariants}>
            {title.slice(0, charIndex)}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              |
            </motion.span>
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            {siteData.hero.description}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <div className="hero-buttons">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={siteData.hero.primaryCTA.href}
                  className="primary-button"
                >
                  {siteData.hero.primaryCTA.label}
                  <ArrowUpRight className="arrow" size={16} />
                </Link>
              </motion.div>

              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href={siteData.hero.secondaryCTA.href}
                  className="secondary-button"
                >
                  {siteData.hero.secondaryCTA.label}
                  <ArrowUpRight className="arrow" size={16} />
                </Link>
              </motion.div>
            </div>

            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right Avatar Column */}
        <motion.div
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breathing Backlight Effect */}
          <motion.div
            className="backlight"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Icon 1 */}
          <div
            className="hero-floating-icon brace-icon"
          >
            <Brackets size={24} />
          </div>

          {/* Floating Icon 2 */}
          <div
            className="hero-floating-icon code-icon"
          >
            <Code size={20} />
          </div>

          <Image
            src="/hero.png"
            alt={`${siteData.hero.name} Portfolio Portrait`}
            className="hero-avatar"
            width={400}
            height={400}
            priority
          />

          {/* Mobile Overlay Content */}
          <motion.div
            className="mobile-hero-info"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="hero-title display">{siteData.hero.name}</h1>

            <h2 className="hero-role display">
              {title.slice(0, charIndex)}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                |
              </motion.span>
            </h2>

            <p className="hero-description display">
              {siteData.hero.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}