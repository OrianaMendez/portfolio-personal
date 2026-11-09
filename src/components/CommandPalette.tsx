"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "@/context/AppContext";

interface CmdItem {
  id: string;
  group: string;
  label: string;
  shortcut?: string;
  onSelect: () => void;
}

export function CommandPalette() {
  const { isCmdOpen, setIsCmdOpen, toggleTheme, toggleLang, t } = useApp();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedFeedback, setCopiedFeedback] = useState(false);
  const gChordRef = useRef<boolean>(false);
  const gTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeAndRun = (fn: () => void) => {
    setIsCmdOpen(false);
    setQuery("");
    fn();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CmdItem[] = useMemo(
    () => [
      {
        id: "nav-resume",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToResume,
        shortcut: "G R",
        onSelect: () => closeAndRun(() => scrollToSection("resume")),
      },
      {
        id: "nav-skills",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToSkills,
        shortcut: "G S",
        onSelect: () => closeAndRun(() => scrollToSection("skills")),
      },
      {
        id: "nav-exp",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToExperience,
        shortcut: "G E",
        onSelect: () => closeAndRun(() => scrollToSection("experience")),
      },
      {
        id: "nav-proj",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToProjects,
        shortcut: "G P",
        onSelect: () => closeAndRun(() => scrollToSection("projects")),
      },
      {
        id: "nav-certs",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToCertifications,
        shortcut: "G C",
        onSelect: () => closeAndRun(() => scrollToSection("certifications")),
      },
      {
        id: "nav-contact",
        group: t.commandPalette.groups.navigation,
        label: t.commandPalette.actions.goToContact,
        shortcut: "G M",
        onSelect: () => closeAndRun(() => scrollToSection("contact")),
      },
      {
        id: "pref-theme",
        group: t.commandPalette.groups.preferences,
        label: t.commandPalette.actions.toggleTheme,
        shortcut: "T",
        onSelect: () => closeAndRun(toggleTheme),
      },
      {
        id: "pref-lang",
        group: t.commandPalette.groups.preferences,
        label: t.commandPalette.actions.toggleLang,
        shortcut: "L",
        onSelect: () => closeAndRun(toggleLang),
      },
      {
        id: "act-email",
        group: t.commandPalette.groups.quickActions,
        label: copiedFeedback
          ? t.contact.copiedEmailBtn
          : t.commandPalette.actions.copyEmail,
        shortcut: "C",
        onSelect: () => {
          navigator.clipboard?.writeText(t.meta.email);
          setCopiedFeedback(true);
          setTimeout(() => {
            setCopiedFeedback(false);
            setIsCmdOpen(false);
            setQuery("");
          }, 700);
        },
      },
      {
        id: "act-linkedin",
        group: t.commandPalette.groups.quickActions,
        label: t.commandPalette.actions.openLinkedin,
        shortcut: "↗",
        onSelect: () =>
          closeAndRun(() => window.open(t.meta.linkedinUrl, "_blank")),
      },
    ],
    [t, copiedFeedback, toggleTheme, toggleLang]
  );

  // Global keyboard shortcuts (T, L, C, and G + R/S/E/P/C/M when not typing in an input)
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isTyping) return;

      const key = e.key.toLowerCase();

      if (gChordRef.current) {
        gChordRef.current = false;
        if (gTimeoutRef.current) clearTimeout(gTimeoutRef.current);
        const sectionMap: Record<string, string> = {
          r: "resume",
          s: "skills",
          e: "experience",
          p: "projects",
          c: "certifications",
          m: "contact",
        };
        if (sectionMap[key]) {
          e.preventDefault();
          scrollToSection(sectionMap[key]);
          setIsCmdOpen(false);
          return;
        }
      }

      if (key === "g") {
        gChordRef.current = true;
        if (gTimeoutRef.current) clearTimeout(gTimeoutRef.current);
        gTimeoutRef.current = setTimeout(() => {
          gChordRef.current = false;
        }, 900);
        return;
      }

      if (key === "t") {
        e.preventDefault();
        toggleTheme();
      } else if (key === "l") {
        e.preventDefault();
        toggleLang();
      } else if (key === "c") {
        e.preventDefault();
        navigator.clipboard?.writeText(t.meta.email);
      }
    };

    window.addEventListener("keydown", handleGlobalShortcuts);
    return () => window.removeEventListener("keydown", handleGlobalShortcuts);
  }, [toggleTheme, toggleLang, t.meta.email, setIsCmdOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, isCmdOpen]);

  useEffect(() => {
    if (!isCmdOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) =>
            (prev - 1 + Math.max(filtered.length, 1)) %
            Math.max(filtered.length, 1)
        );
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].onSelect();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isCmdOpen, filtered, activeIndex]);

  if (!isCmdOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.commandPalette.placeholder}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-xs"
      onClick={() => setIsCmdOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-xl surface-card overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.commandPalette.placeholder}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-600 dark:placeholder:text-slate-300 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="px-2 py-0.5 text-xs font-medium rounded surface-badge text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              ×
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsCmdOpen(false)}
            className="px-2 py-0.5 text-xs font-mono rounded surface-badge text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-xs text-slate-600 dark:text-slate-300">
              {t.commandPalette.noResults}
            </p>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={item.onSelect}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "accent-pill font-medium"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.group}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.shortcut && (
                    <kbd className="text-xs font-mono text-slate-600 dark:text-slate-300">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
