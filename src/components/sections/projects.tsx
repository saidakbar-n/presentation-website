"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { SectionShell } from "@/components/ui/motion";
import { GlassCard, Badge } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export function Projects() {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <SectionShell
      id="projects"
      label="Projects"
      title="Built, not demoed"
      className="border-t border-white/[0.04]"
    >
      <div className="flex flex-wrap gap-2">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActive(project.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              active === project.id
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white",
            )}
            aria-pressed={active === project.id}
          >
            {project.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8"
        >
          <GlassCard className="overflow-hidden p-6 md:p-8">
            <div className={cn("rounded-xl bg-gradient-to-br p-6", current.gradient)}>
              <p className={cn("text-xs font-medium", current.accent)}>
                {current.role}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold text-white">
                  {current.name}
                </h3>
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                  >
                    getconverza.com ↗
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-zinc-300">{current.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-400">
              <span className="text-zinc-500">Learned:</span> {current.lessons[0]}
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              <span className="text-zinc-500">Impact:</span> {current.impact}
            </p>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}
