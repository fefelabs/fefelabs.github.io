"use client";

import { useEffect, useRef } from "react";

export type Project = {
  name: string;
  category: "app" | "game";
  punchline: string;
  description: string;
  cover?: string;
  screenshots: string[];
  playStore?: string;
  appStore?: string;
  landing: string;
  webVersion?: string;
  accent: string;
  featured?: boolean;
};

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

function StoreBadge({ href, store }: { href: string; store: "google" | "apple" }) {
  const meta =
    store === "google"
      ? { src: "/stores/google.png", alt: "Get it on Google Play" }
      : { src: "/stores/apple.png", alt: "Download on the App Store" };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={meta.src} alt={meta.alt} className="h-11 w-auto transition-transform duration-200 hover:scale-[1.03]" />
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const preserveCoverRatio = project.cover?.endsWith("/banner.png") ?? false;

  return (
    <article
      className={`masonry-card group relative z-0 overflow-hidden rounded-3xl border bg-white/75 p-4 backdrop-blur-xl transition-[transform,opacity] duration-500 ease-out hover:z-10 hover:scale-[1.02] ${
        project.featured
          ? "masonry-card-featured border-emerald-200/80 shadow-[0_28px_90px_-40px_rgba(16,185,129,0.55)]"
          : "border-white/70 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.6)]"
      }`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      {project.featured ? (
        <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-emerald-300/80 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Most Important
        </div>
      ) : null}

      <div className="relative space-y-4" style={{ transitionDelay: `${index * 90}ms` }}>
        <div className="overflow-hidden rounded-2xl border border-white/65 bg-white/70">
          {project.cover ? (
            <img
              src={project.cover}
              alt={`${project.name} preview`}
              className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                preserveCoverRatio
                  ? "h-auto object-contain"
                  : `object-cover ${project.featured ? "h-56 sm:h-64" : "h-44"}`
              }`}
            />
          ) : (
            <div
              className={`relative flex w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fff5f5,transparent_40%),linear-gradient(135deg,#111827,#1f2937_55%,#7c2d12)] ${
                project.featured ? "h-56 sm:h-64" : "h-44"
              }`}
            >
              <div className="grid grid-cols-7 gap-1 opacity-80">
                {Array.from({ length: 49 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index % 3 === 0 ? "bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.85)]" : "bg-white/12"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-full border border-orange-300/40 bg-black/35 px-3 py-1 text-center text-xs font-semibold uppercase tracking-[0.28em] text-orange-100">
                LED Scroller
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className={`display-font font-bold leading-tight text-slate-900 ${project.featured ? "text-3xl" : "text-2xl"}`}>
            {project.name}
          </h3>
          <p className={`${project.featured ? "text-base" : "text-sm"} font-medium text-slate-700`}>{project.punchline}</p>
          <p className={`${project.featured ? "text-base" : "text-sm"} leading-relaxed text-slate-600`}>
            {project.description}
          </p>
        </div>

        {project.screenshots.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {project.screenshots.map((screenshot, index) => (
              <div key={screenshot} className="overflow-hidden rounded-xl border border-white/60 bg-white/70">
                <img
                  src={screenshot}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col items-center gap-2">
          {project.playStore || project.appStore ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {project.playStore ? <StoreBadge href={project.playStore} store="google" /> : null}
              {project.appStore ? <StoreBadge href={project.appStore} store="apple" /> : null}
            </div>
          ) : null}
          {project.webVersion ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <ExternalLink href={project.webVersion} label="Web Version" />
            </div>
          ) : null}
          {project.landing ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                className="btn btn-secondary"
                href={project.landing}
                target={project.landing.startsWith("http") ? "_blank" : undefined}
                rel={project.landing.startsWith("http") ? "noreferrer" : undefined}
              >
                {project.landing.startsWith("http") ? "Open Project" : "Visite website"}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsMasonry({
  projects,
  animationKey,
}: {
  projects: Project[];
  animationKey: string;
}) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const resizeItems = () => {
      const styles = window.getComputedStyle(grid);
      const rowHeight = Number.parseFloat(styles.getPropertyValue("grid-auto-rows"));
      const rowGap = Number.parseFloat(styles.getPropertyValue("row-gap"));

      if (!rowHeight || Number.isNaN(rowHeight)) {
        return;
      }

      Array.from(grid.children).forEach((child) => {
        if (!(child instanceof HTMLElement)) {
          return;
        }

        const contentHeight = child.getBoundingClientRect().height;
        const span = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        child.style.gridRowEnd = `span ${span}`;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeItems();
    });

    Array.from(grid.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        resizeObserver.observe(child);
      }
    });

    const imageNodes = Array.from(grid.querySelectorAll("img"));

    imageNodes.forEach((image) => {
      image.addEventListener("load", resizeItems);
    });

    resizeItems();
    window.addEventListener("resize", resizeItems);

    return () => {
      resizeObserver.disconnect();
      imageNodes.forEach((image) => {
        image.removeEventListener("load", resizeItems);
      });
      window.removeEventListener("resize", resizeItems);
    };
  }, [projects, animationKey]);

  return (
    <div ref={gridRef} className="masonry-grid">
      {projects.map((project, index) => (
        <ProjectCard key={`${animationKey}-${project.name}`} project={project} index={index} />
      ))}
    </div>
  );
}
