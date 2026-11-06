import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Oriana Méndez — Front-End Developer y Analista de Datos",
  description:
    "Portfolio y CV de Oriana Méndez. Front-End Developer (React, Next.js, Tailwind CSS), Integración de IA (n8n, ElevenLabs) y Analista de Datos (AWS QuickSight, SQL).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white`}
      >
        {/* Architectural Dot-Grid Canvas for depth in Light & Dark mode */}
        <div className="canvas-backdrop" aria-hidden="true" />

        <AppProvider>
          <Navbar />
          <CommandPalette />
          <main className="flex-1 w-full max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
