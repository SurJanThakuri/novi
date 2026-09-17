"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { TiltCard } from "@/components/ui/interactive";

const TEAMS = [
  {
    stage: "Stage 01",
    title: "Startups",
    icon: "rocket_launch",
    description:
      "Move from idea to shipped product with zero bureaucratic drag. Lightweight weekly sprints, executive transparency, and instant bug triage.",
    feature: "Weekly roadmap templates",
  },
  {
    stage: "Stage 02",
    title: "Agencies & Studios",
    icon: "palette",
    description:
      "Share clean client progress boards, centralize design feedback, and track deliverable milestones without messy email threads and forgotten links.",
    feature: "Guest client permissions",
  },
  {
    stage: "Stage 03",
    title: "Product & Design",
    icon: "devices",
    description:
      "Connect design specifications and user stories directly to engineering tickets with native Figma precision and synchronized status flags.",
    feature: "Token inspection & PR links",
  },
];

export function Teams() {
  return (
    <section className="w-full py-space-lg md:py-space-xl lg:py-24" id="teams">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">groups</span> Tailored Workflows
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-headline-lg text-[24px] leading-[30px] md:text-headline-lg md:text-[38px] md:leading-[44px] text-on-surface tracking-tight font-semibold">
              Built for teams that move quickly.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant">
              Crafted to remove friction for studios and product squads who value clarity over enterprise bureaucracy.
            </p>
          </FadeIn>
        </div>

        <Stagger stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {TEAMS.map((team) => (
            <StaggerItem key={team.title}>
              <TiltCard>
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm mb-space-md"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="material-symbols-outlined text-[26px]">{team.icon}</span>
                    </motion.div>
                    <span className="font-label-sm text-label-sm uppercase font-mono text-primary font-semibold">{team.stage}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">{team.title}</h3>
                    <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-surface-variant flex items-center gap-2 text-secondary font-label-sm text-label-sm">
                    <motion.span
                      className="material-symbols-outlined text-primary text-[16px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.5 }}
                    >
                      check
                    </motion.span>
                    {team.feature}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
