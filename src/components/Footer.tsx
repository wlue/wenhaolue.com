import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const socialLinks = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.links.youtube, icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-brand transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
