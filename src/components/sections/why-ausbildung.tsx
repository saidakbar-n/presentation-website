"use client";

import { whyAusbildungNarrative } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";

export function WhyAusbildung() {
  return (
    <SectionShell
      id="why-ausbildung"
      label="Why Ausbildung"
      title="Investment, not retreat"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {whyAusbildungNarrative.map((block, index) => (
          <Reveal key={block.heading} delay={index * 0.06}>
            <GlassCard className="h-full p-6">
              <h3 className="text-base font-semibold text-white">
                {block.heading}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{block.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
