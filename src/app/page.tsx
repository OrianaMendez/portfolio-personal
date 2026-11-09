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
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Platzi
      </span>
    );
  }
  if (issuer === "LinkedIn") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold bg-sky-500/12 text-sky-700 dark:text-sky-400 border border-sky-500/30">
        <LinkedInIcon className="w-3 h-3 shrink-0" />
        LinkedIn
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold accent-pill">
      <svg
        viewBox="0 0 24 24"
        className="w-3 h-3 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
      {issuer}
    </span>
  );
}

function AiTranscriptionInteractiveDiagram({ lang }: { lang: "es" | "en" }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const steps = [
    {
      num: "01 / INPUT",
      title: "Next.js + S3",
      sub: "Chunk upload",
      status: lang === "es" ? "Audio 48MB cargado" : "Audio 48MB loaded",
      metric: "12ms",
    },
    {
      num: "02 / QUEUE",
      title: "FastAPI + Celery",
      sub: "Redis Broker",
      status: lang === "es" ? "Tarea encolada #842" : "Task dispatched #842",
      metric: "Worker 1",
    },
    {
      num: "03 / AI CORE",
      title: "Whisper + GPT",
      sub: "VAD & Summary",
      status: lang === "es" ? "VAD segmentación & GPT" : "VAD segments & GPT",
      metric: "99.2% acc",
    },
    {
      num: "04 / OUTPUT",
      title: "S3 + Drive",
      sub: "Email & Docs",
      status: lang === "es" ? "Acta entregada en PDF" : "PDF minutes delivered",
      metric: "200 OK",
    },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    setTimeout(() => setActiveStep(1), 700);
    setTimeout(() => setActiveStep(2), 1400);
    setTimeout(() => setActiveStep(3), 2100);
    setTimeout(() => {
      setIsSimulating(false);
    }, 3000);
  };

  return (
    <div className="w-full rounded-xl border border-[var(--border-card-strong)] bg-[var(--accent-soft)] p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span className="font-semibold accent-text">
            {lang === "es"
              ? "PIPELINE ASÍNCRONO · NO BLOQUEANTE"
              : "ASYNC PIPELINE · NON-BLOCKING"}
          </span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-300">
            · DOCKER + REDIS
          </span>
        </div>
        <button
          type="button"
          onClick={runSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold accent-pill cursor-pointer transition-transform hover:-translate-y-0.5 disabled:opacity-50"
        >
          <span>
            {isSimulating
              ? "⚡ " + (lang === "es" ? "Ejecutando..." : "Running...")
              : "▶ " + (lang === "es" ? "Simular Flujo" : "Simulate Flow")}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-card)] font-mono text-xs border-y border-[var(--border-card)] py-1">
        {steps.map((st, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={st.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-2.5 transition-colors cursor-pointer ${
                isActive
                  ? "bg-[var(--accent-soft)]"
                  : "hover:bg-[var(--accent-soft)]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={
                    isActive
                      ? "accent-text font-bold"
                      : "text-slate-600 dark:text-slate-300"
                  }
                >
                  {st.num}
                </span>
                <span className="text-[11px] opacity-75">{st.metric}</span>
              </div>
              <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                {st.title}
              </div>
              <div className="mt-0.5 text-slate-600 dark:text-slate-300">
                {st.sub}
              </div>
            </button>
          );
        })}
      </div>

      {activeStep !== null && (
        <div className="pt-0.5 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300 border-t border-[var(--border-card)] pt-2">
          <span className="accent-text font-semibold">
            {steps[activeStep].num}: {steps[activeStep].status}
          </span>
          <span className="text-slate-500 dark:text-slate-400">
            {lang === "es" ? "Paso activo" : "Active step"}
          </span>
        </div>
      )}
    </div>
  );
}

function RealTimeVoiceInteractiveDiagram({ lang }: { lang: "es" | "en" }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="w-full rounded-xl border border-[var(--border-card-strong)] bg-[var(--accent-soft)] p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isPlaying ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
          <span className="font-semibold accent-text">
            {lang === "es"
              ? "ARQUITECTURA DE VOZ EN TIEMPO REAL"
              : "REAL-TIME VOICE ARCHITECTURE"}
          </span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-300">
            · WSS STREAM
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold accent-pill cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <span>
            {isPlaying
              ? "⏸ " + (lang === "es" ? "Pausar Audio" : "Pause Audio")
              : "▶ " + (lang === "es" ? "Activar Audio" : "Play Audio")}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-card)] font-mono text-xs border-y border-[var(--border-card)] py-1">
        <div className="p-2.5 flex items-center justify-between">
          <div>
            <div className="text-slate-600 dark:text-slate-300">CLIENT</div>
            <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
              Next.js UI
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              AudioBuffer API
            </div>
          </div>
          <span
            className={`font-bold text-xs ${
              isPlaying ? "accent-text" : "text-slate-400"
            }`}
          >
            ⇄ WSS
          </span>
        </div>

        <div className="p-2.5 flex items-center justify-between">
          <div>
            <div className="accent-text font-semibold">ORCHESTRATOR</div>
            <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
              n8n AI Agents
            </div>
            <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
              Sub-150ms router
            </div>
          </div>
          <span
            className={`font-bold text-xs ${
              isPlaying ? "accent-text" : "text-slate-400"
            }`}
          >
            ⇄ API
          </span>
        </div>

        <div className="p-2.5 flex items-center justify-between">
          <div>
            <div className="text-slate-600 dark:text-slate-300">
              VOICE SYNTH
            </div>
            <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
              ElevenLabs
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              24kHz PCM Stream
            </div>
          </div>
          {/* Animated voice equalizer */}
          <div className="flex items-center gap-1 h-5 px-1.5">
            <span
              className={`w-1 rounded-full bg-[var(--accent)] ${
                isPlaying ? "animate-wave-1" : "h-2"
              }`}
            />
            <span
              className={`w-1 rounded-full bg-[var(--accent)] opacity-80 ${
                isPlaying ? "animate-wave-2" : "h-3"
              }`}
            />
            <span
              className={`w-1 rounded-full bg-[var(--accent)] opacity-60 ${
                isPlaying ? "animate-wave-3" : "h-1.5"
              }`}
            />
            <span
              className={`w-1 rounded-full bg-[var(--accent)] opacity-90 ${
                isPlaying ? "animate-wave-4" : "h-2.5"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 border-t border-[var(--border-card)] pt-2">
        <span className="accent-text font-semibold">
          {isPlaying
            ? lang === "es"
              ? "● Streaming activo: Latencia 138ms · Chunk 24kHz PCM"
              : "● Active stream: Latency 138ms · Chunk 24kHz PCM"
            : lang === "es"
            ? "○ Streaming pausado"
            : "○ Stream paused"}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          Full-duplex WebSocket
        </span>
      </div>
    </div>
  );
}

function QuickSightBIInteractiveDiagram({ lang }: { lang: "es" | "en" }) {
  const [metric, setMetric] = useState<"sales" | "forecast" | "conversion">(
    "sales"
  );

  const metricData = {
    sales: {
      label: lang === "es" ? "Ventas Trimestrales" : "Quarterly Sales",
      bars: [38, 55, 72, 90],
      stat: "+24.8% YoY",
    },
    forecast: {
      label: lang === "es" ? "Proyección Inmobiliaria" : "Real Estate Forecast",
      bars: [50, 68, 85, 96],
      stat: "94.2% Confianza",
    },
    conversion: {
      label: lang === "es" ? "Embudo de Conversión" : "Conversion Funnel",
      bars: [88, 64, 42, 28],
      stat: "18.4% Cierre",
    },
  };

  const current = metricData[metric];

  return (
    <div className="w-full rounded-xl border border-[var(--border-card-strong)] bg-[var(--accent-soft)] p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span className="font-semibold accent-text">
            {lang === "es"
              ? "FLUJO TRANSACCIONAL Y ANALÍTICA BI"
              : "TRANSACTIONAL & BI ANALYTICS FLOW"}
          </span>
        </div>
        {/* Metric Selector Pills */}
        <div className="flex items-center gap-1">
          {(["sales", "forecast", "conversion"] as const).map((m) => {
            const active = metric === m;
            const labels = {
              sales: lang === "es" ? "Ventas" : "Sales",
              forecast: lang === "es" ? "Forecast" : "Forecast",
              conversion: lang === "es" ? "Conversión" : "Funnel",
            };
            return (
              <button
                key={m}
                type="button"
                onClick={() => setMetric(m)}
                className={`px-2 py-0.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
                  active
                    ? "accent-pill"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {labels[m]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-card)] font-mono text-xs border-y border-[var(--border-card)] py-1">
        <div className="p-2.5">
          <div className="text-slate-600 dark:text-slate-300">WEB APPS</div>
          <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
            React + Next.js
          </div>
          <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Captura transaccional
          </div>
        </div>

        <div className="p-2.5">
          <div className="text-slate-600 dark:text-slate-300">DATA LAYER</div>
          <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
            Prisma ORM + SQL
          </div>
          <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Modelos relacionales
          </div>
        </div>

        <div className="p-2.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="accent-text font-semibold">
                QUICKSIGHT BI
              </span>
              <span className="accent-text font-bold text-[11px]">
                {current.stat}
              </span>
            </div>
            <div className="mt-0.5 font-semibold text-slate-900 dark:text-white">
              {current.label}
            </div>
          </div>
          {/* Dynamic mini bar chart */}
          <div className="mt-2 flex items-end gap-1.5 h-6">
            {current.bars.map((val, i) => (
              <div
                key={i}
                className="flex-1 rounded-xs bg-[var(--accent)] transition-all duration-300"
                style={{ height: `${val}%` }}
                title={`${val}%`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 border-t border-[var(--border-card)] pt-2">
        <span className="accent-text font-semibold">
          AWS QuickSight SPICE Engine · Refresh automático
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          CI/CD Jenkins + AWS
        </span>
      </div>
    </div>
  );
}

function ProjectArchitectureDiagram({
  projectId,
  lang,
}: {
  projectId: string;
  lang: "es" | "en";
}) {
  if (projectId === "ai-audio-transcription") {
    return <AiTranscriptionInteractiveDiagram lang={lang} />;
  }
  if (projectId === "ai-hr-platform") {
    return <RealTimeVoiceInteractiveDiagram lang={lang} />;
  }
  return <QuickSightBIInteractiveDiagram lang={lang} />;
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

  const getSkillCategoryCount = (cat: SkillCategory) =>
    cat === "all"
      ? skillsList.length
      : skillsList.filter((s) => s.category === cat).length;

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
        {/* Top Eyebrow: Experience in production */}
        <div className="mb-4 font-mono text-xs text-slate-600 dark:text-slate-300">
          +4 {lang === "es" ? "AÑOS EN PRODUCCIÓN" : "YRS IN PRODUCTION"}
        </div>

        {/* Main Heading: Oriana Méndez */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t.hero.title}
        </h1>
        <p className="mt-2 text-base sm:text-lg font-semibold accent-text">
          {t.meta.role}
        </p>

        {/* Intro Narrative */}
        <div className="mt-4 max-w-[65ch] space-y-3 text-sm sm:text-[15.5px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
          {t.hero.introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Core Engineering Pillars with Author Palette */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-slate-200/80 dark:border-slate-800/80 py-3.5 text-xs">
          <div className="rounded-lg p-3 surface-card">
            <div className="font-mono font-semibold accent-text flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              01 / FRONT-END & UI/UX
            </div>
            <div className="mt-1 text-slate-700 dark:text-slate-300">
              React, Next.js App Router, TypeScript & Tailwind CSS
            </div>
          </div>
          <div className="rounded-lg p-3 surface-card">
            <div className="font-mono font-semibold accent-text flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              02 / AI & REAL-TIME
            </div>
            <div className="mt-1 text-slate-700 dark:text-slate-300">
              FastAPI, Whisper, ElevenLabs, WebSockets & n8n
            </div>
          </div>
          <div className="rounded-lg p-3 surface-card">
            <div className="font-mono font-semibold accent-text flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              03 / CLOUD & DATA BI
            </div>
            <div className="mt-1 text-slate-700 dark:text-slate-300">
              AWS QuickSight, S3, Prisma, PostgreSQL & Docker
            </div>
          </div>
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
            <span>{lang === "es" ? "Descargar CV" : "Download CV"}</span>
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

        {/* Signature Wavy Divider (Used once in Hero for identity) */}
        <WavyDivider className="mt-7 mb-2" />
      </section>

      {/* =====================================================================
          2. HABILIDADES Y TECNOLOGÍAS
      ===================================================================== */}
      <section id="skills" className="scroll-mt-24 space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="max-w-[65ch] text-sm sm:text-[15px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
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
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs transition-all cursor-pointer ${
                  active
                    ? "accent-pill shadow-2xs font-bold"
                    : "surface-badge text-slate-700 dark:text-slate-300"
                }`}
              >
                <span>{t.skills.categories[cat]}</span>
                <span className="font-mono text-xs opacity-80">
                  ({getSkillCategoryCount(cat)})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grouped View when 'all' is selected */}
        {selectedSkillCat === "all" ? (
          <div className="space-y-4 pt-1">
            {(["frontend", "backend", "cloud_ai"] as const).map((groupKey) => {
              const groupItems = skillsList.filter(
                (s) => s.category === groupKey
              );

              return (
                <div
                  key={groupKey}
                  className="pt-3 first:pt-0 border-t first:border-t-0 border-slate-200/70 dark:border-slate-800/70"
                >
                  <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider accent-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{t.skills.categories[groupKey]}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {groupItems.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {filteredSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        )}
      </section>

      {/* =====================================================================
          3. EXPERIENCIA LABORAL
      ===================================================================== */}
      <section id="experience" className="scroll-mt-24 space-y-6">
        <div className="space-y-2 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.experience.title}
          </h2>
          <p className="max-w-[65ch] text-sm sm:text-[15px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
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
        </div>

        {/* Open Fluid Timeline List (No outer card box) */}
        <div className="relative pl-6 sm:pl-8 space-y-11 before:content-[''] before:absolute before:left-[6px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-300 dark:before:bg-slate-800">
          {t.experience.items.map((companyGroup, idx) => {
            const hasMultiplePositions = companyGroup.positions.length > 1;
            const SinglePos = companyGroup.positions[0];

            return (
              <div key={`${companyGroup.company}-${idx}`} className="relative">
                {/* Main Timeline Node for the Company */}
                <span className="absolute -left-6 sm:-left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full accent-node" />

                {hasMultiplePositions ? (
                  /* LINKEDIN-STYLE GROUPED COMPANY WITH NESTED ROLES */
                  <div className="space-y-4">
                    {/* Company Header */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
                        {companyGroup.companyUrl ? (
                          <a
                            href={companyGroup.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uses-link"
                          >
                            {companyGroup.company}
                          </a>
                        ) : (
                          companyGroup.company
                        )}
                      </h3>
                      {companyGroup.totalDuration && (
                        <>
                          <span className="text-slate-400 dark:text-slate-500">
                            •
                          </span>
                          <span className="font-mono text-xs font-semibold accent-text">
                            {companyGroup.totalDuration}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Nested Sub-Timeline for each role inside the same company */}
                    <div className="relative pl-6 sm:pl-7 space-y-8 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-300/90 dark:before:bg-slate-700/80">
                      {companyGroup.positions.map((pos, pIdx) => (
                        <div key={`${pos.role}-${pIdx}`} className="relative">
                          {/* Sub-node dot */}
                          <span
                            className={`absolute -left-6 sm:-left-7 top-1.5 h-3 w-3 rounded-full ring-4 ring-[var(--bg-primary)] ${
                              pos.current
                                ? "accent-bg"
                                : "bg-[var(--bg-primary)] border-2 border-slate-400 dark:border-slate-500"
                            }`}
                          />

                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                            {pos.role}
                          </h4>

                          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                            {pos.employmentType}
                          </p>

                          <p className="mt-0.5 font-mono text-xs font-medium text-slate-600 dark:text-slate-300">
                            {pos.period}
                            {pos.duration ? ` · ${pos.duration}` : ""}
                          </p>

                          <ul className="mt-2.5 max-w-[65ch] space-y-1.5 text-xs sm:text-[13.5px] text-pretty text-slate-700 dark:text-slate-300">
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

                          <div className="mt-3 flex flex-wrap items-center gap-1.5">
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
                  </div>
                ) : (
                  /* SINGLE ROLE AT COMPANY */
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                      {SinglePos.role}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200">
                      {companyGroup.companyUrl ? (
                        <a
                          href={companyGroup.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold uses-link"
                        >
                          {companyGroup.company}
                        </a>
                      ) : (
                        <span className="font-semibold uses-link">
                          {companyGroup.company}
                        </span>
                      )}
                      <span className="text-slate-400 dark:text-slate-500">
                        •
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {SinglePos.employmentType}
                      </span>
                    </div>

                    <p className="mt-1 font-mono text-xs font-medium text-slate-600 dark:text-slate-300">
                      {SinglePos.period}
                      {SinglePos.duration ? ` · ${SinglePos.duration}` : ""}
                    </p>

                    <ul className="mt-3 max-w-[65ch] space-y-1.5 text-xs sm:text-[13.5px] text-pretty text-slate-700 dark:text-slate-300">
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

                    <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
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
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. PROYECTOS DESTACADOS Y ARQUITECTURA
      ===================================================================== */}
      <section id="projects" className="scroll-mt-24 space-y-6">
        <div className="space-y-2 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="max-w-[65ch] text-sm sm:text-[15px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
            {t.projects.description}
          </p>
        </div>

        <div className="space-y-10">
          {t.projects.items.map((project) => (
            <article
              key={project.id}
              className="pt-8 first:pt-0 border-t first:border-t-0 border-slate-200/80 dark:border-slate-800/80 space-y-4"
            >
              {/* Header: Title + Status Badge */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold accent-text">
                    {project.category} · {project.period}
                  </p>
                </div>
                {project.live && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {t.projects.liveBadge}
                  </span>
                )}
              </div>

              {/* Architectural System Diagram (Visual Proof) */}
              <ProjectArchitectureDiagram projectId={project.id} lang={lang} />

              {/* Description */}
              <p className="max-w-[65ch] text-xs sm:text-sm leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
                {project.description}
              </p>

              {/* Key Highlights as a Clean Bullet List */}
              <ul className="max-w-[65ch] space-y-2 pt-0.5 text-xs sm:text-[13.5px] text-pretty text-slate-700 dark:text-slate-300">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 leading-relaxed"
                  >
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
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. LICENCIAS Y CERTIFICACIONES
      ===================================================================== */}
      <section id="certifications" className="scroll-mt-24 space-y-6">
        <div className="space-y-2 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.certifications.title}
          </h2>
          <p className="max-w-[65ch] text-sm sm:text-[15px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
            {t.certifications.description}
          </p>
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
                    <span className="font-mono text-xs font-medium text-slate-600 dark:text-slate-300">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  {/* Associated Skills (Distilled inline text instead of more pill boxes) */}
                  {cert.skills && cert.skills.length > 0 && (
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                      {cert.skills.join(" · ")}
                    </p>
                  )}
                </div>

                {/* Bottom Footer Row: Quiet ID indicator + Primary Credential Link */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/70 flex items-center justify-between gap-2">
                  {cert.credentialId ? (
                    <button
                      type="button"
                      onClick={() => handleCopyCertId(cert.credentialId!)}
                      title={`${t.certifications.credentialIdLabel} ${cert.credentialId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
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
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>
                        {lang === "es" ? "Verificado" : "Verified"}
                      </span>
                    </span>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold accent-pill hover:opacity-90 transition-opacity shrink-0"
                    >
                      <span>{t.certifications.showCredential}</span>
                      <span className="text-xs leading-none">↗</span>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 accent-hover-text cursor-pointer"
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
          6. CONTACTO
      ===================================================================== */}
      <section id="contact" className="scroll-mt-24 space-y-6">
        <div className="space-y-2 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="max-w-[65ch] text-sm sm:text-[15px] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2 Top-Level Channel Cards (Flattened — no card inside card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Channel Card */}
          <div className="rounded-xl surface-card p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl accent-pill flex items-center justify-center shrink-0">
                <MailIcon className="w-4 h-4 accent-text" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {t.contact.emailLabel}
                </h3>
                <a
                  href={`mailto:${t.meta.email}`}
                  className="block font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate accent-hover-text transition-colors mt-0.5"
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
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 accent-hover-text"
              >
                <span>{t.contact.sendEmailBtn}</span>
                <span className="accent-text">↗</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Channel Card */}
          <div className="rounded-xl surface-card p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl accent-pill flex items-center justify-center shrink-0">
                <LinkedInIcon className="w-4 h-4 accent-text" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {t.contact.linkedinLabel}
                </h3>
                <a
                  href={t.meta.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate accent-hover-text transition-colors mt-0.5"
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
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg surface-badge text-xs font-semibold text-slate-800 dark:text-slate-200 accent-hover-text"
              >
                <span>{t.contact.linkedinBtn}</span>
                <span className="accent-text">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
