"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { MagneticButton } from "@/components/ui/interactive";

const INTEGRATIONS = [
  { name: "Figma", icon: "palette", description: "Embed design previews and sync token updates directly into tasks." },
  { name: "GitHub", icon: "code", description: "Link pull requests to tickets and track merge status in real time." },
  { name: "Slack", icon: "chat", description: "Get task updates and thread replies delivered to your channels." },
  { name: "Notion", icon: "description", description: "Import existing docs and wikis with full formatting preserved." },
  { name: "Linear", icon: "flag", description: "Two-way sync for issues, labels, and sprint assignments." },
  { name: "Google Drive", icon: "folder_open", description: "Attach files and preview documents without leaving the board." },
];

export function Integrations() {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-surface-container" id="integrations">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <FadeIn>
          <div className="bg-surface rounded-xl p-space-lg md:p-space-xl shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg border-b border-surface-variant">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Seamless Connections</span>
                <h3 className="font-headline-lg text-[24px] leading-[30px] md:text-headline-lg text-on-surface font-semibold mt-1">Plugs into your existing stack.</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Novi integrates with the tools your team already uses, so nothing gets lost in transition.</p>
              </div>
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <motion.span
                  className="font-mono text-[12px] bg-surface-container px-3 py-1.5 rounded-lg text-on-surface"
                  whileHover={{ scale: 1.05 }}
                >
                  12+ integrations
                </motion.span>
              </div>
            </div>

            <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop mt-space-lg">
              {INTEGRATIONS.map((tool) => (
                <StaggerItem key={tool.name}>
                  <MagneticButton
                    as="a"
                    href="#"
                    strength={0.08}
                    className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group text-left"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow"
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="material-symbols-outlined text-[22px]">{tool.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">{tool.name}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">{tool.description}</p>
                    </div>
                  </MagneticButton>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
