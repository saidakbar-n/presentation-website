"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeySteps } from "@/data/content";
import { SectionShell } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

function JourneyCard({
  step,
  index,
}: {
  step: (typeof journeySteps)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.03} direction={isEven ? "left" : "right"}>
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className={isEven ? "md:text-right" : "md:order-3 md:text-left"}>
          <GlassCard className="p-5 md:p-6">
            <p className="text-xs text-zinc-500">
              {step.year} · {step.subtitle}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{step.description}</p>
            {step.image && (
              <div className="relative mt-4 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            )}
          </GlassCard>
        </div>

        <div className="hidden md:flex md:order-2 md:items-center">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>

        <div className={isEven ? "md:order-3" : "md:order-1"} />
      </div>
    </Reveal>
  );
}

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionShell
      id="journey"
      label="Journey"
      title="Path to adidas"
    >
      <div ref={containerRef} className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-zinc-800 md:block">
          <motion.div
            className="w-full bg-white/30"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-8 md:space-y-12">
          {journeySteps.map((step, index) => (
            <JourneyCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
