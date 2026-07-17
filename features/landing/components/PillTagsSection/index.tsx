"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileText, 
  Terminal, 
  Rocket, 
  GitPullRequest, 
  Wrench 
} from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

function PillReveal({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      className="grow flex"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Pill({
  label,
  icon: Icon,
  bg,
  text,
  iconBg,
  iconColor,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
  text: string;
  iconBg: string;
  iconColor?: string;
}) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`h-20 w-full grow flex items-center gap-4 px-8 rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform min-w-0 ${text}`}
    >
      <div className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
        <Icon className={`size-5 ${iconColor || text}`} />
      </div>
      <span className="text-2xl font-medium truncate">{label}</span>
    </div>
  );
}

export function PillTagsSection() {
  const { theme } = useTheme();
  const sectionBg = theme === "light" ? "bg-slate-50" : "bg-black";

  return (
    <section className={`${sectionBg} pb-24 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-3 lg:gap-5">
        <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-4">
          <PillReveal delay={0.3}>
            <Pill 
              label="Konsultasi" 
              icon={MessageSquare} 
              bg="#D0C9B9" 
              text="text-neutral-900" 
              iconBg="bg-black/5" 
            />
          </PillReveal>
          <PillReveal delay={0.4}>
            <Pill 
              label="Penawaran" 
              icon={FileText} 
              bg="#131113" 
              text="text-white" 
              iconBg="bg-white/10" 
            />
          </PillReveal>
          <PillReveal delay={0.5}>
            <Pill 
              label="Pengerjaan" 
              icon={Terminal} 
              bg="#F7C8FF" 
              text="text-neutral-900" 
              iconBg="bg-black/5" 
            />
          </PillReveal>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-4">
          <PillReveal delay={0.4}>
            <Pill 
              label="Go Live" 
              icon={Rocket} 
              bg="#131113" 
              text="text-white" 
              iconBg="bg-white/10" 
            />
          </PillReveal>
          <PillReveal delay={0.5}>
            <Pill 
              label="Revisi" 
              icon={GitPullRequest} 
              bg="#131113" 
              text="text-white" 
              iconBg="bg-white/10" 
            />
          </PillReveal>
          <PillReveal delay={0.6}>
            <Pill 
              label="Maintenance" 
              icon={Wrench} 
              bg="#81FFBD" 
              text="text-neutral-900" 
              iconBg="bg-black/5" 
            />
          </PillReveal>
        </div>
      </div>
    </section>
  );
}

export default PillTagsSection;

