type DetailAction = {
  href: string;
  label: string;
};

type ProjectDetailPageProps = {
  title: string;
  subtitle: string;
  description: string[];
  banner: string;
  screenshots: string[];
  playStore?: string;
  appStore?: string;
  secondaryAction?: DetailAction;
  bulletTitle?: string;
  bullets?: string[];
  privacyNotes?: string[];
};

function StoreBadge({ href, store }: { href: string; store: "google" | "apple" }) {
  const meta =
    store === "google"
      ? { src: "/stores/google.png", alt: "Get it on Google Play" }
      : { src: "/stores/apple.png", alt: "Download on the App Store" };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={meta.src} alt={meta.alt} className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]" />
    </a>
  );
}

export default function ProjectDetailPage({
  title,
  subtitle,
  description,
  banner,
  screenshots,
  playStore,
  appStore,
  secondaryAction,
  bulletTitle,
  bullets = [],
  privacyNotes = [],
}: ProjectDetailPageProps) {
  const year = new Date().getFullYear();

  return (
    <main className="grain pb-12">
      <div className="mx-auto flex max-w-6xl justify-center px-4 pt-8 sm:px-6 lg:px-8">
        <a className="page-logo-shell reveal" href="/" aria-label="fefe LABS home">
          <img src="/brand/fefeLabs-icon.png" alt="fefe LABS" className="page-logo-mark" />
        </a>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="glass-panel reveal rounded-[2rem] p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-start">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Project page</p>
                <h1 className="display-font text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">{title}</h1>
                <p className="text-xl text-slate-600 sm:text-2xl">{subtitle}</p>
              </div>

              <div className="space-y-4 text-base leading-7 text-slate-700">
                {description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {bulletTitle ? (
                <div className="space-y-3">
                  <h2 className="display-font text-2xl font-semibold text-slate-900">{bulletTitle}</h2>
                  <ul className="space-y-2 pl-5 text-base leading-7 text-slate-700">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {playStore ? <StoreBadge href={playStore} store="google" /> : null}
                {appStore ? <StoreBadge href={appStore} store="apple" /> : null}
                {secondaryAction ? (
                  <a className="btn btn-primary" href={secondaryAction.href} target="_blank" rel="noreferrer">
                    {secondaryAction.label}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_22px_60px_-35px_rgba(15,23,42,0.4)]">
              <img src={banner} alt={`${title} banner`} className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="glass-panel reveal delay-1 rounded-[2rem] p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.42)] sm:p-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Gallery</p>
            <h2 className="display-font text-3xl font-semibold text-slate-950">Screenshots</h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot}
                className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)]"
              >
                <img src={screenshot} alt={`${title} screenshot ${index + 1}`} className="h-auto w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {privacyNotes.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="glass-panel reveal delay-2 rounded-[2rem] p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.4)] sm:p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Privacy</p>
              <h2 className="display-font text-3xl font-semibold text-slate-950">Data & privacy</h2>
            </div>

            <div className="mt-6 space-y-3 text-base leading-7 text-slate-700">
              {privacyNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
