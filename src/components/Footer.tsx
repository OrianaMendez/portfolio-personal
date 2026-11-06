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
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
        {/* Left: © 2026 Construido con ❤️ por Oriana Méndez */}
        <div className="flex items-center gap-1.5">
          <span>
            © {year} {t.footer.builtWith}
          </span>
          <span className="text-sky-500 select-none" aria-label="love">
            ❤️
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {t.footer.by}
          </span>
        </div>

        {/* Right: Quick section links + Back to Top */}
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#skills"
            className="accent-hover-text transition-colors"
          >
            {t.nav.skills}
          </a>
          <a
            href="#experience"
            className="accent-hover-text transition-colors"
          >
            {t.nav.experience}
          </a>
          <a
            href="#certifications"
            className="accent-hover-text transition-colors"
          >
            {t.nav.certifications}
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
            className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 accent-hover-text font-semibold cursor-pointer transition-colors"
          >
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
