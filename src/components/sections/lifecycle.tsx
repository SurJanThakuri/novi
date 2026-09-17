"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { AnimatedCounter, TiltCard } from "@/components/ui/interactive";

const STAGES = [
  { id: 1, label: "Stage 01", title: "Spec & Ideation", description: "Live collaborative briefs with auto-extracted task tickets.", icon: "description" },
  { id: 2, label: "Stage 02", title: "Sprint Execution", description: "Kanban cards synced with active Git branches and PR statuses.", icon: "view_kanban" },
  { id: 3, label: "Stage 03", title: "Async Review & Polish", description: "In-line design approvals, video walk-throughs & token sign-offs.", icon: "rate_review" },
  { id: 4, label: "Stage 04", title: "Release & Retrospective", description: "Instant automated changelogs with metric attribution.", icon: "rocket_launch" },
];

export function Lifecycle() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="w-full py-space-lg md:py-24 lg:py-28 bg-surface-container-low border-t border-b border-surface-variant relative overflow-hidden" id="workflow-lifecycle">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-space-md md:flex-row md:items-end justify-between mb-space-lg md:mb-space-xl">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                <span className="material-symbols-outlined text-[16px]">autorenew</span> Integrated Lifecycle
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-headline-lg text-[24px] leading-[30px] md:text-headline-lg md:leading-[36px] lg:text-[40px] lg:leading-[46px] text-on-surface tracking-tight font-semibold">
                How Fast Teams Flow Through Novi
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A single fluid loop from initial spec to production deployment. Eliminate handoff friction and lost context across product, design, and engineering.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} className="flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-surface px-space-md py-2 rounded-lg border-surface-variant shadow-sm text-secondary font-mono text-[12px]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>100% Context Retained</span>
            </div>
          </FadeIn>
        </div>

        {/* 4 Lifecycle Stage Selector Cards */}
        <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md mb-space-md md:mb-space-lg">
          {STAGES.map((stage) => (
            <StaggerItem key={stage.id}>
              <motion.div
                onClick={() => setActiveStage(stage.id)}
                className={`p-space-md rounded-xl cursor-pointer transition-all ${
                  activeStage === stage.id
                    ? "bg-surface shadow-md ring-1 ring-primary"
                    : "bg-surface/70 hover:bg-surface shadow-sm ring-1 ring-surface-variant hover:shadow-md"
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="flex items-center justify-between mb-space-sm">
                  <span className={`font-mono text-[11px] uppercase px-2 py-0.5 rounded ${
                    activeStage === stage.id
                      ? "font-bold text-primary bg-primary/10"
                      : "font-semibold text-secondary bg-surface-container"
                  }`}>
                    {stage.label}
                  </span>
                  <span className={`material-symbols-outlined text-[20px] ${
                    activeStage === stage.id ? "text-primary" : "text-secondary"
                  }`}>
                    {stage.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[16px] font-semibold text-on-surface">{stage.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{stage.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Interactive Showcase Viewport Box */}
        <FadeIn delay={0.2}>
          <div className="bg-surface rounded-xl shadow-xl border-surface-variant overflow-hidden p-space-md md:p-space-lg lg:p-space-xl">
            <AnimatePresence mode="wait">
              {activeStage === 1 && (
                <motion.div
                  key="stage1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center"
                >
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[12px] font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[15px]">edit_note</span> REAL-TIME SPEC CANVAS
                      </div>
                      <h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        Draft product specifications where tasks generate themselves.
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                        Write product specs alongside your team without bouncing between Google Docs and Jira. Any checklist item can be converted into an engineering ticket with a single shortcut.
                      </p>
                      <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-sm border-t border-surface-variant">
                        <div>
                          <div className="font-headline-sm text-headline-sm text-primary font-bold"><AnimatedCounter value={0} suffix=" Tabs" /></div>
                          <div className="font-body-sm text-body-sm text-secondary">Switched during spec review</div>
                        </div>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">&lt; <AnimatedCounter value={30} suffix="s" /></div>
                          <div className="font-body-sm text-body-sm text-secondary">From doc line to kanban card</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg flex items-center gap-space-sm font-mono text-[11px] text-secondary">
                      <span className="bg-surface-container px-2 py-1 rounded text-on-surface">⌘K</span>
                      <span>Extract task tickets from doc</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md md:p-space-lg border-surface-variant shadow-inner">
                    <div className="bg-surface rounded-lg p-space-md shadow-sm">
                      <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant mb-space-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          <span className="font-headline-sm text-[15px] font-semibold text-on-surface">RFC #108: Mobile Responsive Navigation</span>
                        </div>
                        <div className="flex items-center -space-x-1.5">
                          <div className="w-6 h-6 rounded-full bg-primary text-on-primary text-[9px] font-bold flex items-center justify-center ring-1 ring-surface">ER</div>
                          <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-[9px] font-bold flex items-center justify-center ring-1 ring-surface">TS</div>
                          <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary text-[9px] font-bold flex items-center justify-center ring-1 ring-surface">SL</div>
                        </div>
                      </div>
                      <div className="space-y-3 font-body-sm text-[13px] text-on-surface-variant">
                        <p className="leading-relaxed">
                          The mobile navigation header requires a tactile drawer slide-over with a 240ms cubic bezier curve. It must support gesture dismissal on iOS devices.
                        </p>
                        <div className="p-space-sm rounded-lg bg-surface-container-lowest border-surface-variant space-y-2">
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px] text-primary">check_box</span>
                              <span className="font-medium text-on-surface">Tokenize drawer padding variables</span>
                            </div>
                            <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">#NV-74 Linked</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px] text-primary">check_box</span>
                              <span className="font-medium text-on-surface">Implement touch drag-to-dismiss gesture</span>
                            </div>
                            <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">#NV-75 Linked</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px] text-secondary">check_box_outline_blank</span>
                              <span className="text-secondary">VoiceOver accessibility labels review</span>
                            </div>
                            <span className="font-mono text-[10px] text-secondary bg-surface px-2 py-0.5 rounded">Press ⌘Enter to Ticket</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 bg-primary text-on-primary px-2 py-0.5 rounded text-[11px] shadow-sm">
                          <span className="material-symbols-outlined text-[12px]">near_me</span>
                          <span className="font-mono">Elena R. editing...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStage === 2 && (
                <motion.div
                  key="stage2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center"
                >
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[12px] font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[15px]">commit</span> SPRINT TO COMMIT TRACEABILITY
                      </div>
                      <h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        Branch, build, and deploy without leaving your task card.
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                        Engineers see associated pull requests, preview URLs, and CI check status directly inside the card. Every commit updates the ticket status automatically.
                      </p>
                      <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-sm border-t border-surface-variant">
                        <div>
                          <div className="font-headline-sm text-headline-sm text-primary font-bold">Live Sync</div>
                          <div className="font-body-sm text-body-sm text-secondary">GitHub &amp; GitLab webhooks</div>
                        </div>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold"><AnimatedCounter value={48} suffix="ms" /></div>
                          <div className="font-body-sm text-body-sm text-secondary">Status propagation latency</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg flex items-center gap-space-sm font-mono text-[11px] text-secondary">
                      <span className="bg-surface-container px-2 py-1 rounded text-on-surface">G then B</span>
                      <span>Go to active sprint board</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md md:p-space-lg border-surface-variant shadow-inner">
                    <div className="bg-surface rounded-lg p-space-md shadow-sm border-l-4 border-primary">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-mono text-[11px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">#NV-74 • IN PROGRESS</span>
                        <span className="font-mono text-[11px] text-secondary">feat/mobile-nav-tokens</span>
                      </div>
                      <h5 className="font-headline-sm text-[16px] font-semibold text-on-surface">Review mobile navigation layouts</h5>
                      <div className="mt-space-md p-space-sm rounded bg-surface-container-low space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-on-surface flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-primary">call_merge</span> PR #142: Mapped navigation tokens
                          </span>
                          <span className="text-primary font-bold">Checks Passed</span>
                        </div>
                        <div className="flex items-center justify-between text-secondary">
                          <span className="truncate">Preview URL: https://stg-novi-nv74.preview.dev</span>
                          <span className="material-symbols-outlined text-[14px] text-primary cursor-pointer">open_in_new</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStage === 3 && (
                <motion.div
                  key="stage3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center"
                >
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[12px] font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[15px]">thumb_up</span> TACTILE DESIGN SIGNOFF
                      </div>
                      <h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        Approve design tokens and interactive previews asynchronously.
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                        Attach quick screencasts, inspect token diffs, and sign off on micro-interactions in a dedicated thread that stays linked to the pull request.
                      </p>
                      <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-sm border-t border-surface-variant">
                        <div>
                          <div className="font-headline-sm text-headline-sm text-primary font-bold"><AnimatedCounter value={100} suffix="%" /></div>
                          <div className="font-body-sm text-body-sm text-secondary">Figma token synchronization</div>
                        </div>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Async</div>
                          <div className="font-body-sm text-body-sm text-secondary">No meeting required for approvals</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg flex items-center gap-space-sm font-mono text-[11px] text-secondary">
                      <span className="bg-surface-container px-2 py-1 rounded text-on-surface">⌘K Jump</span>
                      <span>Review requests pending your approval</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md md:p-space-lg border-surface-variant shadow-inner">
                    <div className="bg-surface rounded-lg p-space-md shadow-sm space-y-3">
                      <div className="flex items-center justify-between pb-space-xs border-b border-surface-variant">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">ER</div>
                          <span className="font-label-md text-label-md font-semibold text-on-surface">Elena Ramos requested review</span>
                        </div>
                        <span className="font-mono text-[10px] text-secondary">4m ago</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        &ldquo;Updated navigation drawer background token to <code className="font-mono bg-surface-container px-1 py-0.5 rounded text-primary text-[11px]">surface-container-low</code> (#f5f3ee). Please check live video comparison:&rdquo;
                      </p>
                      <div className="bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                          </div>
                          <div>
                            <div className="font-label-sm text-label-sm font-semibold text-on-surface">Drawer-Interaction-60fps.mp4</div>
                            <div className="font-body-sm text-[11px] text-secondary">0:14 • 1080p WebM</div>
                          </div>
                        </div>
                        <motion.button
                          className="bg-primary text-on-primary px-space-md py-1.5 rounded font-label-sm text-label-sm font-semibold shadow-sm hover:bg-primary-container transition-colors"
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Approve Token
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStage === 4 && (
                <motion.div
                  key="stage4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center"
                >
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[12px] font-semibold mb-space-sm">
                        <span className="material-symbols-outlined text-[15px]">celebration</span> AUTO-GENERATED RELEASE NOTES
                      </div>
                      <h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        Release to production and publish client changelogs in one click.
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                        When you close the sprint milestone, Novi gathers merged pull requests, closed specs, and designer credits into customer-ready release notes.
                      </p>
                      <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-sm border-t border-surface-variant">
                        <div>
                          <div className="font-headline-sm text-headline-sm text-primary font-bold">Auto-Draft</div>
                          <div className="font-body-sm text-body-sm text-secondary">Zero manual changelog writing</div>
                        </div>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">1-Click</div>
                          <div className="font-body-sm text-body-sm text-secondary">Push to public status page</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg flex items-center gap-space-sm font-mono text-[11px] text-secondary">
                      <span className="bg-surface-container px-2 py-1 rounded text-on-surface">G then R</span>
                      <span>Open project release manager</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md md:p-space-lg border-surface-variant shadow-inner">
                    <div className="bg-surface rounded-lg p-space-md shadow-sm space-y-3">
                      <div className="flex items-center justify-between pb-space-xs border-b border-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-primary font-bold text-[12px] bg-primary/10 px-2 py-0.5 rounded">v2.4.0 RELEASED</span>
                          <span className="font-label-md text-label-md font-semibold text-on-surface">October Milestone Ship</span>
                        </div>
                        <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                      </div>
                      <div className="space-y-2 font-body-sm text-[12px] text-on-surface-variant">
                        <div className="font-semibold text-on-surface text-[13px]">Shipped in this sprint:</div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>Responsive drawer navigation with tokenized 8px rhythm (#NV-74)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>New pricing comparison table with automated annual discount toggle (#NV-102)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>High-performance canvas sync engine upgrade to 18ms latency</span>
                        </div>
                      </div>
                      <div className="pt-space-sm border-t border-surface-variant flex items-center justify-between">
                        <span className="text-[11px] text-secondary font-mono">Contributors: Elena R., Toby S., Sarah L.</span>
                        <motion.button
                          className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-1 rounded text-label-sm font-semibold transition-colors flex items-center gap-1 font-mono text-[11px]"
                          type="button"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="material-symbols-outlined text-[14px]">public</span> Share Changelog
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
