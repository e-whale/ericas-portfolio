"use client";

import { motion } from "framer-motion";

interface PastelStationeryCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function PastelStationeryCard({
  title,
  description,
  image,
}: PastelStationeryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[28px] border border-[#FFE3C3]/50 bg-[#FFFCF7] p-8 shadow-[0_8px_24px_rgba(255,200,150,0.2),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-250"
    >
      {/* Faint lined-paper texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #FFE3C3 0px, #FFE3C3 1px, transparent 1px, transparent 32px)",
        }}
      />

      {/* Pastel accent dots */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-[#FFE3C8]/60 shadow-[0_0_6px_rgba(255,227,200,0.4)]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-8 left-6 h-1 w-1 rounded-full bg-[#FFF3AF]/50 shadow-[0_0_5px_rgba(255,243,175,0.3)]"
      />

      {/* Sticky-note style image frame */}
      {image ? (
        <div className="mb-6 overflow-hidden rounded-2xl border-2 border-[#F5D5B7]/60 bg-white/80 p-2 shadow-[0_2px_8px_rgba(245,213,183,0.3)] transition-all duration-250">
          <img
            src={image}
            alt={title}
            className="h-40 w-full rounded-xl object-cover transition-all duration-250 group-hover:brightness-105"
          />
        </div>
      ) : (
        <div className="mb-6 overflow-hidden rounded-2xl border-2 border-[#F5D5B7]/60 bg-gradient-to-br from-[#FFE8CC]/40 to-[#FFF3E0]/30 p-2 shadow-[0_2px_8px_rgba(245,213,183,0.3)] transition-all duration-250 group-hover:brightness-105">
          <div className="flex h-40 items-center justify-center rounded-xl bg-white/40">
            <div className="text-sm font-medium text-gray-500">
              Project Image
            </div>
          </div>
        </div>
      )}

      {/* Pastel header label */}
      <div className="mb-4 inline-block rounded-full border border-[#FFE3C3]/60 bg-[#FFF3E0]/50 px-3 py-1 text-xs font-medium text-amber-700 shadow-[0_1px_4px_rgba(255,227,195,0.3)]">
        Featured Project
      </div>

      {/* Card content */}
      <div>
        <h3 className="mb-3 text-xl font-semibold tracking-wide text-gray-800">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>

      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#FFE8CC]/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
