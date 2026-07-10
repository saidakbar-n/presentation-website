"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/motion";
import { Badge } from "@/components/ui/primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        <Reveal delay={0.1}>
          <Badge className="mb-8 border-zinc-800 text-zinc-500">
            {SITE.badge}
          </Badge>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {SITE.name}
          </h1>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl">
            {SITE.role}
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl md:leading-relaxed">
            {SITE.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.65}>
          <a
            href="#journey"
            className="mt-12 inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-400"
          >
            ↓
          </a>
        </Reveal>
      </motion.div>
    </section>
  );
}
