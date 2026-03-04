"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PageTransition } from "@/components/PageTransition";

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const experience = [
  {
    company: "Stripe",
    url: "https://stripe.com",
    description: (
      <>
        Built onboarding and authentication infrastructure for{" "}
        <ExtLink href="https://stripe.com/connect">Connect</ExtLink>
      </>
    ),
  },
  {
    company: "Sesame",
    url: "https://www.ycombinator.com/companies/sesame",
    description: "Co-founded an ed-tech startup (Imagine K12/YCombinator F15)",
  },
  {
    company: "Twitter",
    url: "https://twitter.com",
    description: (
      <>
        Shipped Twitter Headlines using{" "}
        <ExtLink href="https://github.com/twitter/summingbird">
          Summingbird
        </ExtLink>
        , mentioned in{" "}
        <ExtLink href="http://www.vldb.org/pvldb/vol7/p1441-boykin.pdf">
          VLDB paper
        </ExtLink>
      </>
    ),
  },
  {
    company: "Square",
    url: "https://squareup.com",
    description: (
      <>
        iOS engineer, open sourced{" "}
        <ExtLink href="https://github.com/square/ponydebugger">
          PonyDebugger
        </ExtLink>
      </>
    ),
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <AnimateOnScroll>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text">
              Hi, I&apos;m Wen-Hao Lue.
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              I&apos;m a{" "}
              <ExtLink href="https://github.com/wlue">
                software engineer
              </ExtLink>
              , <a href="/music">jazz drummer/pianist</a>, and{" "}
              <ExtLink href="https://refeed.co/@wlue">foodie</ExtLink> based in
              San Francisco. I&apos;m drawn to zero-to-one work where I get to
              shape both how something is built and how it feels to use.
            </p>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text">
              Currently
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary mb-4">
              I&apos;m building{" "}
              <ExtLink href="https://www.refeed.co">Refeed</ExtLink>, an app
              that helps people rediscover and share their food experiences. It
              automatically groups your food photos by place and time, turning
              them into simple,{" "}
              <ExtLink href="https://www.refeed.co/@wlue/lists/japan-2025">
                shareable guides
              </ExtLink>
              .
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              I occasionally write <a href="/music">original compositions</a>{" "}
              and post my performances on{" "}
              <ExtLink href="https://www.youtube.com/@wlue">YouTube</ExtLink>.
            </p>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-text">
              Previously
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2 text-lg text-text-secondary">
              {experience.map((item) => (
                <li key={item.company}>
                  <ExtLink href={item.url}>{item.company}</ExtLink> &mdash;{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-text">
              Get in touch
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Reach me by{" "}
              <a href="mailto:wenhao@wenhaolue.com">email</a>, find me on{" "}
              <ExtLink href="https://twitter.com/wlue">Twitter</ExtLink>/
              <ExtLink href="https://www.instagram.com/whlue/">
                Instagram
              </ExtLink>
              , or check out my{" "}
              <ExtLink href="/resume.pdf">resume</ExtLink>.
            </p>
          </section>
        </AnimateOnScroll>
      </div>
    </PageTransition>
  );
}
