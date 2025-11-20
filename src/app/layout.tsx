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
        className={`${geistSans.variable} ${geistMono.variable} bg-bg text-text-main antialiased`}
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 100%, rgba(79, 70, 229, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            #05060F
          `,
        }}
      >
        {/* RPG-style Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-surface/70 shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.08)] backdrop-blur-md">
          <div className="rpg-container flex items-center justify-between py-4">
            {/* Brand with glowing dot */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.9),0_0_4px_rgba(99,102,241,1)]" />
              <h1 className="bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-xl font-semibold tracking-tight text-transparent">
                byerica.curated
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <div className="hidden gap-6 md:flex">
                <a
                  href="#"
                  className="text-sm font-medium text-text-main/70 transition-all duration-300 hover:text-accent-soft hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-text-main/70 transition-all duration-300 hover:text-accent-soft hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-text-main/70 transition-all duration-300 hover:text-accent-soft hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-text-main/70 transition-all duration-300 hover:text-accent-soft hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                >
                  Contact
                </a>
              </div>

              {/* Resume Button - RPG Badge Style */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full border border-accent/50 bg-accent/12 px-5 py-2 text-sm font-medium text-accent shadow-[0_0_16px_rgba(99,102,241,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-accent/70 hover:bg-accent/20 hover:shadow-[0_0_24px_rgba(99,102,241,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
