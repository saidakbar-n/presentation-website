import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-zinc-200 focus-visible:ring-white/50",
  secondary:
    "border border-zinc-700 bg-zinc-900/50 text-white hover:border-zinc-500 hover:bg-zinc-800/50 focus-visible:ring-zinc-500/50",
  ghost:
    "text-zinc-300 hover:text-white hover:bg-white/5 focus-visible:ring-white/30",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
}

export function ButtonLink({
  className,
  href,
  variant = "secondary",
  external,
  ...props
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  }

  return <Link href={href} className={classes} {...props} />;
}
