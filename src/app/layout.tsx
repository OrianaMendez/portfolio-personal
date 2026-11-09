import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#090c14" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-personal-rho-five.vercel.app"),
  title: "Oriana Méndez — Front-End Developer y Analista de Datos",
  description:
    "Portafolio y CV de Oriana Méndez. +4 años de experiencia como Front-End Developer (React, Next.js, Tailwind CSS), Integración de IA (Python, FastAPI, n8n, ElevenLabs) y Analista de Datos (AWS QuickSight, SQL).",
  openGraph: {
    title: "Oriana Méndez — Front-End Developer y Analista de Datos",
    description:
      "Especialista en React y Next.js con +4 años de experiencia construyendo aplicaciones web, integraciones de IA en tiempo real y paneles de inteligencia de negocios en AWS.",
    url: "https://portfolio-personal-rho-five.vercel.app",
    siteName: "Oriana Méndez — Portafolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oriana Méndez — Front-End Developer y Analista de Datos",
    description:
      "Especialista en React y Next.js con +4 años de experiencia en aplicaciones web, IA y Business Intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=(t==='light'||t==='dark')?t:'dark';var el=document.documentElement;if(d==='dark'){el.classList.add('dark');el.style.colorScheme='dark';}else{el.classList.remove('dark');el.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col antialiased selection:bg-[var(--accent)] selection:text-white`}
      >
        {/* Accessible Skip Link (taste-skill skip-link & focus-ring rule) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[var(--accent)] focus:text-white focus:font-semibold focus:shadow-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>

        {/* Architectural Dot-Grid Canvas for depth in Light & Dark mode */}
        <div className="canvas-backdrop" aria-hidden="true" />

        <AppProvider>
          <Navbar />
          <CommandPalette />
          <main
            id="main-content"
            className="flex-1 w-full max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14"
          >
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
