"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NavItem } from "@/lib/navigation";
import { Icon } from "@/components/ui/Icon";

type MegaMenuProps = {
  item: NavItem;
  onNavigate: () => void;
};

/**
 * Desktop mega-menu panel. Rendered inside a menu region that the Header
 * controls for hover + keyboard/focus. Content is grouped into columns.
 */
export function MegaMenu({ item, onNavigate }: MegaMenuProps) {
  if (!item.columns?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-full z-dropdown w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
    >
      <div className="glass-panel rounded-3xl border border-white/60 bg-white/95 p-6 shadow-elevated backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {item.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal">
                {column.title}
              </p>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2 transition-colors hover:bg-pearl focus-visible:bg-pearl"
                    >
                      {link.icon ? (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                          <Icon name={link.icon} className="h-4 w-4" aria-hidden />
                        </span>
                      ) : null}
                      <span>
                        <span className="block text-sm font-medium text-navy">{link.label}</span>
                        {link.description ? (
                          <span className="block text-xs text-ink/60">{link.description}</span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.featured ? (
          <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-navy to-teal p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">{item.featured.title}</p>
              <p className="text-xs text-white/80">{item.featured.description}</p>
            </div>
            <Link
              href={item.featured.href}
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              {item.featured.cta}
              <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
