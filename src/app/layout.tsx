import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "byerica.curated – portfolio",
  description: "Erica's cozy RPG-style portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
        style={{
          background: `linear-gradient(to bottom, #FFFDF8 0%, #FFE1C4 50%, #D7EFFF 100%)`,
        }}
      >
        {/* RPG-style Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/40 bg-[#FFFCF7]/90 backdrop-blur-sm">
          <div className="rpg-container flex items-center justify-between py-4">
            {/* Brand with glowing dot */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-amber-300 shadow-[0_0_6px_rgba(252,211,77,0.5)]" />
              <h1 className="text-xl font-semibold tracking-tight text-gray-800">
                byerica.curated
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <div className="hidden gap-6 md:flex">
                <a
                  href="#"
                  className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F9C8A0] after:to-[#ffdab9] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F9C8A0] after:to-[#ffdab9] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F9C8A0] after:to-[#ffdab9] after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </a>
                <a
                  href="#"
                  className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F9C8A0] after:to-[#ffdab9] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </a>
              </div>

              {/* Resume Button - RPG Badge Style */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full border border-gray-300/60 bg-white/80 px-5 py-2 text-sm font-medium text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-amber-300/80 hover:bg-amber-50/80 hover:text-gray-800 hover:shadow-[0_4px_12px_rgba(251,191,36,0.15)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="rpg-container min-h-[calc(100vh-200px)] py-12">
          {children}
        </main>

        {/* RPG-style Footer */}
        <footer className="mt-20 w-full border-t border-white/5 bg-surface/30 backdrop-blur-sm">
          <div className="rpg-container py-8">
            <div className="flex flex-col items-center gap-2 text-center text-sm text-text-main/40">
              <p>© {currentYear} Erica.</p>
              <p className="text-xs">Built in public · WIP forever.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
