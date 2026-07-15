import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gold" | "coral";
type Size = "sm" | "md" | "lg";

/* ── Base classes ── */
const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-[260ms] ease-gentle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] cursor-pointer whitespace-nowrap";

/* ── Variant styles ── */
const variantClasses: Record<Variant, string> = {
  /* btn-brand: brand gradient — primary CTA */
  primary:  "btn-brand",
  /* btn-neo: neo ghost — secondary CTA */
  secondary: "btn-neo",
  /* ghost */
  ghost:    "bg-transparent hover:bg-white/50",
  /* outline — teal border */
  outline:  "bg-transparent border-[1.5px] hover:opacity-90",
  /* gold gradient */
  gold:     "btn-gold",
  coral:    "text-white hover:brightness-95 hover:-translate-y-0.5",
};

/* ── Size modifiers ── */
const sizes: Record<Size, string> = {
  sm: "text-sm px-5 py-2",
  md: "text-[0.925rem] px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

/* ── Inline styles per variant ── */
function getStyle(variant: Variant): React.CSSProperties | undefined {
  if (variant === "outline") {
    return {
      borderColor: "rgba(7,87,111,0.30)",
      color: "#07576F",
    };
  }
  if (variant === "ghost") {
    return { color: "#07576F" };
  }
  if (variant === "coral") {
    return { background: "#D4896A", boxShadow: "0 4px 12px rgba(212,137,106,0.35)" };
  }
  return undefined;
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };
type ButtonAsLink   = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", children, className, leftIcon, rightIcon, ...rest } = props;
  const classes = cn(base, variantClasses[variant], sizes[size], className);
  const style = getStyle(variant);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} style={style} {...linkRest}>
        {leftIcon}{children}{rightIcon}
      </Link>
    );
  }
  return (
    <button className={classes} style={style} {...(rest as ButtonAsButton)}>
      {leftIcon}{children}{rightIcon}
    </button>
  );
}
