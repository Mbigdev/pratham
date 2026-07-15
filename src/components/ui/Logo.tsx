import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  return (
    <img
      src="/media/logo.png"
      alt="Pratham logo"
      className={cn("h-full w-full object-contain shrink-0", className)}
      style={{
        filter: tone === "light" ? "brightness(1.1) saturate(1.1)" : undefined,
      }}
    />
  );
}
