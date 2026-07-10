"use client";

import { coreValues } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";

export function CoreValues() {
  return (
    <SectionShell
      id="values"
      label="Values"
      title="What I stand for"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <GlassCard className="h-full p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-zinc-300">{item.story}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
