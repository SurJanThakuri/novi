"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion";
import { MagneticButton } from "@/components/ui/interactive";

export function CTA() {
  return (
    <section className="w-full py-space-lg md:py-space-xl lg:py-28 bg-surface" id="cta">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <FadeIn>
          <div className="relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg lg:p-space-xl text-center shadow-xl overflow-hidden">
            {/* Ambient Warm Gradients */}
            <motion.div
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-fixed/20 filter blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-tertiary-fixed/30 filter blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  <span className="material-symbols-outlined text-[16px]">speed</span> Momentum Guaranteed
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="font-display-lg text-[26px] leading-[32px] md:text-display-lg-mobile lg:text-[38px] lg:leading-[44px] text-on-surface tracking-tight font-semibold">
                  Less switching. More shipping.
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                  Bring your team&apos;s work into one calm workspace. Set up your first project board in less than two minutes.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
                  <MagneticButton
                    as="a"
                    href="#"
                    strength={0.15}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-xl py-3 rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all font-semibold"
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
              <FadeIn delay={0.5}>
                <div className="mt-space-md flex flex-wrap items-center justify-center gap-x-space-md gap-y-space-xs font-body-sm text-body-sm text-secondary">
                  <span>No credit card required</span>
                  <span>•</span>
                  <span>Instant team invite</span>
                  <span>•</span>
                  <span>Free migration from any tool</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
