"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Briefcase, Link2, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/8 blur-[100px]" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/20"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Hero Character Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rpg-container relative z-10"
      >
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-surface/70 p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(99,102,241,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-lg">
          {/* Greeting Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight text-text-main">
              hi! i'm{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                erica
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-center"
          >
            <p className="text-lg text-text-main/70">
              designer · storyteller · cozy internet creature
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-10 h-px w-32 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />

          {/* Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {/* About Icon */}
            <Link href="/about" aria-label="Go to About page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                <User className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-text-main/60 opacity-0 transition-opacity group-hover:opacity-100">
                  about
                </div>
              </motion.div>
            </Link>

            {/* Work Icon */}
            <Link href="/work" aria-label="Go to Work page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                <Briefcase className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-text-main/60 opacity-0 transition-opacity group-hover:opacity-100">
                  work
                </div>
              </motion.div>
            </Link>

            {/* Home Icon (Links -> Home) */}
            <Link href="/" aria-label="Go to Home page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                <Link2 className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-text-main/60 opacity-0 transition-opacity group-hover:opacity-100">
                  home
                </div>
              </motion.div>
            </Link>

            {/* Contact Icon */}
            <Link href="/contact" aria-label="Go to Contact page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                <Mail className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-text-main/60 opacity-0 transition-opacity group-hover:opacity-100">
                  contact
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Tiny Sparkle Accent */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-12 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.8)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
