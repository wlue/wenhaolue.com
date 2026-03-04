"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PageTransition } from "@/components/PageTransition";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

const compositions = [
  { title: "Lost in Thoughts", year: 2025, videoId: "XNovIjaAGlU" },
  { title: "Night's Whisper", year: 2024, videoId: "yr5dWb8TpsA" },
  { title: "Someday", year: 2023, videoId: "JHQFA4lDTTE" },
];

export default function MusicPage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-4 text-text">Music</h2>
          <p className="text-lg text-text-secondary mb-8">
            Check out my{" "}
            <a
              href="https://www.youtube.com/@wlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube channel
            </a>
            !
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="text-2xl font-bold mb-8 text-text">
            Original Jazz Compositions
          </h2>
        </AnimateOnScroll>

        <div className="space-y-12">
          {compositions.map((comp, i) => (
            <AnimateOnScroll key={comp.videoId} delay={0.15 + i * 0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-text">
                  {comp.title}{" "}
                  <span className="text-text-muted font-normal">
                    ({comp.year})
                  </span>
                </h3>
                <YouTubeEmbed videoId={comp.videoId} title={comp.title} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
