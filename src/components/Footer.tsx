"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 mt-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
        {/* Left: © 2026 Construido con ♥ por Oriana Méndez (Single line, no wrapping) */}
        <div className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
          <span className="font-mono">© {year}</span>
          <span>{t.footer.builtWith}</span>
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 accent-text shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {t.footer.by}
          </span>
        </div>

        {/* Right: Quick section links + Back to Top on a single clean row */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-3.5 sm:gap-4 whitespace-nowrap">
          <a href="#skills" className="accent-hover-text transition-colors">
            {t.nav.skills}
          </a>
          <a href="#experience" className="accent-hover-text transition-colors">
            {t.nav.experience}
          </a>
          <a href="#projects" className="accent-hover-text transition-colors">
            {t.nav.projects}
          </a>
          <a href="#contact" className="accent-hover-text transition-colors">
            {t.nav.contact}
          </a>
          <a
            href={t.meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-hover-text transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
            className="inline-flex items-center justify-center h-7 w-7 rounded-md surface-badge text-slate-700 dark:text-slate-300 accent-hover-text font-mono font-semibold cursor-pointer transition-colors shrink-0"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
