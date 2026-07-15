"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { mainNav } from "@/lib/navigation";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { SearchDialog } from "./SearchDialog";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const langs = ["EN", "ES", "FR", "AR", "ZH"];

  return (
    <>
      {/* ── Urgent bar — deep teal solid ── */}
      <div style={{ background: "#07576F" }}>
        <div className="container-page flex items-center justify-between gap-4 py-2 text-xs sm:text-sm">
          <p className="hidden items-center gap-2 sm:flex">
            <Icon name="heart-pulse" className="h-4 w-4" style={{ color: "#EEAA25" }} aria-hidden />
            <span className="text-white/80">Compassionate cancer care, coordinated around you.</span>
          </p>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <Link
              href="/urgent-care"
              className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-white"
              style={{ color: "#F4C958" }}
            >
              <Icon name="phone" className="h-4 w-4" aria-hidden />
              Urgent: <span className="tabular-nums">+91 90000 00006</span>
            </Link>
            <Link
              href="/patient-resources"
              className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
            >
              <Icon name="user" className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">Patient Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header
        className={cn(
          "sticky top-0 z-header transition-all duration-300",
          scrolled
            ? "glass-panel border-b"
            : "border-b"
        )}
        style={scrolled ? {
          borderBottomColor: "rgba(7,87,111,0.12)"
        } : {
          background: "rgba(237,243,246,0.90)",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          borderBottomColor: "rgba(212,226,234,0.80)"
        }}
      >
        <nav aria-label="Primary" className="container-page">
          <div className="flex h-[68px] items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pratham Cancer Hospital home">
              {/* Logo circle — brand gradient */}
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #07576F, #0A80A8)",
                  boxShadow: "0 4px 14px rgba(7,87,111,0.40), inset 0 1px 0 rgba(255,255,255,0.20)"
                }}
              >
                <Logo className="h-5 w-5 text-white" />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight" style={{ color: "#07576F" }}>Pratham</span>
                <span
                  className="text-[0.58rem] font-semibold uppercase tracking-[0.20em]"
                  style={{ color: "#EEAA25" }}
                >
                  Cancer Hospital
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {mainNav.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onFocus={() => handleEnter(item.label)}
                    onClick={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:text-teal-deep"
                    )}
                    style={{
                      color: openMenu === item.label ? "#07576F" : "#536D7C",
                      background: openMenu === item.label ? "#F0F5F8" : "transparent",
                      boxShadow: openMenu === item.label ? "3px 3px 10px rgba(173,197,210,0.55), -2px -2px 8px rgba(255,255,255,0.90)" : "none"
                    }}
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      className={cn("h-3.5 w-3.5 transition-transform duration-200", openMenu === item.label && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <MegaMenu item={item} onNavigate={() => setOpenMenu(null)} />
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li>
                <Link
                  href="/find-a-doctor"
                  className="rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200"
                  style={{ color: "#536D7C" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#07576F"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#536D7C"; }}
                >
                  Find a Doctor
                </Link>
              </li>
            </ul>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/60"
                style={{ color: "#07576F" }}
              >
                <Icon name="search" className="h-4 w-4" aria-hidden />
              </button>

              <div className="relative">
                <label className="sr-only" htmlFor="lang-select">Select language</label>
                <select
                  id="lang-select"
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="cursor-pointer appearance-none rounded-full py-2 pl-3 pr-7 text-sm font-medium bg-transparent transition-colors"
                  style={{ color: "#536D7C" }}
                >
                  {langs.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <Icon
                  name="globe"
                  className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
                  style={{ color: "#EEAA25" }}
                  aria-hidden
                />
              </div>

              {/* Book Appointment — brand gradient CTA exactly as reference */}
              <Link href="/book-appointment" className="btn-brand btn-sm">
                Book Appointment
                <Icon name="arrow-right" className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-1 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
                style={{ color: "#07576F" }}
              >
                <Icon name="search" className="h-5 w-5" aria-hidden />
              </button>
              <Link href="/book-appointment" className="btn-brand btn-sm">
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
                style={{ color: "#07576F" }}
              >
                <Icon name="menu" className="h-6 w-6" aria-hidden />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
