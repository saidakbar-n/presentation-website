"use client";

import Image from "next/image";
import { whyGermanyNarrative } from "@/data/content";
import { SectionShell, Reveal } from "@/components/ui/motion";

export function WhyGermany() {
  const block = whyGermanyNarrative[0];

  return (
    <SectionShell
      id="why-germany"
      label="Why Germany"
      title="Engineering culture I chose"
      className="border-t border-white/[0.04]"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/switzerland-matterhorn.png"
            alt="Exchange semester in Switzerland"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <Reveal>
          <h3 className="text-xl font-semibold text-white">{block.heading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {block.body}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
