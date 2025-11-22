"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Briefcase, Link2, Mail } from "lucide-react";
import PastelStationeryCard from "@/components/PastelStationeryCard";
import PastelAcrylicCard from "@/components/PastelAcrylicCard";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Soft Cloud Layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large top cloud */}
        <div className="absolute left-[10%] top-[5%] h-[300px] w-[500px] rounded-full bg-gradient-to-br from-white/40 to-transparent blur-[80px]" />

        {/* Wide horizontal cloud strip behind hero */}
        <div className="absolute left-[5%] top-[35%] h-[200px] w-[90%] rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[100px]" />

        {/* Small accent cloud */}
        <div className="absolute right-[15%] top-[20%] h-[180px] w-[350px] rounded-full bg-gradient-to-tl from-white/30 to-transparent blur-[70px]" />
      </div>

      {/* Soft Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe4d4]/20 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6d4ff]/15 blur-[100px]" />
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
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/20 bg-white/80 p-12 shadow-[0_8px_24px_rgba(255,220,185,0.3),0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          {/* Greeting Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className="text-5xl font-normal tracking-wide text-gray-700">
              hi! i'm{" "}
              <span className="relative inline-block text-gray-800">
                erica
                {/* Sparkle 1 - Top Right */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-6 -top-2 z-0 h-1.5 w-1.5 rounded-full bg-[#FFE3C8]/45 shadow-[0_0_4px_rgba(255,227,200,0.3)]"
                />
                {/* Sparkle 2 - Left Side */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.35, 0.2],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -left-5 top-1 z-0 h-1 w-1 rounded-full bg-[#FFF3AF]/40 shadow-[0_0_3px_rgba(255,243,175,0.25)]"
                />
                {/* Sparkle 3 - Bottom Left */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-1 -left-4 z-0 h-1.5 w-1.5 rounded-full bg-[#FFE3C8]/40 shadow-[0_0_4px_rgba(255,227,200,0.25)]"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-center"
          >
            <p className="text-lg font-normal tracking-wide text-gray-700 leading-relaxed">
              crafting thoughtful, delightful interfaces with warmth & intention
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-10 h-px w-32 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
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
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/60 bg-white/60 shadow-[0_4px_12px_rgba(255,227,200,0.12)] transition-all duration-300 hover:border-amber-300/80 hover:bg-white/80 hover:shadow-[0_6px_16px_rgba(255,227,200,0.2)] hover:-translate-y-1"
              >
                <User className="h-6 w-6 text-amber-600 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                  about
                </div>
              </motion.div>
            </Link>

            {/* Work Icon */}
            <Link href="/work" aria-label="Go to Work page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/60 bg-white/60 shadow-[0_4px_12px_rgba(255,227,200,0.12)] transition-all duration-300 hover:border-amber-300/80 hover:bg-white/80 hover:shadow-[0_6px_16px_rgba(255,227,200,0.2)] hover:-translate-y-1"
              >
                <Briefcase className="h-6 w-6 text-amber-600 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                  work
                </div>
              </motion.div>
            </Link>

            {/* Home Icon (Links -> Home) */}
            <Link href="/" aria-label="Go to Home page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/60 bg-white/60 shadow-[0_4px_12px_rgba(255,227,200,0.12)] transition-all duration-300 hover:border-amber-300/80 hover:bg-white/80 hover:shadow-[0_6px_16px_rgba(255,227,200,0.2)] hover:-translate-y-1"
              >
                <Link2 className="h-6 w-6 text-amber-600 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                  home
                </div>
              </motion.div>
            </Link>

            {/* Contact Icon */}
            <Link href="/contact" aria-label="Go to Contact page">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/60 bg-white/60 shadow-[0_4px_12px_rgba(255,227,200,0.12)] transition-all duration-300 hover:border-amber-300/80 hover:bg-white/80 hover:shadow-[0_6px_16px_rgba(255,227,200,0.2)] hover:-translate-y-1"
              >
                <Mail className="h-6 w-6 text-amber-600 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                  contact
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Tiny Sparkle Accent */}
          <motion.div
            animate={{
              opacity: [0.25, 0.4, 0.25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-12 h-1.5 w-1.5 rounded-full bg-[#FFE3C8] shadow-[0_0_5px_rgba(255,227,200,0.35)]"
          />
        </div>
      </motion.div>
    </div>

    {/* Featured Work Section */}
    <section className="relative z-10 mt-20 md:mt-36 w-full pb-20">
        <div className="rpg-container">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 md:mb-12 text-center text-3xl font-semibold tracking-wide text-gray-700"
          >
            featured work
          </motion.h2>

          {/* Cards Grid */}
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="hover:shadow-[0_12px_32px_rgba(255,180,120,0.25)]"
            >
              <PastelStationeryCard
                title="Project Name 1"
                description="A short and sweet description goes here."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="hover:shadow-[0_12px_32px_rgba(255,180,120,0.25)]"
            >
              <PastelStationeryCard
                title="Project Name 2"
                description="A short and sweet description goes here."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Card Styles Section */}
      <section className="w-full mt-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
          preview card styles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          <PastelStationeryCard
            title="Stationery Card"
            description="Soft diary-style pastel card design."
          />

          <PastelAcrylicCard
            title="Acrylic Card"
            description="Dreamy frosted acrylic pastel card design."
          />
        </div>
      </section>
    </>
  );
}
