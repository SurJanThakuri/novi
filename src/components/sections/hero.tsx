"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import { MagneticButton } from "@/components/ui/interactive";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const mockupRotateX = useSpring(useTransform(smoothY, [-0.5, 0.5], [3, -3]), springConfig);
  const mockupRotateY = useSpring(useTransform(smoothX, [-0.5, 0.5], [-3, 3]), springConfig);

  const pill1X = useSpring(useTransform(smoothX, [-0.5, 0.5], [-15, 15]), springConfig);
  const pill1Y = useSpring(useTransform(smoothY, [-0.5, 0.5], [-10, 10]), springConfig);

  const pill2X = useSpring(useTransform(smoothX, [-0.5, 0.5], [20, -20]), springConfig);
  const pill2Y = useSpring(useTransform(smoothY, [-0.5, 0.5], [-12, 12]), springConfig);

  const pill3X = useSpring(useTransform(smoothX, [-0.5, 0.5], [-12, 12]), springConfig);
  const pill3Y = useSpring(useTransform(smoothY, [-0.5, 0.5], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-20 md:pt-space-xl pb-space-lg md:pb-28 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient Canvas Gradient Glows */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-primary/5 via-tertiary-fixed/20 to-transparent pointer-events-none -z-10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute top-36 -right-20 w-80 h-80 rounded-full bg-primary-fixed/30 filter blur-2xl pointer-events-none -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div
        className="absolute top-72 -left-20 w-72 h-72 rounded-full bg-secondary-container/40 filter blur-3xl pointer-events-none -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop flex flex-col items-center text-center">
        {/* Announcement Badge */}
        <FadeIn delay={0.1} direction="down">
          <motion.div
            className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-low shadow-sm mb-space-lg group cursor-pointer hover:bg-surface-container transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
              ✦ Novi 2.0 is live
            </span>
            <span className="hidden sm:inline text-secondary font-label-sm text-label-sm">— Built for fast-moving teams</span>
            <span className="material-symbols-outlined text-[14px] text-secondary group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="font-display-lg text-[26px] leading-[32px] md:text-display-lg-mobile lg:text-display-lg md:leading-[1.1] text-on-surface max-w-4xl tracking-tight">
            Run your team without the{" "}
            <span className="text-primary relative inline-block">
              tab switching
              <motion.svg
                className="absolute left-0 -bottom-1.5 w-full h-2 text-primary/30"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              >
                <motion.path
                  d="M0 6C50 1 150 1 200 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </motion.svg>
            </span>.
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.35}>
          <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Novi brings tasks, docs, and conversations into one calm workspace built for boutique studios, design consultancies, and independent software teams.
          </p>
        </FadeIn>

        {/* CTA Row */}
        <FadeIn delay={0.45}>
          <div className="mt-space-md md:mt-space-lg flex flex-col sm:flex-row items-center justify-center gap-space-sm md:gap-space-md w-full sm:w-auto">
            <MagneticButton
              as="a"
              href="#demo-preview"
              strength={0.15}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-3 rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
            >
              <span>Start free</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#demo-preview"
              strength={0.06}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md px-space-lg py-3 rounded-lg shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              <span>See how it works</span>
            </MagneticButton>
          </div>
        </FadeIn>

        {/* Trust Badges */}
        <FadeIn delay={0.55}>
          <div className="mt-space-sm md:mt-space-md flex flex-wrap items-center justify-center gap-x-space-sm md:gap-x-space-md gap-y-1 font-body-sm text-body-sm text-secondary">
            {["Free 14-day trial", "No credit card required", "2-minute setup"].map((item, i) => (
              <span key={item} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-surface-dim mr-1.5">•</span>}
                <span className="material-symbols-outlined text-primary text-[15px]">check_circle</span> {item}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Hero Mockup Container with Parallax */}
        <ScaleIn delay={0.3} className="mt-space-lg md:mt-space-xl w-full max-w-6xl relative">
          {/* Floating Pill 1 */}
          <motion.div
            className="hidden lg:flex items-center gap-space-sm absolute -top-6 -left-6 z-20 bg-surface-container-lowest text-on-surface p-space-sm pl-3 pr-space-md rounded-xl shadow-xl"
            style={{ x: pill1X, y: pill1Y }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
          >
            <div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <div className="text-left">
              <div className="font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                <span>Task complete: Design Tokens v2</span>
                <motion.span
                  className="text-primary font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  +24 XP
                </motion.span>
              </div>
              <div className="font-body-sm text-body-sm text-secondary">Updated 12m ago • Elena R.</div>
            </div>
          </motion.div>

          {/* Floating Pill 2 */}
          <motion.div
            className="hidden lg:flex items-center gap-space-sm absolute top-12 -right-8 z-20 bg-surface-container-lowest text-on-surface p-space-sm px-space-md rounded-xl shadow-xl max-w-xs text-left"
            style={{ x: pill2X, y: pill2Y }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
          >
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-label-md text-label-md font-semibold text-on-surface flex-shrink-0">
              SL
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label-md text-label-md font-semibold truncate">Sarah Lin</span>
                <span className="font-body-sm text-body-sm text-secondary flex-shrink-0">2m ago</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                💬 &ldquo;Staging looks clean! Pushing to production.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Floating Pill 3 */}
          <motion.div
            className="hidden lg:flex items-center gap-space-md absolute -bottom-6 -left-4 z-20 bg-surface-container-lowest text-on-surface p-space-sm px-space-md rounded-xl shadow-xl"
            style={{ x: pill3X, y: pill3Y }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md font-semibold">Sprint Velocity</span>
                <span className="font-label-sm text-label-sm text-primary font-bold">94% on track</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-24 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                  />
                </div>
                <span className="font-body-sm text-body-sm text-secondary">4 days left</span>
              </div>
            </div>
          </motion.div>

          {/* Main Window Chrome with Parallax */}
          <motion.div
            className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden text-left"
            style={{
              rotateX: mockupRotateX,
              rotateY: mockupRotateY,
              transformPerspective: 1200,
            }}
          >
            <div className="h-11 bg-surface-container-low px-space-md flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-3 h-3 rounded-full bg-[#ec6a5e] inline-block shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                />
                <motion.span
                  className="w-3 h-3 rounded-full bg-[#f4bf4f] inline-block shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                />
                <motion.span
                  className="w-3 h-3 rounded-full bg-[#61c554] inline-block shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                />
              </div>
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary">folder_open</span>
                <span className="font-semibold text-on-surface">Studio Monolith</span>
                <span className="text-secondary">/</span>
                <span>Website Redesign Q3</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-semibold">Sprint 04</span>
                <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">NV</div>
              </div>
            </div>

            <div className="grid grid-cols-12 min-h-[440px] bg-surface-container-lowest">
              {/* Left Pane */}
              <div className="hidden md:flex md:col-span-3 lg:col-span-2 bg-surface-container-low flex-col justify-between p-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <div className="px-2 py-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Spaces</div>
                  {[
                    { name: "Website Redesign", active: true, color: "bg-primary" },
                    { name: "Brand Refresh Q3", active: false },
                    { name: "Mobile App Sprint", active: false },
                    { name: "Client Portal API", active: false },
                  ].map((space) => (
                    <motion.button
                      key={space.name}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg font-label-md text-label-md text-left transition-colors ${
                        space.active ? "bg-surface font-semibold shadow-sm text-on-surface" : "hover:bg-surface-container text-on-surface-variant"
                      }`}
                      type="button"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`w-2 h-2 rounded-full ${space.active ? "bg-primary" : "bg-surface-dim"}`} />
                      <span className="truncate">{space.name}</span>
                    </motion.button>
                  ))}
                </div>
                <div className="p-2 bg-surface rounded-lg shadow-sm">
                  <div className="font-label-sm text-label-sm font-semibold text-on-surface">Weekly Milestone</div>
                  <div className="text-[11px] text-secondary mt-0.5">Stage 3 review at 4:30 PM</div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Center Stage */}
              <div className="col-span-12 md:col-span-9 lg:col-span-7 p-space-md flex flex-col justify-between overflow-x-auto">
                <div>
                  <div className="flex items-center justify-between pb-space-sm mb-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Sprint Backlog</span>
                      <span className="bg-surface-container font-label-sm text-label-sm px-2 py-0.5 rounded text-on-surface-variant font-medium">18 Active</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <motion.button
                        className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors"
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="material-symbols-outlined text-[14px]">tune</span> Filter
                      </motion.button>
                      <motion.button
                        className="px-2 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1 shadow-sm"
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span> New Task
                      </motion.button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    {/* To Do Column */}
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="flex items-center justify-between pb-2 font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        <span>To Do</span>
                        <span className="bg-surface px-1.5 py-0.5 rounded text-[10px]">3</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { tag: "Design", color: "text-primary", id: "#NV-82", title: "Finalize homepage copy", time: "2d", avatar: "MK", avatarBg: "bg-secondary-fixed text-on-secondary-fixed" },
                          { tag: "Assets", color: "text-secondary", id: "#NV-89", title: "Brand illustration guidelines", files: "4", avatar: "AL", avatarBg: "bg-tertiary-fixed text-on-tertiary-fixed" },
                        ].map((task) => (
                          <motion.div
                            key={task.id}
                            className="bg-surface p-2.5 rounded shadow-sm cursor-grab"
                            whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                            whileTap={{ scale: 0.98 }}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.1}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`font-label-sm text-label-sm font-semibold ${task.color}`}>{task.tag}</span>
                              <span className="text-[11px] text-secondary font-mono">{task.id}</span>
                            </div>
                            <p className="font-label-md text-label-md text-on-surface font-medium mt-1">{task.title}</p>
                            <div className="flex items-center justify-between mt-2 pt-2 text-secondary">
                              <span className="font-body-sm text-[11px] flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">{task.time ? "schedule" : "attach_file"}</span> {task.time || task.files}
                              </span>
                              <div className={`w-5 h-5 rounded-full ${task.avatarBg} text-[9px] flex items-center justify-center font-bold`}>{task.avatar}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* In Progress Column */}
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="flex items-center justify-between pb-2 font-label-sm text-label-sm text-primary uppercase font-semibold">
                        <span>In Progress</span>
                        <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px]">2</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <motion.div
                          className="bg-surface p-2.5 rounded shadow-md relative overflow-hidden ring-1 ring-primary/20 cursor-grab"
                          whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(170,48,21,0.12)" }}
                          whileTap={{ scale: 0.98 }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.1}
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                          <div className="flex items-center justify-between pl-1">
                            <span className="font-label-sm text-label-sm text-primary font-bold">Dev &amp; UI</span>
                            <span className="text-[11px] text-secondary font-mono">#NV-74</span>
                          </div>
                          <p className="font-label-md text-label-md text-on-surface font-semibold mt-1 pl-1">Review mobile layouts</p>
                          <div className="flex items-center justify-between mt-2 pt-2 pl-1 text-secondary">
                            <span className="font-body-sm text-[11px] text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px]">event</span> Due tomorrow
                            </span>
                            <div className="w-5 h-5 rounded-full bg-primary text-on-primary text-[9px] flex items-center justify-center font-bold">ER</div>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-surface p-2.5 rounded shadow-sm cursor-grab"
                          whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                          whileTap={{ scale: 0.98 }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.1}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-secondary font-semibold">Pricing</span>
                            <span className="text-[11px] text-secondary font-mono">#NV-85</span>
                          </div>
                          <p className="font-label-md text-label-md text-on-surface font-medium mt-1">Update pricing tier grid</p>
                          <div className="flex items-center justify-between mt-2 pt-2 text-secondary">
                            <span className="font-body-sm text-[11px]">3 checklist items</span>
                            <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container text-[9px] flex items-center justify-center font-bold">TS</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* In Review Column */}
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="flex items-center justify-between pb-2 font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        <span>In Review</span>
                        <span className="bg-surface px-1.5 py-0.5 rounded text-[10px]">2</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <motion.div
                          className="bg-surface p-2.5 rounded shadow-sm cursor-grab"
                          whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Deploy</span>
                            <span className="text-[11px] text-secondary font-mono">#NV-63</span>
                          </div>
                          <p className="font-label-md text-label-md text-on-surface font-medium mt-1">Prepare launch checklist</p>
                          <div className="flex items-center justify-between mt-2 pt-2 text-secondary">
                            <span className="font-body-sm text-[11px] flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">chat_bubble</span> 3</span>
                            <span className="text-[10px] font-mono bg-surface-container px-1 py-0.5 rounded">PR #142</span>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-surface p-2.5 rounded shadow-sm opacity-80"
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant line-through">Audit</span>
                            <span className="material-symbols-outlined text-primary text-[14px]">check_circle</span>
                          </div>
                          <p className="font-label-md text-label-md text-secondary line-through mt-1">Responsive audit</p>
                          <div className="flex items-center justify-between mt-2 pt-2 text-secondary">
                            <span className="text-[10px] text-secondary">Done 1h ago</span>
                            <div className="w-5 h-5 rounded-full bg-surface-dim text-on-surface text-[9px] flex items-center justify-center font-bold">ER</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-body-sm text-body-sm border-t border-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Syncing in real time • Studio socket connected</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
                    <span>LATENCY 18ms</span>
                    <span>•</span>
                    <span>US-EAST</span>
                  </div>
                </div>
              </div>

              {/* Right Pane - Discussion */}
              <div className="hidden lg:flex lg:col-span-3 bg-surface-container-low flex-col justify-between p-space-sm">
                <div>
                  <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-secondary">Context Discussion</span>
                    <span className="text-[11px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">#NV-74</span>
                  </div>
                  <div className="font-headline-sm text-[15px] font-semibold text-on-surface mb-2">Review mobile layouts</div>
                  <div className="flex flex-col gap-space-sm overflow-y-auto max-h-72 pr-1">
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary text-on-primary text-[10px] font-semibold flex items-center justify-center flex-shrink-0">ER</div>
                      <div className="bg-surface p-2 rounded-lg text-left shadow-sm flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] font-bold text-on-surface">Elena Ramos</span>
                          <span className="text-[10px] text-secondary">10:41 AM</span>
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-snug">
                          Adjusted spacing on the responsive navigation drawer. Check token overrides.
                        </p>
                        <div className="mt-1.5 inline-flex items-center gap-1 bg-surface-container px-1.5 py-0.5 rounded text-[10px] font-mono text-on-surface">
                          <span className="material-symbols-outlined text-[12px]">code</span> space-margin: 1.5rem
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-semibold flex items-center justify-center flex-shrink-0">TS</div>
                      <div className="bg-surface p-2 rounded-lg text-left shadow-sm flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] font-bold text-on-surface">Toby Smith</span>
                          <span className="text-[10px] text-secondary">10:48 AM</span>
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-snug">
                          Tested on Safari iOS and Chromium. Looks pixel-sharp.
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          <motion.span
                            className="bg-surface-container px-1.5 py-0.5 rounded text-[10px] text-on-surface font-semibold flex items-center gap-1 cursor-pointer"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(170,48,21,0.1)" }}
                            whileTap={{ scale: 0.9 }}
                          >
                            🚀 2
                          </motion.span>
                          <motion.span
                            className="bg-surface-container px-1.5 py-0.5 rounded text-[10px] text-on-surface font-semibold flex items-center gap-1 cursor-pointer"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(170,48,21,0.1)" }}
                            whileTap={{ scale: 0.9 }}
                          >
                            👍 3
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="pt-space-sm">
                  <div className="relative flex items-center">
                    <input
                      className="w-full bg-surface text-on-surface font-body-sm text-[12px] px-2.5 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-low placeholder:text-secondary pr-8 transition-all"
                      placeholder="Write a reply..."
                      readOnly
                      type="text"
                      defaultValue="Pushed latest commit..."
                    />
                    <motion.button
                      className="absolute right-1.5 p-1 text-primary hover:text-primary-container"
                      type="button"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScaleIn>
      </div>
    </section>
  );
}
