"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("/");
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="grain flex min-h-screen items-center justify-center px-4 py-12">
      <div className="glass-panel max-w-xl rounded-[2rem] p-8 text-center shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Page not found</p>
        <h1 className="display-font mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Redirecting...</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This page does not exist. You are being redirected to the home page.
        </p>
        <a className="btn btn-primary mt-6" href="/">
          Go to home page
        </a>
      </div>
    </main>
  );
}
