"use client";

import Image from "next/image";
import { personalInterests } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export function PersonalInterests() {
  return (
    <SectionShell
      id="interests"
      label="Beyond code"
      title="Personal"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personalInterests.map((interest, index) => (
          <Reveal key={interest.id} delay={index * 0.04}>
            <GlassCard className="group h-full overflow-hidden" hover={false}>
              {interest.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className={cn(
                      "transition-transform duration-700 group-hover:scale-[1.03]",
                      interest.imageClassName ?? "object-cover",
                    )}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-semibold text-white">
                      {interest.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      {interest.description}
                    </p>
                  </div>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
