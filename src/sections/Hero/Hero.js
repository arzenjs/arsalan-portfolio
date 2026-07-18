import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/constants/siteData";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { ArrowUpRight, Code, Brackets } from "lucide-react";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
            {siteData.hero.greeting}
          </p>

          <h1 className="hero-title">
            {siteData.hero.name}
          </h1>

          <h2 className="hero-role">
            {siteData.hero.title}
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

          <Image
            src="/hero.png"
            alt={`${siteData.hero.name} Portfolio Portrait`}
            className="hero-avatar"
            width={400}
            height={400}
            priority
          />
          <div className="mobile-hero-info">
            <h1 className="mobile-hero-title">
              {siteData.hero.name}
            </h1>

            <p className="mobile-hero-description">
              {siteData.hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}