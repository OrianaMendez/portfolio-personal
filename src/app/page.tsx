"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  SkillCategory,
  CertCategory,
  skillsList,
  CertificationItem,
} from "@/data/portfolio";
import { SkillBadge } from "@/components/SkillBadge";
import { WavyDivider } from "@/components/WavyDivider";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IssuerBadge({ issuer }: { issuer: CertificationItem["issuer"] }) {
  if (issuer === "Platzi") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
        <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Platzi
      </span>
    );
  }
  if (issuer === "LinkedIn") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-sky-500/12 text-sky-700 dark:text-sky-400 border border-sky-500/30">
        <LinkedInIcon className="w-3 h-3 shrink-0" />
        LinkedIn
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold accent-pill">
      <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
      {issuer}
    </span>
  );
}

export default function LandingCVPage() {
  const { t, lang } = useApp();
  const [selectedSkillCat, setSelectedSkillCat] =
    useState<SkillCategory>("all");
  const [selectedCertCat, setSelectedCertCat] = useState<CertCategory>("all");
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredSkills =
    selectedSkillCat === "all"
      ? skillsList
      : skillsList.filter((skill) => skill.category === selectedSkillCat);

  const filteredCerts =
    selectedCertCat === "all"
      ? t.certifications.items
      : t.certifications.items.filter(
          (cert) => cert.category === selectedCertCat
        );

  const visibleCerts =
    selectedCertCat === "all" && !showAllCerts
      ? filteredCerts.slice(0, 6)
      : filteredCerts;

  const handleCopyCertId = (id: string) => {
    navigator.clipboard?.writeText(id);
    setCopiedCertId(id);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  const skillCategories: SkillCategory[] = [
    "all",
    "frontend",
    "backend",
    "cloud_ai",
  ];
  const certCategories: CertCategory[] = ["all", "ai", "fullstack", "uiux"];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(t.meta.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* =====================================================================
          1. HERO / RESUME HEADER
      ===================================================================== */}
      <section id="resume" className="scroll-mt-24 pt-2">
        {/* Top Meta Pill: Available status */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full accent-pill font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full accent-bg opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 accent-bg" />
            </span>
            {t.hero.availableBadge}
          </span>
        </div>

        {/* Main Heading: Oriana Méndez */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t.hero.title}
        </h1>
        <p className="mt-1 text-sm sm:text-base font-medium accent-text">
          {t.meta.role}
        </p>

        {/* Intro Narrative */}
        <div className="mt-4 space-y-3 text-sm sm:text-[15.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          {t.hero.introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Action & Contact Strip */}
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-[13.5px]">
          <a
            href="/Oriana_Mendez_CV.pdf"
            download="Oriana_Mendez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg accent-pill font-semibold shadow-2xs transition-transform hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </span>
          </a>

          <a
            href={`mailto:${t.meta.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg surface-badge font-medium text-slate-700 dark:text-slate-200"
          >
            <MailIcon className="w-3.5 h-3.5 accent-text shrink-0" />
            <span>{t.meta.email}</span>
          </a>

          <a
            href={t.meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg surface-badge font-medium text-slate-700 dark:text-slate-200"
          >
            <LinkedInIcon className="w-3.5 h-3.5 accent-text shrink-0" />
            <span>linkedin.com/in/oriana-mendez-ma</span>
          </a>
        </div>

        {/* Wavy Divider */}
        <WavyDivider className="mt-6 mb-2" />
      </section>

      {/* =====================================================================
          2. HABILIDADES Y TECNOLOGÍAS
      ===================================================================== */}
      <section id="skills" className="scroll-mt-24 space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {t.skills.description}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {skillCategories.map((cat) => {
            const active = selectedSkillCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedSkillCat(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? "accent-pill shadow-2xs"
                    : "surface-badge text-slate-700 dark:text-slate-300"
                }`}
              >
                {t.skills.categories[cat]}
              </button>
            );
          })}
        </div>

        {/* Skills Icon + Name Badges */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {filteredSkills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. EXPERIENCIA LABORAL
      ===================================================================== */}
      <section id="experience" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {t.experience.descriptionPrefix}{" "}
            <a
              href="/Oriana_Mendez_CV.pdf"
              download="Oriana_Mendez_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold accent-text uses-link"
            >
              {t.experience.downloadLabel}
            </a>
          </p>
          <WavyDivider />
        </div>

        {/* Timeline List with 3D Company Cards */}
        <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-[6px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-300 dark:before:bg-slate-800">
          {t.experience.items.map((companyGroup, idx) => {
            const hasMultiplePositions = companyGroup.positions.length > 1;
            const SinglePos = companyGroup.positions[0];
            const summaryDuration =
              companyGroup.totalDuration || SinglePos.duration;

            return (
              <div
                key={`${companyGroup.company}-${idx}`}
                className="relative"
              >
                {/* Main Timeline Node for the Company */}
                <span className="absolute -left-6 sm:-left-8 top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full accent-node" />

                {/* 3D Surface Card for each Company */}
                <div className="rounded-xl surface-card p-5 sm:p-6 space-y-5">
                  {/* Unified Company Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg accent-pill flex items-center justify-center shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 accent-text"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        {companyGroup.companyUrl ? (
                          <a
                            href={companyGroup.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-base sm:text-[17px] font-bold text-slate-900 dark:text-white uses-link"
                          >
                            <span>{companyGroup.company}</span>
                            <span className="text-xs accent-text">↗</span>
                          </a>
                        ) : (
                          <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
                            {companyGroup.company}
                          </h3>
                        )}
                      </div>
                    </div>

                    {summaryDuration && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold accent-pill shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{summaryDuration}</span>
                      </span>
                    )}
                  </div>

                  {hasMultiplePositions ? (
                    /* LINKEDIN-STYLE GROUPED ROLES INSIDE THE COMPANY CARD */
                    <div className="relative pl-6 sm:pl-7 space-y-7 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
                      {companyGroup.positions.map((pos, pIdx) => (
                        <div
                          key={`${pos.role}-${pIdx}`}
                          className={`relative ${
                            pIdx > 0
                              ? "pt-6 border-t border-slate-100 dark:border-slate-800/50"
                              : ""
                          }`}
                        >
                          {/* Sub-node dot */}
                          <span
                            className={`absolute -left-6 sm:-left-7 ${
                              pIdx > 0 ? "top-7.5" : "top-1.5"
                            } h-3 w-3 rounded-full ring-4 ring-white dark:ring-[#131c2e] ${
                              pos.current
                                ? "accent-bg"
                                : "bg-white dark:bg-[#131c2e] border-2 border-slate-400 dark:border-slate-500"
                            }`}
                          />

                          {/* Role Title + Metadata Pills */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                              {pos.role}
                            </h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-[#0b111e] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800">
                              {pos.employmentType}
                            </span>
                          </div>

                          {/* Period & Duration */}
                          <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            <span>
                              {pos.period}
                              {pos.duration ? ` · ${pos.duration}` : ""}
                            </span>
                          </div>

                          {/* Bullets */}
                          <ul className="mt-3 space-y-2 text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300">
                            {pos.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 leading-relaxed"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full accent-bg"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack */}
                          <div className="mt-4 flex flex-wrap items-center gap-1.5">
                            {pos.technologies.map((tech) => (
                              <SkillBadge
                                key={tech.name}
                                name={tech.name}
                                icon={tech.icon}
                                compact
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* SINGLE ROLE INSIDE THE COMPANY CARD */
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {SinglePos.role}
                        </h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-[#0b111e] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800">
                          {SinglePos.employmentType}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <span>{SinglePos.period}</span>
                      </div>

                      <ul className="mt-3 space-y-2 text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300">
                        {SinglePos.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full accent-bg"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-1.5">
                        {SinglePos.technologies.map((tech) => (
                          <SkillBadge
                            key={tech.name}
                            name={tech.name}
                            icon={tech.icon}
                            compact
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. PROYECTOS DESTACADOS
      ===================================================================== */}
      <section id="projects" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {t.projects.description}
          </p>
          <WavyDivider />
        </div>

        <div className="space-y-5">
          {t.projects.items.map((project) => (
            <div
              key={project.id}
              className="rounded-xl surface-card p-5 sm:p-6 space-y-3.5"
            >
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider accent-text">
                  {project.category} · {project.period}
                </span>
                {project.live && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t.projects.liveBadge}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.description}
              </p>

              {/* Key Highlights as a Clean Bullet List */}
              <ul className="space-y-2 pt-1 text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full accent-bg"
                    />
                    <span>
                      <strong className="font-semibold text-slate-900 dark:text-white">
                        {h.label}:
                      </strong>{" "}
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="pt-3.5 border-t border-slate-200/80 dark:border-slate-800/70 flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <SkillBadge
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    compact
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400">
          <span className="accent-text font-bold">*</span>{" "}
          {t.projects.upcomingNote}
        </p>
      </section>

      {/* =====================================================================
          5. LICENCIAS Y CERTIFICACIONES
      ===================================================================== */}
      <section id="certifications" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.certifications.title}
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {t.certifications.description}
          </p>
          <WavyDivider />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {certCategories.map((cat) => {
            const active = selectedCertCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCertCat(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? "accent-pill shadow-2xs"
                    : "surface-badge text-slate-700 dark:text-slate-300"
                }`}
              >
                {t.certifications.categories[cat]}
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Grid of Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visibleCerts.map((cert) => {
            const shortId =
              cert.credentialId && cert.credentialId.length > 14
                ? `${cert.credentialId.slice(0, 8)}…${cert.credentialId.slice(-4)}`
                : cert.credentialId;
            const isCopied = copiedCertId === cert.credentialId;

            return (
              <div
                key={cert.id}
                className="rounded-xl surface-card p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Top Row: Issuer Badge + Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <IssuerBadge issuer={cert.issuer} />
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  {/* Associated Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-100/90 dark:bg-[#0b111e] text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Footer Row: Compact Verified ID Pill + Credential Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/70 flex items-center justify-between gap-2">
                  {cert.credentialId ? (
                    <button
                      type="button"
                      onClick={() => handleCopyCertId(cert.credentialId!)}
                      title={`${t.certifications.credentialIdLabel} ${cert.credentialId}`}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10.5px] font-mono bg-slate-100/80 hover:bg-slate-200/70 dark:bg-[#0b111e] dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        {isCopied
                          ? lang === "es"
                            ? "¡ID copiado!"
                            : "ID copied!"
                          : `ID: ${shortId}`}
                      </span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        {lang === "es"
                          ? "Certificado verificado"
                          : "Verified certificate"}
                      </span>
                    </span>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11.5px] font-semibold accent-pill hover:opacity-90 transition-opacity shrink-0"
                    >
                      <span>{t.certifications.showCredential}</span>
                      <span className="text-[11px] leading-none">↗</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show All / Show Less Toggle Button when in 'all' view */}
        {selectedCertCat === "all" && filteredCerts.length > 6 && (
          <div className="pt-1 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCerts((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#38bdf8] cursor-pointer"
            >
              <span>
                {showAllCerts
                  ? lang === "es"
                    ? "Mostrar menos certificaciones"
                    : "Show fewer certifications"
                  : lang === "es"
                    ? `Ver las ${filteredCerts.length} certificaciones (${filteredCerts.length - 6} más)`
                    : `View all ${filteredCerts.length} certifications (${filteredCerts.length - 6} more)`}
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`w-3.5 h-3.5 accent-text transition-transform duration-200 ${
                  showAllCerts ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* =====================================================================
          6. ESPECIALIDADES Y ÁREAS DE ENFOQUE
      ===================================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.focusAreas.title}
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300">
            {t.focusAreas.subtitle}
          </p>
          <WavyDivider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.focusAreas.boxes.map((box, boxIdx) => (
            <div
              key={box.title}
              className="rounded-xl surface-card p-5 sm:p-6 flex flex-col justify-between space-y-5"
            >
              {/* Card Header with 3D Tactile Icon Box */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl accent-pill flex items-center justify-center shrink-0 shadow-2xs">
                  {boxIdx === 0 ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 accent-text"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 accent-text"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  )}
                </div>
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider accent-text">
                    {boxIdx === 0
                      ? lang === "es"
                        ? "Arquitectura de Interfaz"
                        : "Interface Architecture"
                      : lang === "es"
                        ? "Datos, Cloud e IA"
                        : "Data, Cloud & AI"}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                    {box.title}
                  </h3>
                </div>
              </div>

              {/* Modular Inner Items */}
              <div className="grid grid-cols-1 gap-2.5">
                {box.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg p-3 bg-slate-50/90 dark:bg-[#0b111e]/75 border border-slate-200/80 dark:border-slate-800/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full accent-bg shrink-0" />
                      <span className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-1 pl-3.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. CONTACTO
      ===================================================================== */}
      <section id="contact" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {t.contact.subtitle}
          </p>
          <WavyDivider />
        </div>

        <div className="rounded-xl surface-card p-5 sm:p-7 space-y-6">
          {/* Header Row with Live Availability Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.contact.cardTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {lang === "es"
                  ? "Respuesta directa por correo electrónico o LinkedIn"
                  : "Direct response via email or LinkedIn"}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full accent-pill text-[11px] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full accent-bg opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 accent-bg" />
              </span>
              {t.hero.availableBadge}
            </span>
          </div>

          {/* 2 Interactive Channel Cards (Email + LinkedIn) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Channel Card */}
            <div className="rounded-xl p-4 bg-slate-50/90 dark:bg-[#0b111e]/80 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl accent-pill flex items-center justify-center shrink-0">
                  <MailIcon className="w-4 h-4 accent-text" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${t.meta.email}`}
                    className="block text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white truncate hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors mt-0.5"
                  >
                    {t.meta.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg accent-pill text-xs font-semibold transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>
                    {copiedEmail
                      ? `✓ ${t.contact.copiedEmailBtn}`
                      : t.contact.copyEmailBtn}
                  </span>
                </button>
                <a
                  href={`mailto:${t.meta.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#38bdf8]"
                >
                  <span>{t.contact.sendEmailBtn}</span>
                  <span className="accent-text">↗</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Channel Card */}
            <div className="rounded-xl p-4 bg-slate-50/90 dark:bg-[#0b111e]/80 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl accent-pill flex items-center justify-center shrink-0">
                  <LinkedInIcon className="w-4 h-4 accent-text" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.contact.linkedinLabel}
                  </span>
                  <a
                    href={t.meta.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white truncate hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors mt-0.5"
                  >
                    linkedin.com/in/oriana-mendez-ma
                  </a>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <a
                  href={t.meta.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#38bdf8]"
                >
                  <span>{t.contact.linkedinBtn}</span>
                  <span className="accent-text">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
