"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PageTransition } from "@/components/PageTransition";

const projects = [
  {
    name: "Refeed",
    year: 2025,
    url: "https://refeed.co",
    description:
      "iOS app that automatically organizes your photos by place to create shareable food diaries and guides.",
  },
  {
    name: "Mixbox",
    year: 2014,
    url: "http://mixbox.io",
    description:
      "An iPad app that uses beat matching and pitch detection to make remixes and mashups even without a musical background.",
  },
  {
    name: "Mantaphrase",
    year: 2012,
    url: "http://mantaphrase.com",
    description:
      "An interactive communication app that lets you have a conversation in a foreign language.",
  },
  {
    name: "CODENAME: Portal",
    year: 2007,
    url: "https://github.com/wlue/codename_portal",
    description:
      "A single-player puzzle game based off the popular game, Portal.",
  },
  {
    name: "Ultimatum",
    year: "2006–2009",
    url: "http://www.byond.com/games/UnknownPerson/Ultimatum",
    description: "An online multi-player turn-based strategy game.",
  },
];

const openSource = [
  {
    name: "PonyDebugger",
    url: "https://github.com/square/ponydebugger",
    description:
      "A library that allows developers to use Chrome Developer Tools to debug their app remotely.",
  },
];

function ProjectCard({
  name,
  year,
  url,
  description,
}: {
  name: string;
  year: number | string;
  url: string;
  description: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-xl bg-bg-card border border-border hover:border-brand/30 transition-all hover:shadow-md group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-text group-hover:text-brand transition-colors">
          {name}
        </h3>
        <span className="text-sm text-text-muted">{year}</span>
      </div>
      <p className="text-text-secondary">{description}</p>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 text-text">Projects</h2>
        </AnimateOnScroll>

        <div className="space-y-4 mb-12">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={0.05 + i * 0.05}>
              <ProjectCard {...project} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <h2 className="text-2xl font-bold mb-6 text-text">Open Source</h2>
        </AnimateOnScroll>

        <div className="space-y-4">
          {openSource.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={0.35 + i * 0.05}>
              <ProjectCard {...project} year="" />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
