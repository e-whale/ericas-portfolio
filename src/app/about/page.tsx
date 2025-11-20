"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Design", level: 90 },
  { label: "Research brain", level: 85 },
  { label: "Storytelling", level: 95 },
  { label: "Cozy vibes", level: 100 },
  { label: "Systems thinking", level: 80 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="rpg-container">
        {/* Two-Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Character Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              about erica
            </h1>

            <div className="space-y-6 text-lg leading-relaxed text-text-main/80">
              <p>
                Hi! I'm Erica—a designer, storyteller, and self-proclaimed cozy
                internet creature. I spend my days crafting thoughtful UX and
                product experiences that feel warm, intentional, and just a
                little bit magical. I believe the best design doesn't just solve
                problems—it creates moments of delight and makes people feel
                seen.
              </p>

              <p>
                I care deeply about softness over sterility, vibes over
                perfection, and building things that feel human. Whether I'm
                designing systems, writing case studies, or worldbuilding tiny
                digital corners, I'm always thinking about how to make
                technology feel a little more like home. I love research,
                storytelling, and finding the patterns that connect everything
                together.
              </p>

              <p className="text-base italic text-text-main/60">
                Currently: designing cozy digital experiences, building in
                public, and forever tinkering with personal projects that make
                the internet feel friendlier 🌱✨
              </p>
            </div>
          </motion.div>

          {/* Right Side: Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-surface/70 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(99,102,241,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-lg">
              {/* Panel Header */}
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                />
                <h2 className="text-xl font-semibold text-text-main">
                  Character Stats
                </h2>
              </div>

              {/* Stats List */}
              <div className="space-y-5">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {/* Label */}
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main/90">
                        {stat.label}
                      </span>
                      <span className="text-xs text-accent">
                        {stat.level}%
                      </span>
                    </div>

                    {/* Bar Container */}
                    <div className="relative h-2.5 overflow-hidden rounded-full bg-surface/50 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]">
                      {/* Filled Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.6 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                      >
                        {/* Inner Glow */}
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-white/30 to-transparent" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Sparkle */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-8 text-center text-xs text-text-main/50"
              >
                stats are vibes-based and subject to change ✨
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <p className="mt-6 text-sm text-text-main/50">
            Want to chat? Find me in the Contact section 💌
          </p>
        </motion.div>
      </div>
    </div>
  );
}
