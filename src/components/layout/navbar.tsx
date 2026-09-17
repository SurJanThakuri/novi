"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: isScrolled ? "rgba(251, 249, 244, 0.92)" : "rgba(251, 249, 244, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: isScrolled ? "0 1px 8px rgba(43,38,37,0.06)" : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-14 md:h-16 max-w-7xl mx-auto px-margin md:px-margin-desktop flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-md">
            <Link href="/" className="flex items-center gap-space-sm focus:outline-none">
              <motion.span
                className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Novi
              </motion.span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-space-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-space-md">
            <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-md py-space-sm transition-colors">
              Log in
            </Link>
            <motion.a
              href="#"
              className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-[0_1px_3px_rgba(43,38,37,0.08)] hover:shadow-[0_4px_12px_rgba(170,48,21,0.25)] active:scale-[0.98] transition-all"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Start free
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-space-sm">
            <motion.button
              aria-label="Toggle Navigation Menu"
              className="p-space-xs text-on-surface hover:text-primary transition-colors focus:outline-none"
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="material-symbols-outlined text-[24px]"
                animate={{ rotate: isMobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileOpen ? "close" : "menu"}
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              className="absolute top-14 md:top-16 right-0 left-0 bg-surface/95 backdrop-blur-xl shadow-xl border-b border-surface-variant"
              initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "top" }}
            >
              <div className="px-margin py-space-md flex flex-col gap-space-xs">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg px-space-md py-space-sm transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-space-sm mt-space-xs border-t border-surface-variant flex flex-col gap-space-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="#"
                    className="block font-label-md text-label-md text-on-surface-variant hover:text-on-surface text-center py-space-sm transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Log in
                  </Link>
                  <a
                    href="#"
                    className="block bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md text-center py-space-sm rounded-lg shadow-sm transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Start free
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
