import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanmay Wagh" },
      { name: "description", content: "Reach out for strategic positioning, campaign design, live experience, or narrative collaboration." },
      { property: "og:title", content: "Contact — Tanmay Wagh" },
      { property: "og:description", content: "Selective engagements. Real conversations only." },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: "contact@tellmetanmay.com", href: "mailto:contact@tellmetanmay.com" },
  { label: "Instagram", value: "@tellmetanmay", href: "https://instagram.com/tellmetanmay" },
];

function Contact() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between pt-32 md:pt-40 pb-12">
      <header className="px-6 md:px-12">
        <Reveal>
          <p className="label mb-6">Chapter 05 — Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-[14vw] md:text-[11vw] leading-[0.88] text-bone tracking-tighter text-balance">
            Tell me the
            <br />
            <span className="italic text-gold">real</span> brief.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-bone/75 leading-relaxed">
            I read every message. Be specific — what you're building, where you are,
            what success looks like a year from now. The better the brief, the faster
            we know if it's a fit.
          </p>
        </Reveal>
      </header>

      <section className="px-6 md:px-12 mt-24">
        <div className="editorial-rule mb-10" />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-3xl">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block py-4"
              >
                <p className="label mb-3">{c.label}</p>
                <p className="display md:text-4xl text-bone link-underline transition-colors group-hover:text-gold text-3xl">
                  {c.value}
                </p>
                <p className="mono text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  open channel →
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-24 flex flex-wrap items-end justify-between gap-6">
            <p className="display italic text-2xl md:text-3xl text-muted-foreground max-w-md">
              “Either the work earns the meeting, or it doesn't.”
            </p>
            <p className="mono text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
              Mumbai · IST · Replies within 48h
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
