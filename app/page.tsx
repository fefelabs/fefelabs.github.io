"use client";

import { useState } from "react";
import ProjectsMasonry, { type Project } from "./projects-masonry";

const liveProjects: Project[] = [
  {
    name: "Baby Match",
    category: "app",
    punchline: "Swipe baby names together and find perfect matches.",
    description:
      "A collaborative naming experience with smart filters, huge international catalogs, and shared match lists.",
    cover: "/portfolio/baby-match/banner.png",
    screenshots: [
      "/portfolio/baby-match/PlayStore_02.png",
      "/portfolio/baby-match/PlayStore_04.png",
      "/portfolio/baby-match/PlayStore_06.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.keke.baby_match&hl=fr",
    appStore: "https://apps.apple.com/us/app/baby-match-baby-names-2023/id6449146401",
    landing: "https://fefelabs.github.io/baby_match/",
    accent: "from-cyan-300/30 via-emerald-200/20 to-lime-200/20",
    featured: true,
  },
  {
    name: "Words Puzzle Daily",
    category: "game",
    punchline: "Daily word training with fast, addictive rounds.",
    description:
      "Build vocabulary and spelling reflexes through bite-sized puzzles designed for daily streaks.",
    cover: "/portfolio/wordspuzzle/banner.png",
    screenshots: [
      "/portfolio/wordspuzzle/PlayStore_01.png",
      "/portfolio/wordspuzzle/PlayStore_03.png",
      "/portfolio/wordspuzzle/PlayStore_06.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.fefelabs.wordspuzzle&hl=fr",
    landing: "https://fefelabs.github.io/wordspuzzle/",
    accent: "from-amber-300/30 via-orange-200/20 to-rose-300/20",
  },
  {
    name: "Magic Shades",
    category: "game",
    punchline: "A meditative puzzle rhythm that gets brutally strategic.",
    description:
      "Merge colors, clear rows, and survive escalating pressure in a minimalist gameplay loop built for focus.",
    cover: "/portfolio/magic-shades/Frame 810.png",
    screenshots: [
      "/portfolio/magic-shades/Frame 809.png",
      "/portfolio/magic-shades/Frame 803.png",
      "/portfolio/magic-shades/Frame 811.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.keke.shades_game&hl=fr",
    landing: "",
    accent: "from-sky-300/30 via-indigo-300/20 to-teal-300/20",
  },
  {
    name: "Velib' Now",
    category: "app",
    punchline: "Find available bikes and docks around Paris in seconds.",
    description:
      "A utility app focused on real-time station visibility for daily commutes and quick decision making.",
    cover: "/portfolio/velib-now/PlayStore_01.png",
    screenshots: [
      "/portfolio/velib-now/PlayStore_02.png",
      "/portfolio/velib-now/PlayStore_03.png",
      "/portfolio/velib-now/PlayStore_04.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.keke.velib_now",
    landing: "",
    accent: "from-zinc-300/30 via-slate-200/20 to-sky-200/20",
  },
  {
    name: "LED Scroller",
    category: "app",
    punchline: "Turn text into bold scrolling LED signage.",
    description:
      "A playful browser utility for displaying animated LED-style messages, useful for quick signage and lightweight visual communication.",
    screenshots: [],
    webVersion: "https://tferrand.github.io/led_scroller/",
    landing: "",
    accent: "from-rose-300/30 via-orange-300/20 to-amber-300/20",
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();
  const [filter, setFilter] = useState<"all" | "app" | "game">("all");
  const filteredProjects = filter === "all" ? liveProjects : liveProjects.filter((project) => project.category === filter);

  return (
    <main className="grain pb-12">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <header className="glass-panel reveal flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
          <div className="inline-flex items-center gap-3">
            <img src="/brand/fefeLabs-icon.png" alt="fefe LABS" className="h-10 w-10 rounded-xl" />
            <p className="display-font text-sm font-semibold text-slate-900">fefe LABS</p>
          </div>
        </header>
      </div>

      <section id="apps" className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="reveal delay-2 mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="display-font text-3xl font-bold text-slate-900 sm:text-4xl">Projects</h2>
            <p className="mt-2 text-base text-muted">Released products, experiments, and utility apps from fefe LABS.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={filter === "all" ? "btn btn-primary" : "btn btn-secondary"}
              onClick={() => {
                setFilter("all");
              }}
            >
              All
            </button>
            <button
              type="button"
              className={filter === "app" ? "btn btn-primary" : "btn btn-secondary"}
              onClick={() => {
                setFilter("app");
              }}
            >
              Apps
            </button>
            <button
              type="button"
              className={filter === "game" ? "btn btn-primary" : "btn btn-secondary"}
              onClick={() => {
                setFilter("game");
              }}
            >
              Games
            </button>
          </div>
        </div>

        <ProjectsMasonry projects={filteredProjects} animationKey={filter} />
      </section>

      <footer className="mx-auto mt-12 max-w-6xl px-4 pb-6 pt-2 sm:px-6 lg:px-8">
        <div className="glass-panel reveal delay-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm text-slate-600 sm:px-6">
          <p>© {year} fefe LABS</p>
          <a className="hover:text-slate-900" href="/privacy-notice/">
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
