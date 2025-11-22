"use client";

import { motion } from "framer-motion";

interface PastelAcrylicCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function PastelAcrylicCard({
  title,
  description,
  image,
}: PastelAcrylicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[20px] border border-white/40 bg-white/70 p-8 shadow-[0_8px_32px_rgba(255,200,150,0.15),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,200,150,0.25),0_6px_20px_rgba(0,0,0,0.08)]"
    >
      {/* Soft inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-60" />

      {/* Peach-gold rim light */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#FFE8CC]/20 via-transparent to-[#FFF3E0]/15" />

      {/* Watercolor smudge corner overlay */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-radial from-[#FFF3E0]/10 via-[#FFE8CC]/5 to-transparent opacity-40 blur-2xl"
      />

      {/* Accent sparkles */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-[#FFF3AF]/60 shadow-[0_0_8px_rgba(255,243,175,0.5)]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 left-8 h-1 w-1 rounded-full bg-[#FFE8CC]/50 shadow-[0_0_6px_rgba(255,232,204,0.4)]"
      />

      {/* Soft UI inset image frame */}
      {image ? (
        <div className="mb-6 overflow-hidden rounded-xl border border-white/60 bg-white/50 p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08),0_2px_8px_rgba(255,200,150,0.2)] backdrop-blur-sm">
          <img
            src={image}
            alt={title}
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>
      ) : (
        <div className="mb-6 overflow-hidden rounded-xl border border-white/60 bg-gradient-to-br from-white/50 to-[#FFF3E0]/20 p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08),0_2px_8px_rgba(255,200,150,0.2)] backdrop-blur-sm">
          <div className="flex h-40 items-center justify-center rounded-lg bg-white/30">
            <div className="text-sm font-medium text-gray-400">
              Project Image
            </div>
          </div>
        </div>
      )}

      {/* Pastel header label */}
      <div className="mb-4 inline-block rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-amber-600 shadow-[0_1px_4px_rgba(255,227,195,0.25)] backdrop-blur-sm">
        Featured Project
      </div>

      {/* Card content */}
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-semibold tracking-wide text-gray-700">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-500">{description}</p>
      </div>

      {/* Hover bloom effect - soft glow increase */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#FFE8CC]/20 via-[#FFF3E0]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
