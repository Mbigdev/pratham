import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  id,
  tone = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
  tone?: "default" | "light";
  eyebrowTone?: "default" | "light";
}) {
  const light = tone === "light";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]"
          /* Gold for eyebrow on dark, teal-deep on light */
          style={{ color: light ? "#EEAA25" : "#07576F" }}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn("font-display text-3xl font-bold leading-tight sm:text-4xl")}
        /* fg text: dark teal on light, white on dark */
        style={{ color: light ? "#F7FAFC" : "#07576F" }}
      >
        {title}
      </Tag>
      {description && (
        <p
          className="mt-4 text-lg leading-relaxed"
          /* muted foreground: oklch(0.48 0.04 215) ≈ #536D7C */
          style={{ color: light ? "rgba(255,255,255,0.72)" : "#536D7C" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
