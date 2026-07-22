import { siteData } from "@/constants/siteData";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../icons/icons";

import "./SocialLinks.css";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: TwitterIcon,
  Email: Mail,
};

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social media links">
      <ul className="social-links-list">
        {siteData.socialLinks.map((social) => {
          const IconComponent = iconMap[social.name];
          if (!IconComponent) return null;
          const isEmail = social.name === "Email";
          return (
            <li key={social.name}>
              <a
                href={social.url}
                className="social-links-item"
                aria-label={social.name}
                target={isEmail ? undefined : "-blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
              >
                <IconComponent size={20} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}