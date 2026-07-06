"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { futureMilestones } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";

export function FutureVision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <SectionShell
      id="future"
      label="Future"
      title="Where this goes"
      className="border-t border-white/[0.04]"
    >
      <div ref={ref} className="relative space-y-8">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-zinc-800">
          <motion.div className="w-full bg-white/30" style={{ height: progress }} />
        </div>

        {futureMilestones.map((milestone, index) => (
          <Reveal key={milestone.title} delay={index * 0.06}>
            <div className="grid gap-1 pl-8 md:grid-cols-[140px_1fr] md:gap-8">
              <p className="text-xs text-zinc-500">{milestone.year}</p>
              <div>
                <h3 className="font-medium text-white">{milestone.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
