"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, PortfolioContent, portfolioData } from "@/data/portfolio";

export type ThemeMode = "dark" | "light";

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isCmdOpen: boolean;
  setIsCmdOpen: React.Dispatch<React.SetStateAction<boolean>>;
  t: PortfolioContent;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [lang, setLangState] = useState<Language>("es");
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeMode | null;
    const savedLang = localStorage.getItem("portfolio-lang") as Language | null;

    const initialTheme: ThemeMode =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    if (savedLang === "en" || savedLang === "es") {
      setLangState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      document.documentElement.lang = "es";
    }
  }, []);

  // Global keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsCmdOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    localStorage.setItem("portfolio-lang", nextLang);
    document.documentElement.lang = nextLang;
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        isCmdOpen,
        setIsCmdOpen,
        t: portfolioData[lang],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}
