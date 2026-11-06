"use client";

import React, { useEffect, useRef, useState } from "react";
import { useApp } from "@/context/AppContext";

const SECTION_IDS = [
  "resume",
  "skills",
  "experience",
  "projects",
  "certifications",
  "contact",
] as const;

export function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, setIsCmdOpen, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("resume");
  const [scrolled, setScrolled] = useState(false);

  const navContainerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isManualScroll = useRef(false);
  const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [pillStyle, setPillStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  const navLinks = [
    { id: "resume", href: "#resume", label: t.nav.resume },
    { id: "skills", href: "#skills", label: t.nav.skills },
    { id: "experience", href: "#experience", label: t.nav.experience },
    { id: "projects", href: "#projects", label: t.nav.projects },
    {
      id: "certifications",
      href: "#certifications",
      label: t.nav.certifications,
    },
    { id: "contact", href: "#contact", label: t.nav.contact },
  ];

  // Recalculate sliding pill position whenever activeSection or language changes
  useEffect(() => {
    const updatePill = () => {
      const activeEl = linkRefs.current[activeSection];
      const containerEl = navContainerRef.current;
      if (activeEl && containerEl) {
        const containerRect = containerEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setPillStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
          opacity: 1,
        });
      }
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [activeSection, lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      // Avoid intermediate section jumps while smooth-scrolling from a click
      if (isManualScroll.current) return;

      const scrollPos = window.scrollY + 180;
      let current = "resume";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        current = "contact";
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    isManualScroll.current = true;
    setActiveSection(id);
    if (manualScrollTimeout.current) {
      clearTimeout(manualScrollTimeout.current);
    }
    manualScrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 750);
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-4xl mx-auto pointer-events-auto rounded-2xl md:rounded-full px-3.5 sm:px-5 h-13 sm:h-14 flex items-center justify-between gap-4 backdrop-blur-xl bg-white/85 dark:bg-[#111927]/85 border transition-all duration-300 ${
          scrolled
            ? "border-slate-300/90 dark:border-slate-700/80 shadow-[0_8px_30px_rgb(15,23,42,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
            : "border-slate-200/80 dark:border-slate-800/80 shadow-xs"
        }`}
      >
        {/* Desktop Navigation Links with Smooth Gliding Pill */}
        <nav
          ref={navContainerRef}
          className="relative hidden md:flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider shrink-0"
        >
          {/* Single Sliding Pill Indicator */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 rounded-full accent-pill transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "accent-text font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger + Active Section Indicator */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
            className="p-2 rounded-full surface-badge text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <span className="text-[11px] font-bold uppercase tracking-wider accent-text">
            {navLinks.find((n) => n.id === activeSection)?.label}
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <span className="hidden md:block h-4 w-px bg-slate-200 dark:bg-slate-800 mr-0.5" />

          {/* Command Palette Trigger (Ctrl+K) */}
          <button
            type="button"
            onClick={() => setIsCmdOpen(true)}
            title="Ctrl+K / ⌘K"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full surface-badge text-[11px] font-medium text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <kbd className="hidden sm:inline text-[10px] font-mono text-slate-500 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Language Switcher ES / EN */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Cambiar idioma ES / EN"
            className="px-2.5 py-1 rounded-full surface-badge text-[11px] font-bold tracking-wider transition-colors cursor-pointer"
          >
            <span
              className={
                lang === "es"
                  ? "accent-text"
                  : "text-slate-400 dark:text-slate-500"
              }
            >
              ES
            </span>
            <span className="mx-1 text-slate-300 dark:text-slate-700">/</span>
            <span
              className={
                lang === "en"
                  ? "accent-text"
                  : "text-slate-400 dark:text-slate-500"
              }
            >
              EN
            </span>
          </button>

          {/* LinkedIn Icon Link */}
          <a
            href={t.meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 accent-hover-text transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Theme Toggle Icon */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar modo Claro / Oscuro"
            title={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 accent-hover-text transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className={`w-4 h-4 transition-transform duration-300 ${
                theme === "light" ? "rotate-180" : ""
              }`}
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 3a9 9 0 0 0 0 18V3z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Popover */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 pointer-events-auto rounded-2xl bg-white/95 dark:bg-[#131c2e]/95 backdrop-blur-xl border border-slate-300 dark:border-slate-700 px-4 py-3.5 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "accent-pill font-bold"
                      : "text-slate-700 dark:text-slate-200 surface-card accent-hover-text"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="accent-text">→</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
