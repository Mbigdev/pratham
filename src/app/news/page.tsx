import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { newsItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest updates from PRATHAM Cancer Institute — a fictional demonstration newsroom.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News & updates"
        description="Stories, milestones, and updates from across PRATHAM. All items are fictional and for demonstration only."
        crumbs={[{ label: "Discover PRATHAM" }, { label: "News" }]}
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-6 shadow-soft">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-healing-teal/10 px-3 py-1 text-xs font-semibold text-healing-teal">
                    <Icon name="activity" className="h-3.5 w-3.5" aria-hidden />
                    {item.category}
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-navy">{item.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-ink/70">{item.excerpt}</p>
                  <time className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/45">
                    {item.date}
                  </time>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
