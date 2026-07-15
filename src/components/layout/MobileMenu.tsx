"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/lib/navigation";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Full-screen accessible mobile navigation drawer with accordion sections.
 * - Escape closes
 * - Focus is trapped while open
 * - Body scroll locked while open
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousActive?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-drawer lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-warm-white shadow-elevated"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <span className="text-lg font-bold text-navy">
                PRATHAM
              </span>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-pearl text-navy transition-colors hover:bg-ink/10"
              >
                <Icon name="x" className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
              <ul className="space-y-2">
                {mainNav.map((item) => {
                  const isOpen = expanded === item.label;
                  return (
                    <li key={item.label} className="rounded-2xl bg-pearl/60">
                      <button
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-semibold text-navy"
                      >
                        {item.label}
                        <Icon
                          name="chevron-down"
                          className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4 px-4 pb-4">
                              {item.columns?.map((column) => (
                                <div key={column.title}>
                                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-teal">
                                    {column.title}
                                  </p>
                                  <ul>
                                    {column.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          onClick={onClose}
                                          className="block rounded-xl px-3 py-3 text-sm text-ink/80 transition-colors hover:bg-white hover:text-navy"
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-ink/10 px-5 py-4">
              <Button href="/book-appointment" className="w-full" onClick={onClose}>
                Book an Appointment
              </Button>
              <a
                href="tel:+15550102000"
                className="flex items-center justify-center gap-2 rounded-full border border-coral/40 bg-coral/10 px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-coral/20"
              >
                <Icon name="phone" className="h-4 w-4 text-coral" aria-hidden />
                Urgent Help · +1 (555) 010-2000
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
