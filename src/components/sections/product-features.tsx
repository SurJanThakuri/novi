"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

const TABS = [
  { id: "board", label: "Board View", icon: "view_kanban" },
  { id: "list", label: "List & Details", icon: "checklist" },
  { id: "timeline", label: "Team Timeline", icon: "view_timeline" },
  { id: "notes", label: "Threaded Notes", icon: "description" },
] as const;

const tabContent: Record<string, ReactNode> = {
  board: (
    <div className="p-space-sm md:p-space-lg grid grid-cols-1 md:grid-cols-4 gap-gutter md:gap-gutter-desktop overflow-x-auto">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs font-label-sm text-label-sm font-semibold text-secondary uppercase tracking-wider">
          <span>To Do</span>
          <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">2</span>
        </div>
        <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg shadow-sm transition-all cursor-pointer">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-tertiary uppercase">Copy</span>
            <span className="font-mono">#NV-101</span>
          </div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface">Finalize homepage copy</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Review hero pitch and feature headlines with marketing team.</p>
          <div className="flex items-center justify-between mt-space-sm pt-space-xs text-secondary font-body-sm text-body-sm">
            <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 22</span>
            <span className="w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[9px] flex items-center justify-center font-bold">MK</span>
          </div>
        </div>
        <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg shadow-sm transition-all cursor-pointer">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-secondary uppercase">Brand</span>
            <span className="font-mono">#NV-104</span>
          </div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface">Brand illustration guidelines</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Define vector style, terracotta highlight usage, and export presets.</p>
          <div className="flex items-center justify-between mt-space-sm pt-space-xs text-secondary font-body-sm text-body-sm">
            <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[14px]">attach_file</span> 4 SVGs</span>
            <span className="w-5 h-5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[9px] flex items-center justify-center font-bold">AL</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs font-label-sm text-label-sm font-semibold text-primary uppercase tracking-wider">
          <span>In Progress</span>
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-mono font-bold">2</span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-md ring-1 ring-primary/20 relative overflow-hidden cursor-pointer">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1 pl-1">
            <span className="font-semibold text-primary uppercase">Engineering</span>
            <span className="font-mono">#NV-98</span>
          </div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface pl-1">Review mobile layouts</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 pl-1">Assigned to Elena R. Ensure all navigation transitions render at 60fps.</p>
          <div className="flex items-center justify-between mt-space-sm pt-space-xs pl-1 text-secondary font-body-sm text-body-sm">
            <span className="flex items-center gap-1 text-[11px] text-primary font-semibold"><span className="material-symbols-outlined text-[14px]">warning</span> Due tomorrow</span>
            <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[9px] flex items-center justify-center font-bold">ER</span>
          </div>
        </div>
        <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg shadow-sm transition-all cursor-pointer">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-secondary uppercase">Product</span>
            <span className="font-mono">#NV-102</span>
          </div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface">Update pricing section</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Implement monthly vs annual toggle with automated discount calculation.</p>
          <div className="flex items-center justify-between mt-space-sm pt-space-xs text-secondary font-body-sm text-body-sm">
            <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[14px]">task_alt</span> 3/4 tasks</span>
            <span className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container text-[9px] flex items-center justify-center font-bold">TS</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs font-label-sm text-label-sm font-semibold text-secondary uppercase tracking-wider">
          <span>In Review</span>
          <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">1</span>
        </div>
        <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg shadow-sm transition-all cursor-pointer">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-tertiary uppercase">QA &amp; Release</span>
            <span className="font-mono">#NV-91</span>
          </div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface">Prepare launch checklist</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">DNS cutover schedule, CDN caching rule flush, error tracker hookups.</p>
          <div className="flex items-center justify-between mt-space-sm pt-space-xs text-secondary font-body-sm text-body-sm">
            <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span> 3 comments</span>
            <span className="font-mono text-[10px] bg-surface px-1.5 py-0.5 rounded shadow-sm text-on-surface">PR #142</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs font-label-sm text-label-sm font-semibold text-secondary uppercase tracking-wider">
          <span>Done</span>
          <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">2</span>
        </div>
        <div className="bg-surface-container-low p-space-md rounded-lg shadow-sm opacity-75">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-secondary line-through">Dev Ops</span>
            <span className="material-symbols-outlined text-primary text-[14px]">check_circle</span>
          </div>
          <h4 className="font-label-md text-label-md font-medium text-secondary line-through">Setup Tailwind tokens</h4>
          <p className="font-body-sm text-body-sm text-secondary/70 mt-1">Mapped Space Grotesk and Geist fonts with custom semantic theme classes.</p>
          <div className="mt-space-sm pt-space-xs text-[10px] text-secondary">
            Merged by Sarah Lin • 3h ago
          </div>
        </div>
        <div className="bg-surface-container-low p-space-md rounded-lg shadow-sm opacity-75">
          <div className="flex items-center justify-between text-secondary font-label-sm text-[11px] mb-1">
            <span className="font-semibold text-secondary line-through">Design</span>
            <span className="material-symbols-outlined text-primary text-[14px]">check_circle</span>
          </div>
          <h4 className="font-label-md text-label-md font-medium text-secondary line-through">Responsive audit</h4>
          <p className="font-body-sm text-body-sm text-secondary/70 mt-1">Checked on ultra-wide 4k and mobile Safari devices.</p>
          <div className="mt-space-sm pt-space-xs text-[10px] text-secondary">
            Approved by Toby Smith • 5h ago
          </div>
        </div>
      </div>
    </div>
  ),
  list: (
    <div className="p-space-sm md:p-space-lg">
      <div className="flex flex-col divide-y divide-surface-variant">
        <div className="py-space-sm flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <input defaultChecked className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
            <div>
              <div className="font-label-md text-label-md font-semibold text-secondary line-through">Setup Tailwind semantic tokens</div>
              <div className="font-body-sm text-body-sm text-secondary">Tokens mapped to architect paper palette</div>
            </div>
          </div>
          <span className="bg-surface-container px-2 py-0.5 rounded font-label-sm text-label-sm text-secondary">Done</span>
        </div>
        <div className="py-space-sm flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <input className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
            <div>
              <div className="font-label-md text-label-md font-semibold text-on-surface">Review mobile layouts</div>
              <div className="font-body-sm text-body-sm text-secondary">Ensure drawer transitions are smooth at 60fps</div>
            </div>
          </div>
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">In Progress</span>
        </div>
        <div className="py-space-sm flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <input className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
            <div>
              <div className="font-label-md text-label-md font-semibold text-on-surface">Prepare launch checklist</div>
              <div className="font-body-sm text-body-sm text-secondary">CDN cache warmup &amp; domain cutover</div>
            </div>
          </div>
          <span className="bg-surface-container px-2 py-0.5 rounded font-label-sm text-label-sm text-secondary">In Review</span>
        </div>
      </div>
    </div>
  ),
  timeline: (
    <div className="p-space-sm md:p-space-lg overflow-x-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm font-mono pb-2">
          <span>OCTOBER WEEK 4</span>
          <span>NOVEMBER WEEK 1</span>
          <span>NOVEMBER WEEK 2</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-32 font-label-sm text-label-sm text-on-surface font-semibold truncate">Design Tokens</span>
            <div className="flex-1 bg-surface-container-low h-6 rounded-md relative overflow-hidden">
              <div className="absolute left-0 top-1 bottom-1 w-2/5 bg-primary/20 rounded text-primary font-mono text-[10px] flex items-center px-2 font-bold">100% Complete</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-32 font-label-sm text-label-sm text-on-surface font-semibold truncate">Mobile Views</span>
            <div className="flex-1 bg-surface-container-low h-6 rounded-md relative overflow-hidden">
              <div className="absolute left-1/4 top-1 bottom-1 w-1/2 bg-primary rounded text-on-primary font-mono text-[10px] flex items-center px-2 font-bold shadow-sm">In Flight (Due Oct 28)</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-32 font-label-sm text-label-sm text-on-surface font-semibold truncate">Public Launch</span>
            <div className="flex-1 bg-surface-container-low h-6 rounded-md relative overflow-hidden">
              <div className="absolute left-3/4 top-1 bottom-1 w-1/5 bg-secondary rounded text-on-secondary font-mono text-[10px] flex items-center px-2">Planned Nov 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  notes: (
    <div className="p-space-sm md:p-space-lg">
      <div className="w-full bg-surface-container-low p-space-md rounded-lg">
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary font-bold mb-2">
          <span className="material-symbols-outlined text-[16px]">edit_document</span> Product Decisions Memo
        </div>
        <p className="font-body-md text-body-md text-on-surface">
          We decided to strip away heavy shadow elevations in favor of precise 1px borders and warm drafting board backgrounds. This reduces visual clutter and keeps attention fixed strictly on tasks and discussions.
        </p>
        <div className="mt-3 text-secondary font-body-sm text-[12px] flex items-center gap-2">
          <span>Recorded by Toby Smith</span>
          <span>•</span>
          <span>Signed off by design lead Elena</span>
        </div>
      </div>
    </div>
  ),
};

export function ProductFeatures() {
  const [activeTab, setActiveTab] = useState("board");

  return (
    <section className="w-full py-space-lg md:py-space-xl lg:py-24" id="demo-preview">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">widgets</span> Product Architecture
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-headline-lg text-[24px] leading-[30px] md:text-headline-lg md:text-[38px] md:leading-[44px] text-on-surface tracking-tight font-semibold">
              One workspace. Zero context switching.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant">
              A unified canvas where tasks, real-time discussions, and project timelines live seamlessly side-by-side without context switching.
            </p>
          </FadeIn>
        </div>

        {/* Tab Switcher */}
        <FadeIn delay={0.3}>
          <div className="mt-space-lg flex items-center gap-space-xs overflow-x-auto pb-2">
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-surface-container text-primary font-semibold shadow-sm"
                    : "hover:bg-surface-container-low text-on-surface-variant"
                }`}
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Tab Content */}
        <FadeIn delay={0.4}>
          <div className="mt-space-md w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden transition-all duration-300 mx-auto">
            {/* Project Header */}
            <div className="p-space-sm md:p-space-md bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm md:gap-space-md">
              <div className="flex items-center gap-space-sm md:gap-space-md">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold shadow-sm">
                  W
                </div>
                <div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Website Redesign 2026</h3>
                    <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-1.5 md:px-2 py-0.5 rounded font-medium">Sprint 12</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary hidden sm:block">Target ship date: October 28 • Lead: Toby Smith</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="flex items-center -space-x-2 overflow-hidden">
                  <div className="inline-block h-6 w-6 md:h-7 md:w-7 rounded-full bg-primary text-on-primary text-[9px] md:text-[10px] font-bold flex items-center justify-center ring-2 ring-surface">ER</div>
                  <div className="inline-block h-6 w-6 md:h-7 md:w-7 rounded-full bg-secondary text-on-secondary text-[9px] md:text-[10px] font-bold flex items-center justify-center ring-2 ring-surface">SL</div>
                  <div className="inline-block h-6 w-6 md:h-7 md:w-7 rounded-full bg-tertiary-container text-on-tertiary text-[9px] md:text-[10px] font-bold flex items-center justify-center ring-2 ring-surface">TS</div>
                  <div className="inline-block h-6 w-6 md:h-7 md:w-7 rounded-full bg-surface-container-highest text-on-surface text-[9px] md:text-[10px] font-bold flex items-center justify-center ring-2 ring-surface">+4</div>
                </div>
                <button className="bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider px-space-sm md:px-space-md py-1.5 md:py-2 rounded-lg shadow-sm transition-colors flex items-center gap-1 font-semibold" type="button">
                  <span className="material-symbols-outlined text-[14px] md:text-[16px]">share</span> <span className="hidden sm:inline">Share Board</span>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
