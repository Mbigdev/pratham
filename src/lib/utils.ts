export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

type Accent = { text: string; bg: string; ring: string; softBg: string; gradient: string };

// Maps our accent token names to full Tailwind-ready color values.
export const accentMap: Record<string, Accent> = {
  teal: { text: "text-healing-teal", bg: "bg-healing-teal", ring: "ring-healing-teal", softBg: "bg-healing-teal/10", gradient: "from-healing-teal to-aqua" },
  aqua: { text: "text-[#2a9a98]", bg: "bg-aqua", ring: "ring-aqua", softBg: "bg-aqua/12", gradient: "from-aqua to-healing-teal" },
  violet: { text: "text-soft-violet", bg: "bg-soft-violet", ring: "ring-soft-violet", softBg: "bg-soft-violet/10", gradient: "from-soft-violet to-aqua" },
  gold: { text: "text-[#b8862e]", bg: "bg-sunrise-gold", ring: "ring-sunrise-gold", softBg: "bg-sunrise-gold/12", gradient: "from-sunrise-gold to-gentle-coral" },
  coral: { text: "text-[#d76a55]", bg: "bg-gentle-coral", ring: "ring-gentle-coral", softBg: "bg-gentle-coral/12", gradient: "from-gentle-coral to-sunrise-gold" },
};

export function accentClasses(name: string): Accent {
  return accentMap[name] ?? accentMap.teal;
}
