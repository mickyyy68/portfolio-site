"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  GOING HARD
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Michael
                  <br />
                  <span className="text-muted-foreground">Aristarco</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Fullstack developer making value through
                  <span className="text-foreground"> software</span>,
                  <span className="text-foreground"> technology</span>, and
                  <span className="text-foreground"> passion</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Not available for work
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">
                    Fullstack Developer & CS Undergrad
                  </div>
                  <div className="text-muted-foreground">@ Bonobo AI • UniMoRe</div>
                  <div className="text-xs text-muted-foreground">2024 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "AI Agents", "Electron"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground">
                Discover recent projects across AI, desktop, and web.
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {(
                [
                  {
                    title: "Aristar Management",
                    type: "Desktop Application",
                    status: "WIP",
                    tagline:
                      "End-to-end bakery management with AI-assisted ordering.",
                    summary:
                      "Manage clients, products, and orders with weekly/daily flows and exports.",
                    tech: ["Electron", "LangChain"],
                  },
                  {
                    title: "Aristar Survivor",
                    type: "Web Game",
                    status: "Live",
                    tagline:
                      "Multiplayer turn-based survival on a procedural island.",
                    summary:
                      "Explore, gather resources, collaborate or battle; survive by escape or elimination.",
                    tech: ["React", "Next.js", "Colyseus", "Convex", "WebGL"],
                    link: "https://aristar-survivor.vercel.app/",
                  },
                  {
                    title: "Bonobo AI",
                    type: "AI Platform",
                    status: "Live",
                    tagline:
                      "Automatically compiles briefs and generates instant project quotes.",
                    summary:
                      "AI brief parsing with personalized quotes and CRM integration.",
                    tech: ["Next.js", "LangChain", "Qdrant"],
                    link: "https://app.bonoboai.it/",
                  },
                ] as const
              ).map((proj) => (
                <div
                  key={proj.title}
                  className="p-6 sm:p-8 border border-border rounded-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-2">
                        {proj.type}
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {proj.title}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 text-[11px] rounded-full border ${
                        proj.status === "Live"
                          ? "text-emerald-500 border-emerald-500/40"
                          : "text-amber-500 border-amber-500/40"
                      }`}
                    >
                      {proj.status}
                    </span>
                  </div>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {proj.tagline}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {proj.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs text-muted-foreground border border-border rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {"link" in proj && proj.link ? (
                    <div className="mt-6">
                      <Link
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
                        aria-label={`View ${proj.title}`}
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* More Projects */}
            <div className="pt-4 sm:pt-8">
              <div className="text-sm text-muted-foreground font-mono mb-4">
                More Projects
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                {[
                  {
                    title: "World Nations",
                    summary:
                      "Discord bot strategy game where players build empires, manage resources, and engage in warfare.",
                  },
                  {
                    title: "Football Manager Database",
                    summary:
                      "Management system for purchases and team management using algorithmic data.",
                  },
                  {
                    title: "SpotiStats",
                    summary:
                      "Visualize and analyze your personal Spotify statistics.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="p-4 sm:p-5 border border-border rounded-lg"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {p.title}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities and collaborations.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:aristarcomichael@aristar.it"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      aristarcomichael@aristar.it
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@mickyyy68",
                    url: "https://github.com/mickyyy68",
                  },
                  {
                    name: "Instagram",
                    handle: "@mike.aristarco",
                    url: "https://instagram.com/mike.aristarco",
                  },
                  {
                    name: "LinkedIn",
                    handle: "michael-aristarco",
                    url: "https://www.linkedin.com/in/michael-aristarco-8a76382b2/",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Michael Aristarco. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
