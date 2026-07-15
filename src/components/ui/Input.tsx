import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

/* ── Exact neo-inset style from reference site ── */
const fieldBase =
  "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 min-h-[48px]";

const fieldStyle: React.CSSProperties = {
  background:  "#EDF3F6",                                          /* oklch(0.965 0.012 220) */
  boxShadow:   "inset 4px 4px 12px rgba(173,197,210,0.55), inset -4px -4px 10px rgba(255,255,255,0.90)",
  border:      "1px solid rgba(255,255,255,0.70)",
  color:       "#223A47",                                          /* oklch(0.28 0.05 215) */
};

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  function Input({ className, style, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(fieldBase, "field", className)}
        style={{ ...fieldStyle, ...style }}
        {...props}
      />
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, ComponentPropsWithoutRef<"textarea">>(
  function Textarea({ className, style, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(fieldBase, "field min-h-[120px] resize-y", className)}
        style={{ ...fieldStyle, ...style }}
        {...props}
      />
    );
  },
);

export const Select = forwardRef<HTMLSelectElement, ComponentPropsWithoutRef<"select">>(
  function Select({ className, children, style, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={cn(fieldBase, "field appearance-none pr-10", className)}
        style={{
          ...fieldStyle,
          backgroundImage:
            /* Gold chevron — matches reference site */
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23EEAA25' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          backgroundRepeat:   "no-repeat",
          backgroundPosition: "right 12px center",
          ...style,
        }}
        {...props}
      >
        {children}
      </select>
    );
  },
);
