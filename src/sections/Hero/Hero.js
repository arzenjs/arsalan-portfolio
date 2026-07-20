"use client"
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/constants/siteData";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { ArrowUpRight, Code, Brackets } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import "./Hero.css";

export default function Hero() {
  const titles = ["Full-Stack Web Developer", "Frontend Developer", "Backend Developer"]
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  let title = titles[titleIndex]

  useEffect(() => {
    let speed = isDeleting ? 25 : 50

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex == 0) {
          setIsDeleting(false)
          if (titleIndex == 2) {
            setTitleIndex(0)
          } else {
            setTitleIndex(titleIndex + 1)
          }
        } else {
          setCharIndex(charIndex - 1)
        }
      }
      else if (title.length != charIndex) {
        setCharIndex(charIndex + 1)
      }
      else if (title.length == charIndex) {
        setTimeout(() => {
          setIsDeleting(!isDeleting)
        }, 750);
      }

    }, speed);

    return () => clearTimeout(timer);

  }, [titleIndex, charIndex, isDeleting, title])


  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            {siteData.hero.name}
          </h1>

          <h2 className="hero-role">
            {title.slice(0, charIndex)}
            <motion.span
              layout
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                },
                opacity: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              |
            </motion.span>
          </h2>

          <p className="hero-description">
            {siteData.hero.description}
          </p>

          <div className="hero-actions">
            <div className="hero-buttons">
              <Link
                href={siteData.hero.primaryCTA.href}
                className="primary-button"
              >
                {siteData.hero.primaryCTA.label}
                <ArrowUpRight className="arrow" size={16} />
              </Link>

              <Link
                href={siteData.hero.secondaryCTA.href}
                className="secondary-button"
              >
                {siteData.hero.secondaryCTA.label}
                <ArrowUpRight className="arrow" size={16} />
              </Link>
            </div>

            <SocialLinks />
          </div>
        </div>

        <div className="hero-image">
          <div className="backlight"></div>

          <div className="hero-floating-icon brace-icon">
            <Brackets size={24} />
          </div>
          <div className="hero-floating-icon code-icon">
            <Code size={20} />
          </div>

          <Image src="/hero.png" alt={`${siteData.hero.name} Portfolio Portrait`} className="hero-avatar" width={400} height={400} priority />

          <div className="mobile-hero-info">
            <h1 className="hero-title display">
              {siteData.hero.name}
            </h1>

            <h2 className="hero-role display">
            {title.slice(0, charIndex)}
            <motion.span
              layout
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                },
                opacity: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              |
            </motion.span>
          </h2>

            <p className="hero-description display">
              {siteData.hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}