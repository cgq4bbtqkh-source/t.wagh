import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — T. Wagh" },
      { name: "description", content: "Strategic positioning, creative direction, live experience design, and narrative development. Selective engagements." },
      { property: "og:title", content: "Services — T. Wagh" },
      { property: "og:description", content: "What I do, and what I do not. Defined with intent." },
    ],
  }),
  component: Services,
});

const services = [
  {
    num: "01",
    tag: "Core",
    title: "Strategic Positioning & Campaign Design",
    body: "Identity framing, long-term positioning, campaign architecture, and audience perception design. The deepest work and the most defining.",
    points: ["Positioning statement", "Campaign architecture", "Audience perception design", "Long-arc planning"],
    accent: "text-gold",
  },
  {
    num: "02",
    tag: "Creative",
    title: "Creative Direction & Concept Development",
    body: "Idea structuring, format design, and narrative development for releases, shows, and visual identity. Concepts that hold up after the launch week.",
    points: ["Idea structuring", "Format design", "Thematic development", "Reference systems"],
    accent: "text-bone",
  },
  {
    num: "03",
    tag: "Selective",
    title: "Live Experience Strategy & Execution",
    body: "Show concept, audience experience design, and end-to-end execution. Taken on selectively only when the format earns the effort.",
    points: ["Show concept", "Experience design", "Production & ops", "Stakeholder negotiation"],
    accent: "text-crimson",
  },
  {
    num: "04",
    tag: "Emerging",
    title: "Narrative Development",
    body: "Story structuring, character and theme development, and collaboration on early-stage ideas books, theatre, long-form.",
    points: ["Story architecture", "Character & theme work", "Early-stage collaboration", "Editorial structure"],
    accent: "text-electric",
  },
];

function Services() {
  return (
    <div className="relative pt-32 md:pt-40 pb-20">
      <header className="px-6 md:px-12 mb-24">
        <Reveal>
          <p className="label mb-6">Chapter 04 — Offering</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-[14vw] md:text-[10vw] leading-[0.9] text-bone tracking-tighter">
            What I <span className="italic text-gold">do</span>
            <br />
            and don't.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-bone/70 leading-relaxed">
            Four disciplines, in descending order of focus. Engagements are limited and
            selected on fit not volume.
          </p>
        </Reveal>
      </header>

      <section className="px-6 md:px-12 space-y-px bg-border/40">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <article className="group relative bg-background py-14 md:py-20 px-2 md:px-6 transition-colors hover:bg-secondary/40">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <p className={`mono text-xs tracking-[0.3em] uppercase ${s.accent}`}>
                    {s.num} · {s.tag}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="display text-4xl md:text-6xl text-bone leading-[0.98] tracking-tight text-balance transition-transform duration-700 group-hover:translate-x-2">
                    {s.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-bone/75 leading-relaxed text-pretty">
                    {s.body}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2 md:pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2">
                        <span className={s.accent}>—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="px-6 md:px-12 py-32 mt-12 text-center">
        <Reveal>
          <p className="label mb-4">Engagement model</p>
          <p className="display text-2xl md:text-4xl text-bone max-w-3xl mx-auto leading-[1.2] text-balance">
            Long-form retainers. Project leads. Or a single, surgical strategy intervention.
            <span className="text-muted-foreground"> Always vetted. Never volume.</span>
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 mono text-xs tracking-[0.3em] uppercase text-gold link-underline"
          >
            → Start a conversation
          </Link>
        </Reveal>
      </section>
    </div>
  );
}