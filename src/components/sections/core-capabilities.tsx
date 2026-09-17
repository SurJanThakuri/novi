"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { TiltCard, AnimatedCounter } from "@/components/ui/interactive";

export function CoreCapabilities() {
  return (
    <section className="w-full py-space-lg md:py-space-xl lg:py-24 bg-surface-container-low" id="features">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="max-w-3xl mb-space-xl">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">tune</span> Core Capabilities
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-headline-lg text-[24px] leading-[30px] md:text-headline-lg md:text-[38px] md:leading-[44px] text-on-surface tracking-tight font-semibold">
              Everything stays connected to the work.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant">
              Novi keeps tasks, conversations, timelines, and project information together in a single context so you never lose momentum.
            </p>
          </FadeIn>
        </div>

        <Stagger stagger={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
          {/* Feature 1: Boards */}
          <StaggerItem>
            <TiltCard>
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">view_column</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Boards that move at your speed</h3>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Plan sprints and track tasks without hunting through bloated spreadsheets or infinite enterprise menus.
                  </p>
                </div>
                <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg">
                  <div className="flex items-center justify-between pb-2 mb-3">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Sprint Velocity</span>
                    <span className="font-mono text-[11px] text-primary font-semibold">
                      <AnimatedCounter value={18} suffix=" / 20 Done (" />{<AnimatedCounter value={90} suffix="%)" />}
                    </span>
                  </div>
                  <div className="w-full bg-surface h-2 rounded-full mb-4 overflow-hidden shadow-inner">
                    <motion.div
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <motion.div className="bg-surface p-2.5 rounded shadow-sm" whileHover={{ y: -2 }}>
                      <div className="flex items-center justify-between">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[10px] font-mono text-secondary">#NV-52</span>
                      </div>
                      <div className="font-label-md text-[13px] font-semibold text-on-surface mt-1">Audit CSS bundles</div>
                      <div className="text-[11px] text-primary mt-1 font-medium">Ready for deployment</div>
                    </motion.div>
                    <motion.div className="bg-surface p-2.5 rounded shadow-sm opacity-90" whileHover={{ y: -2 }}>
                      <div className="flex items-center justify-between">
                        <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
                        <span className="text-[10px] font-mono text-secondary">#NV-58</span>
                      </div>
                      <div className="font-label-md text-[13px] font-semibold text-on-surface mt-1">Sync client assets</div>
                      <div className="text-[11px] text-secondary mt-1">In review by Elena</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Feature 2: Threads */}
          <StaggerItem>
            <TiltCard>
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">forum</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Threads, not another inbox</h3>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Keep project conversations attached to the work itself. Say goodbye to fragmented Slack channels and lost decisions.
                  </p>
                </div>
                <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-label-sm text-[11px] font-mono text-secondary uppercase">Thread on #NV-74 • Mobile Nav</span>
                    <motion.span
                      className="font-label-sm text-[11px] bg-surface text-primary font-bold px-2 py-0.5 rounded shadow-sm cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Resolved
                    </motion.span>
                  </div>
                  <div className="bg-surface p-space-sm rounded-lg shadow-sm flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary text-[9px] font-bold flex items-center justify-center flex-shrink-0">SL</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-[12px] font-semibold text-on-surface">Sarah Lin</span>
                        <span className="text-[10px] text-secondary">10:14 AM</span>
                      </div>
                      <p className="text-[12px] text-on-surface-variant mt-0.5">Are we keeping the 0.25rem border radius across all alert chips?</p>
                    </div>
                  </div>
                  <div className="bg-surface p-space-sm rounded-lg shadow-sm flex items-start gap-2.5 ml-4">
                    <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-[9px] font-bold flex items-center justify-center flex-shrink-0">TS</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-[12px] font-semibold text-on-surface">Toby Smith</span>
                        <span className="text-[10px] text-secondary">10:18 AM</span>
                      </div>
                      <p className="text-[12px] text-on-surface-variant mt-0.5">Yes, locked in design tokens. Code sample below:</p>
                      <div className="bg-surface-container-low p-1.5 rounded mt-1.5 font-mono text-[10px] text-on-surface">
                        borderRadius: {"{ DEFAULT: \"0.125rem\", lg: \"0.25rem\" }"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Feature 3: Timeline */}
          <StaggerItem>
            <TiltCard>
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">timeline</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">One timeline for the whole team</h3>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Every deadline, release target, and milestone in one shared view without messy Gantt chart maintenance.
                  </p>
                </div>
                <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg">
                  <div className="flex items-center justify-between text-secondary font-mono text-[11px] mb-3">
                    <span>OCT 1</span>
                    <span>OCT 15</span>
                    <span>OCT 30</span>
                    <span>NOV 15</span>
                  </div>
                  <div className="space-y-2">
                    <div className="relative h-7 bg-surface rounded flex items-center px-2 overflow-hidden">
                      <motion.div
                        className="absolute left-2 h-4 bg-primary/20 rounded flex items-center px-2 text-[10px] font-mono text-primary font-bold whitespace-nowrap"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "33%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        Sprint 24 (Done)
                      </motion.div>
                    </div>
                    <div className="relative h-7 bg-surface rounded flex items-center px-2 overflow-hidden">
                      <motion.div
                        className="absolute h-4 bg-primary rounded flex items-center px-2 text-[10px] font-mono text-on-primary font-bold shadow-sm whitespace-nowrap"
                        initial={{ width: 0, left: "33%", opacity: 0 }}
                        whileInView={{ width: "50%", left: "33%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        Beta Launch Stage
                      </motion.div>
                    </div>
                    <div className="relative h-7 bg-surface rounded flex items-center px-2 overflow-hidden">
                      <motion.div
                        className="absolute h-4 bg-surface-dim rounded flex items-center px-2 text-[10px] font-mono text-on-surface whitespace-nowrap"
                        initial={{ width: 0, left: "75%", opacity: 0 }}
                        whileInView={{ width: "20%", left: "75%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        Public Release
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-secondary font-mono">
                    <motion.span
                      className="material-symbols-outlined text-primary text-[14px]"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      flag
                    </motion.span>
                    <span>Next Milestone: Design freeze in 48 hours</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Feature 4: Migration */}
          <StaggerItem>
            <TiltCard>
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">sync_alt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Works the way you already do</h3>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Import existing boards from Trello, Asana, Notion, or raw CSV spreadsheets in under 60 seconds with full context preserved.
                  </p>
                </div>
                <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Instant Migration</span>
                    <span className="font-label-sm text-[11px] text-primary font-mono font-bold">1-Click Sync</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {["Trello", "Asana", "Notion", "CSV"].map((tool, i) => (
                      <motion.div
                        key={tool}
                        className={`bg-surface p-2 rounded-lg text-center shadow-sm cursor-pointer ${i === 0 ? "ring-1 ring-primary" : ""}`}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={`font-mono font-bold text-[11px] block ${i === 0 ? "text-primary" : "text-on-surface"}`}>{tool}</span>
                        <span className="text-[9px] text-secondary">{i === 0 ? "Active" : i === 3 ? "Raw Data" : "Supported"}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="bg-surface p-2.5 rounded-lg shadow-sm mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-on-surface font-semibold flex items-center gap-1.5">
                        <motion.span
                          className="material-symbols-outlined text-primary text-[14px]"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", delay: 0.8 }}
                        >
                          check_circle
                        </motion.span>
                        Import complete: 84 tasks synced
                      </span>
                      <span className="text-primary font-bold"><AnimatedCounter value={100} suffix="%" /></span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
