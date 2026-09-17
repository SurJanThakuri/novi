"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_PRODUCT, FOOTER_COMPANY, FOOTER_RESOURCES, FOOTER_LEGAL } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

const footerSections = [
  { title: "PRODUCT", links: FOOTER_PRODUCT },
  { title: "COMPANY", links: FOOTER_COMPANY },
  { title: "RESOURCES", links: FOOTER_RESOURCES },
  { title: "LEGAL", links: FOOTER_LEGAL },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop pt-space-xl pb-space-lg">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter-desktop mb-space-xl">
            <div className="lg:col-span-2 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Novi</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Project management without the noise.
              </p>
              <div className="mt-space-md">
                <h4 className="font-headline-sm text-[15px] font-semibold text-on-surface mb-space-xs">
                  Stay in the loop.
                </h4>
              <form className="flex items-center gap-space-xs max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-secondary px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[0_1px_2px_rgba(43,38,37,0.04)]"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider px-space-md py-space-sm rounded-lg transition-colors whitespace-nowrap"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-space-sm">
              <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
                {section.links.map((link) => (
                  <li key={link.label} className="hover:text-on-surface transition-colors">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <p className="font-body-sm text-body-sm text-secondary text-center sm:text-left">
              &copy; 2026 Novi. All rights reserved.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-x-space-lg gap-y-space-xs">
              <Link href="#" className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">Twitter / X</Link>
              <Link href="#" className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">GitHub</Link>
              <Link href="#" className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors">LinkedIn</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
