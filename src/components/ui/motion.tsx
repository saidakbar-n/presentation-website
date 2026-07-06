"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const directionOffset = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const offset = directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({ children, className, stagger = 0.08 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface SectionShellProps {
  id: string;
  label?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  label,
  title,
  subtitle,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          {label && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {label}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">{subtitle}</p>
          )}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
