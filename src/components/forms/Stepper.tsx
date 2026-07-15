"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type StepperProps = {
  steps: string[];
  current: number;
};

/** Accessible progress indicator for multi-step flows. */
export function Stepper({ steps, current }: StepperProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex flex-wrap items-center gap-y-3">
        {steps.map((label, i) => {
          const status = i < current ? "complete" : i === current ? "current" : "upcoming";
          return (
            <li key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    status === "complete" && "bg-healing-teal text-white",
                    status === "current" && "bg-clinical-navy text-white ring-4 ring-clinical-navy/15",
                    status === "upcoming" && "bg-pearl text-ink/50"
                  )}
                  aria-current={status === "current" ? "step" : undefined}
                >
                  {status === "complete" ? (
                    <Icon name="check" className="h-4 w-4" aria-hidden />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "hidden text-sm font-medium sm:inline",
                    status === "upcoming" ? "text-ink/50" : "text-navy"
                  )}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "mx-2 h-px w-6 sm:w-10",
                    i < current ? "bg-healing-teal" : "bg-ink/15"
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
      <p className="sr-only" aria-live="polite">
        Step {current + 1} of {steps.length}: {steps[current]}
      </p>
    </nav>
  );
}
