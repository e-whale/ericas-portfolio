"use client";

import { motion } from "framer-motion";

const questCards = [
  {
    title: "Pantry Notes – food expiry assistant",
    description: "A cozy app to track what's in your fridge before it goes bad.",
    tags: ["UX", "Research", "Case study coming soon"],
  },
  {
    title: "Second brain, but cozy",
    description: "Personal knowledge management that feels like home.",
    tags: ["Product Design", "In progress", "WIP"],
  },
  {
    title: "RPG-style portfolio (this site!)",
    description: "Building a warm, magical corner of the internet.",
    tags: ["UI Design", "Dev", "Live"],
  },
  {
    title: "Community gardening platform",
    description: "Connecting neighbors through shared green spaces.",
    tags: ["UX", "Research", "Case study"],
  },
  {
    title: "Cozy reading tracker",
    description: "Track your books without the Goodreads anxiety.",
    tags: ["Product Design", "Concept", "Coming soon"],
  },
  {
    title: "Mindful habit journal",
    description: "Daily reflections that don't feel like homework.",
    tags: ["UX", "Research", "In progress"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="rpg-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            current quests & case studies
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-main/70">
            Where my UX / product design projects live. Some are polished case
            studies, others are still brewing. All made with care ✨
          </p>
        </motion.div>

        {/* Quest Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {questCards.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.1)] backdrop-blur-lg transition-all duration-300 hover:border-accent/30 hover:bg-surface/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4),0_0_60px_rgba(99,102,241,0.2)]">
                {/* Hover Glow Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Quest Title */}
                  <h3 className="mb-3 text-xl font-semibold text-text-main transition-colors group-hover:text-accent">
                    {quest.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-text-main/70">
                    {quest.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {quest.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-all group-hover:border-accent/50 group-hover:bg-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tiny Sparkle Indicator */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="absolute right-4 top-4 h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-text-main/50">
            More case studies on the way. Building in public, one quest at a
            time 🌱
          </p>
        </motion.div>
      </div>
    </div>
  );
}
