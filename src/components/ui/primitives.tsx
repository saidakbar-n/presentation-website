import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-6", className)}>{children}</div>
  );
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-400",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function GlassCard({
  children,
  className,
  hover = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
