"use client";

import { motion } from "framer-motion";
import { SITE, DOCUMENTS } from "@/lib/constants";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { label: "CV", href: DOCUMENTS.cv, variant: "primary" as const },
  { label: "GitHub", href: SITE.github, variant: "secondary" as const },
  { label: "LinkedIn", href: SITE.linkedin, variant: "secondary" as const },
  { label: "Email", href: `mailto:${SITE.email}`, variant: "secondary" as const },
];

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.04] py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2
            id="contact-heading"
            className="text-4xl font-semibold tracking-tight text-white md:text-6xl"
          >
            Let&apos;s build the future together.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              >
                <ButtonLink
                  href={link.href}
                  variant={link.variant}
                  external
                  download={link.href.endsWith(".pdf") ? true : undefined}
                >
                  {link.label}
                </ButtonLink>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
