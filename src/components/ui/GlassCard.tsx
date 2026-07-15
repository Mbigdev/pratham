import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
  as: Tag = "div",
  interactive = false,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  interactive?: boolean;
  dark?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "rounded-3xl border",
        dark
          ? "glass-dark"
          : "glass",
        interactive &&
          "transition-all duration-[260ms] ease-gentle hover:-translate-y-1 cursor-pointer",
        className
      )}
    >
      {children}
    </Tag>
  );
}
