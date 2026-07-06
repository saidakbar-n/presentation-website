"use client";

import { useState } from "react";
import { adidasValues } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";

export function WhyAdidas() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SectionShell
      id="why-adidas"
      label="Why adidas"
      title="Values I live"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {adidasValues.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <GlassCard
              className="h-full p-5"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              data-active={hovered === item.id}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-zinc-300">{item.story}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
