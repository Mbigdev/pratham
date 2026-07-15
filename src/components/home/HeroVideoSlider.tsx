"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { CareSearchPanel } from "./CareSearchPanel";
import Link from "next/link";

type Slide = {
  eyebrow: string;
  before: string;   // text before the highlighted word
  highlight: string; // the gradient-colored word
  after: string;    // text after the highlighted word
  body: string;
  theme: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Advanced Oncology · Compassionate Care",
    before: "Fighting ",
    highlight: "Cancer",
    after: " with Precision & Heart.",
    body: "At Pratham Cancer Hospital, world-class oncologists, cutting-edge technology and a deeply human touch come together to give every patient the best chance at a longer, brighter life.",
    theme: "Compassionate precision care",
  },
  {
    eyebrow: "World-Class Oncology Technology",
    before: "Precision tools, guided by people who ",
    highlight: "Care.",
    after: "",
    body: "From molecular diagnostics to image-guided therapy, our technology helps target cancer while protecting what matters most — you.",
    theme: "Advanced cancer technology",
  },
  {
    eyebrow: "A Second Set of Expert Eyes",
    before: "Confidence in your plan, when it matters ",
    highlight: "Most.",
    after: "",
    body: "Our specialists review your case carefully and help you understand every option before you decide.",
    theme: "Expert second opinions",
  },
];

const AUTO_INTERVAL = 7000;

export function HeroVideoSlider() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((_prev) => (next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [reduceMotion, paused]);

  const active = slides[index];

  return (
    <section
      aria-label="Welcome to Pratham Cancer Hospital"
      className="relative isolate overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20"
      style={{ background: "#EDF3F6" }}
    >
      {/* ── Background atmosphere orbs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-atmosphere" aria-hidden />
      <div
        className="orb-teal -z-10"
        style={{ width: 600, height: 600, top: "-10%", left: "-8%" }}
        aria-hidden
      />
      <div
        className="orb-gold -z-10"
        style={{ width: 400, height: 400, top: "5%", right: "-5%" }}
        aria-hidden
      />

      <div className="container-page relative flex flex-col justify-center">
        {/* ── Two-column hero layout (Exactly as step 161) ── */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">

          {/* ════ LEFT: TEXT CONTENT ════ */}
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Eyebrow badge — exact reference site style */}
                <span
                  className="badge-teal mb-4 inline-flex"
                  style={{ fontSize: "0.75rem" }}
                >
                  <Icon name="sparkles" className="h-3.5 w-3.5" aria-hidden />
                  {active.eyebrow}
                </span>

                {/* Main headline — exact reference site: "Fighting Cancer with Precision & Heart."
                    where "Cancer" gets the brand gradient color */}
                <h1
                  className="text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]"
                  style={{ color: "#07576F" }}
                >
                  {active.before}
                  <span className="text-gradient-brand">{active.highlight}</span>
                  {active.after}
                </h1>

                <p
                  className="mt-5 max-w-lg text-base leading-relaxed"
                  style={{ color: "#536D7C" }}
                >
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* ── CTAs ── */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* "Book Consultation" — brand gradient button exact from reference */}
              <Link href="/book-appointment" className="btn-brand">
                Book Consultation
                <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
              </Link>
              {/* "Explore Care" — neo ghost button exact from reference */}
              <Link href="/patient-resources" className="btn-neo">
                Explore Care
              </Link>
            </div>

            {/* ── Trust chips ── */}
            <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Accreditations">
              {["NABH Accredited", "24×7 Emergency", "300+ Specialists"].map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium"
                  style={{
                    background: "#F0F5F8",
                    boxShadow: "var(--neo-sm)",
                    border: "1px solid rgba(255,255,255,0.80)",
                    color: "#536D7C"
                  }}
                >
                  <span
                    className="h-4 w-4 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #07576F, #EEAA25)" }}
                  >
                    <Icon name="check" className="h-2.5 w-2.5 text-white" aria-hidden />
                  </span>
                  {chip}
                </li>
              ))}
            </ul>

            {/* ── Slide controls ── */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-1.5" role="group" aria-label="Slide navigation">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    background: "#F0F5F8",
                    boxShadow: "var(--neo-sm)",
                    border: "1px solid rgba(255,255,255,0.80)",
                    color: "#07576F"
                  }}
                >
                  <Icon name="chevron-left" className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    background: "#F0F5F8",
                    boxShadow: "var(--neo-sm)",
                    border: "1px solid rgba(255,255,255,0.80)",
                    color: "#07576F"
                  }}
                >
                  <Icon name="chevron-right" className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: "#F0F5F8",
                  boxShadow: "var(--neo-sm)",
                  border: "1px solid rgba(255,255,255,0.80)",
                  color: "#07576F"
                }}
              >
                <Icon name={paused ? "play" : "pause"} className="h-3.5 w-3.5" aria-hidden />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
                {slides.map((slide, i) => (
                  <button
                    key={slide.theme}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`${slide.theme} (slide ${i + 1} of ${slides.length})`}
                    onClick={() => setIndex(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? "2.5rem" : "0.5rem",
                      background: i === index
                        ? "linear-gradient(90deg, #07576F, #EEAA25)"
                        : "rgba(7,87,111,0.20)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ════ RIGHT: CURVED VIDEO FRAME (Exactly as step 161, unchanged) ════ */}
          <div className="hidden md:flex md:items-center md:justify-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[480px]"
            >
              {/* ── Curved frame with brand gradient border ── */}
              <div className="video-frame">
                {/* Corner glow accent dots */}
                <span
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #EEAA25, #F4C958)", boxShadow: "0 0 12px rgba(238,170,37,0.70)" }}
                  aria-hidden
                />
                <span
                  className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full"
                  style={{ background: "linear-gradient(135deg, #07576F, #0A80A8)", boxShadow: "0 0 10px rgba(10,128,168,0.60)" }}
                  aria-hidden
                />

                {/* ── Inner padded video container ── */}
                <div className="video-frame-inner" style={{ padding: "0" }}>
                  {/* Video with fallback */}
                  <div className="relative aspect-[4/3] w-full">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/media/hero-poster.svg"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <source src="/herovideo1.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay gradient — teal bottom fade */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(7,87,111,0.65) 0%, transparent 55%)"
                      }}
                      aria-hidden
                    />

                    {/* Excellence badge overlay */}
                    <div
                      className="absolute top-4 right-4 rounded-xl px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
                      style={{
                        background: "rgba(238,170,37,0.20)",
                        border: "1px solid rgba(238,170,37,0.50)",
                        color: "#EEAA25"
                      }}
                    >
                      Excellence in Oncology
                    </div>

                    {/* Bottom stat chips */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div
                        className="flex items-center gap-2.5 rounded-2xl px-4 py-2.5 backdrop-blur-md"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "1px solid rgba(255,255,255,0.30)"
                        }}
                      >
                        <span className="text-2xl font-bold text-white">25+</span>
                        <span className="text-xs leading-tight text-white/80">Years of<br/>Excellence</span>
                      </div>
                      <div
                        className="flex items-center gap-2.5 rounded-2xl px-4 py-2.5 backdrop-blur-md"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "1px solid rgba(255,255,255,0.30)"
                        }}
                      >
                        <span className="text-2xl font-bold text-white">50k+</span>
                        <span className="text-xs leading-tight text-white/80">Patients<br/>Treated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Below-frame floating stat — matches reference ── */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 flex justify-end"
              >
                <div
                  className="inline-flex items-center gap-2.5 rounded-2xl px-4 py-2.5"
                  style={{
                    background: "#F0F5F8",
                    boxShadow: "var(--neo-sm)",
                    border: "1px solid rgba(255,255,255,0.80)"
                  }}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #07576F, #EEAA25)" }}
                  >
                    <Icon name="star" className="h-3.5 w-3.5 text-white" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "#07576F" }}>
                    Trusted by 50,000+ patients across India
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ════ INLINE CARE SEARCH PANEL (PUSHED INTO TOP OF PAGE FLOW) ════ */}
        <div className="mt-12 w-full relative z-20">
          <CareSearchPanel />
        </div>
      </div>
    </section>
  );
}
