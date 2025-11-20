"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@byerica.curated",
    href: "mailto:hello@byerica.curated",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@byerica.curated",
    href: "https://instagram.com/byerica.curated",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Erica Tan",
    href: "https://linkedin.com/in/ericatan",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-16">
      <div className="rpg-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          {/* Main Notice Board Panel */}
          <div className="relative">
            {/* Pin at Top */}
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="h-4 w-4 rounded-full bg-accent shadow-[0_0_16px_rgba(99,102,241,0.8),0_2px_8px_rgba(0,0,0,0.4)]">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-white/40 to-transparent" />
              </div>
            </motion.div>

            {/* Pinned Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(99,102,241,0.15),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-20px_40px_rgba(0,0,0,0.1)] backdrop-blur-lg">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 text-center"
                >
                  <h1 className="mb-4 bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    let's chat
                  </h1>
                  <p className="text-lg text-text-main/70">
                    Always open to collabs, UX conversations, design critiques,
                    or just a cozy virtual café date ☕✨
                  </p>
                </motion.div>

                {/* Decorative Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                />

                {/* Contact Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4"
                >
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70 hover:shadow-[0_0_24px_rgba(99,102,241,0.2)]"
                      >
                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 shadow-[0_0_16px_rgba(99,102,241,0.2)] transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <div className="text-sm font-medium text-text-main/60">
                            {method.label}
                          </div>
                          <div className="text-base text-text-main transition-colors group-hover:text-accent">
                            {method.value}
                          </div>
                        </div>

                        {/* External Link Arrow */}
                        <ExternalLink className="h-4 w-4 text-text-main/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-8 text-center"
                >
                  <p className="text-sm text-text-main/50">
                    I typically respond within a day or two 💌
                  </p>
                </motion.div>
              </div>

              {/* Bottom Sparkle */}
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
                className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
