"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { philosophyPillars } from "@/data/content";
import { SectionShell } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export function EngineeringPhilosophy() {
  const [active, setActive] = useState(philosophyPillars[0].id);
  const current =
    philosophyPillars.find((p) => p.id === active) ?? philosophyPillars[0];

  return (
    <SectionShell
      id="philosophy"
      label="Philosophy"
      title="How I build"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col" role="tablist">
          {philosophyPillars.map((pillar) => (
            <button
              key={pillar.id}
              role="tab"
              aria-selected={active === pillar.id}
              onClick={() => setActive(pillar.id)}
              className={cn(
                "shrink-0 rounded-lg px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                active === pillar.id
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-white",
              )}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        <GlassCard className="p-6">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-medium text-white">{current.summary}</p>
            <p className="mt-3 text-sm text-zinc-400">{current.description}</p>
          </motion.div>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
