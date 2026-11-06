import React from "react";

export function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="10" className="fill-slate-900 dark:fill-slate-100" />
          <path
            d="M8.5 16V8L16.5 17.5"
            className="stroke-white dark:stroke-slate-900"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M15.5 8V13"
            className="stroke-white dark:stroke-slate-900"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#0ea5e9] dark:text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
          <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#3178C6" />
          <text x="5.5" y="17" fill="#fff" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
          <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#F7DF1E" />
          <text x="6.5" y="17.5" fill="#111" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#38BDF8]" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
      );
    case "angular":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M12 2L3 5.5l1.4 11.8L12 22l7.6-4.7L21 5.5 12 2z" fill="#DD0031" />
          <path d="M12 2v20l7.6-4.7L21 5.5 12 2z" fill="#C3002F" />
          <path d="M12 5.3L7.2 16h2.1l1-2.5h3.4l1 2.5h2.1L12 5.3zm1.1 6.3h-2.2L12 8.7l1.1 2.9z" fill="#fff" />
        </svg>
      );
    case "vue":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M2 4h4l6 10.5L18 4h4L12 21 2 4z" fill="#41B883" />
          <path d="M6 4h3.5L12 8.5 14.5 4H18l-6 10.5L6 4z" fill="#35495E" />
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M4 2h16l-1.5 17L12 22l-6.5-3L4 2z" fill="#E34F26" />
          <path d="M12 4v16.2l5.2-2.4L18.4 4H12z" fill="#EF652A" />
          <path d="M7.5 7h9l-.2 2.2H9.9l.2 2.3h5.9l-.5 5.2-3.5 1-3.5-1-.2-2.7h2.2l.1 1.2 1.4.4 1.4-.4.2-1.8H7.9L7.5 7z" fill="#fff" />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M4 2h16l-1.5 17L12 22l-6.5-3L4 2z" fill="#1572B6" />
          <path d="M12 4v16.2l5.2-2.4L18.4 4H12z" fill="#33A9DC" />
          <path d="M7.5 7h9l-.5 9.5-4 1.2-4-1.2-.2-2.7h2.2l.1 1.2 1.9.5 1.9-.5.2-2.3H8l-.2-2.2h6.5l.1-1.3H7.7L7.5 7z" fill="#fff" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M8.5 3h3.5v6H8.5a3 3 0 0 1 0-6z" fill="#F24E1E" />
          <path d="M12 3h3.5a3 3 0 0 1 0 6H12V3z" fill="#FF7262" />
          <path d="M12 9h3.5a3 3 0 0 1 0 6H12V9z" fill="#1ABCFE" />
          <path d="M8.5 9H12v6H8.5a3 3 0 0 1 0-6z" fill="#A259FF" />
          <path d="M8.5 15H12v3a3 3 0 1 1-3.5-3z" fill="#0ACF83" />
        </svg>
      );
    case "prisma":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-slate-800 dark:text-sky-400" fill="currentColor">
          <path d="M19.5 16.8L12.7 2.6a1.1 1.1 0 0 0-2-.1L4.4 15.2a1.2 1.2 0 0 0 .3 1.4l5.4 4.8c.5.4 1.2.6 1.8.3l6.9-3a1.2 1.2 0 0 0 .7-1.9zm-7.3 2.5l-1.5-11 6.3 8.9-4.8 2.1z" />
        </svg>
      );
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="9" fill="#336791" />
          <path d="M9 9.5c0-1.5 6-1.5 6 0v4c0 2-1.5 3.5-3 3.5s-3-1.5-3-3.5v-4z" stroke="#fff" strokeWidth="1.5" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#00758F" />
          <path d="M6 15V9l3 4 3-4v6M15 9v6h4" stroke="#F29111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "django":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#092E20" />
          <text x="5.5" y="16.5" fill="#44B78B" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">dj</text>
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#777BB4" />
          <text x="5.2" y="14.5" fill="#fff" fontSize="6.8" fontWeight="bold" fontFamily="sans-serif">PHP</text>
        </svg>
      );
    case "axios":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#5A29E4] dark:text-[#8563ff]" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "websockets":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L4 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "rest":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "aws":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="3.5" fill="#232F3E" />
          <path d="M6.5 15c3.2 2.2 7.8 2.2 11 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.5 13.8l1.5 1.2-1.2 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="5.5" y="11.5" fill="#fff" fontSize="6.2" fontWeight="bold" fontFamily="sans-serif">AWS</text>
        </svg>
      );
    case "quicksight":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#00A1C9" />
          <path d="M7 16v-4M12 16V8M17 16v-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "jenkins":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="9" fill="#D33833" />
          <circle cx="12" cy="12" r="6" fill="#F0D6B7" />
          <path d="M10 14.5c1.2 1 2.8 1 4 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10.5" cy="11" r="1" fill="#333" />
          <circle cx="13.5" cy="11" r="1" fill="#333" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-slate-900 dark:text-white" fill="currentColor">
          <path d="M12 3l10 17H2L12 3z" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#EA4B71]" fill="none" stroke="currentColor" strokeWidth="2.1">
          <circle cx="6" cy="12" r="2.5" fill="currentColor" />
          <circle cx="18" cy="7" r="2.5" fill="currentColor" />
          <circle cx="18" cy="17" r="2.5" fill="currentColor" />
          <path d="M8.5 11L15.5 8M8.5 13L15.5 16" strokeLinecap="round" />
        </svg>
      );
    case "elevenlabs":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-slate-900 dark:text-white" fill="currentColor">
          <rect x="7" y="4" width="3.2" height="16" rx="1" />
          <rect x="13.8" y="4" width="3.2" height="16" rx="1" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-amber-500" fill="currentColor">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <rect x="12" y="2.5" width="13.5" height="13.5" rx="2" transform="rotate(45 12 2.5)" fill="#F05032" />
          <circle cx="12" cy="8.5" r="1.4" fill="#fff" />
          <circle cx="12" cy="15.5" r="1.4" fill="#fff" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-slate-800 dark:text-slate-200" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <path d="M12 2c-4.2 0-4 1.8-4 1.8V6h4.2v.7H6.2S2 6.4 2 10.7s3.6 4.1 3.6 4.1h2.1v-2c0-1.4 1.2-2.6 2.6-2.6h4.4c1.2 0 2.2-1 2.2-2.2V4.2S17.3 2 12 2z" fill="#3776AB" />
          <path d="M12 22c4.2 0 4-1.8 4-1.8V18h-4.2v-.7h6s4.2.3 4.2-4-3.6-4.1-3.6-4.1h-2.1v2c0 1.4-1.2 2.6-2.6 2.6H9.3c-1.2 0-2.2 1-2.2 2.2v3.8S6.7 22 12 22z" fill="#FFD43B" />
        </svg>
      );
    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="9.5" fill="#009688" />
          <path d="M13 5.5L7.5 13h4.2l-.7 5.5L16.5 11h-4.2L13 5.5z" fill="#fff" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#2496ED">
          <path d="M13 5h2.5v2.5H13V5zm-3 0h2.5v2.5H10V5zM7 5h2.5v2.5H7V5zm3 3h2.5v2.5H10V8zM7 8h2.5v2.5H7V8zM4 8h2.5v2.5H4V8zm9 0h2.5v2.5H13V8zm3 0h2.5v2.5H16V8zm4.8 3.2c-.5-.3-1.6-.4-2.4-.2-.2-.9-.8-1.7-1.6-2.2l-.3-.2-.2.3c-.4.6-.5 1.5-.2 2.2-.5.3-1.2.4-1.9.4H2.3c-.2 1.2-.1 2.8.6 4 1 1.7 2.8 2.5 5.4 2.5 4.5 0 7.9-2.1 9.5-5.9.7 0 2.1 0 2.8-1.3l.2-.4-.3-.2z" />
        </svg>
      );
    case "redis":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#DC382D">
          <path d="M12 3L3 7.5 12 12l9-4.5L12 3zm0 11.2L3 9.7v3.8L12 18l9-4.5V9.7l-9 4.5zm0 5.3L3 15v3.5L12 23l9-4.5V15l-9 4.5z" />
        </svg>
      );
    case "celery":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#37814A">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    default:
      return <span className="w-2.5 h-2.5 rounded-full accent-bg inline-block" />;
  }
}

export function SkillBadge({
  name,
  icon,
  compact = false,
}: {
  name: string;
  icon: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md surface-badge text-slate-800 dark:text-slate-200 font-medium select-none ${
        compact ? "px-2.5 py-1 text-[11.5px]" : "px-3 py-1.5 text-xs sm:text-[13px]"
      }`}
    >
      <SkillIcon icon={icon} />
      <span>{name}</span>
    </span>
  );
}
