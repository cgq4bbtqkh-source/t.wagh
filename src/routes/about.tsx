import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tanmay Wagh" },
      { name: "description", content: "Independent operator in the music ecosystem. Artist management, campaign strategy, live events, and emerging long-form storytelling." },
      { property: "og:title", content: "About — Tanmay Wagh" },
      { property: "og:description", content: "Structure over noise. Identity over promotion." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative pt-32 md:pt-40 pb-20">
      {/* Section header */}
      <header className="px-6 md:px-12 mb-20 md:mb-32">
        <Reveal>
          <p className="label mb-6">Chapter 02 — Profile</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-[14vw] md:text-[10vw] leading-[0.9] text-bone tracking-tighter">
            The <span className="italic text-gold">operator</span>,
            <br />
            in long form.
          </h1>
        </Reveal>
      </header>

      {/* Editorial split */}
      <section className="px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Side panel */}
        <aside className="md:col-span-4 lg:col-span-3 md:sticky md:top-32 self-start">
          <Reveal>
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.15 0.02 22) 0%, oklch(0.08 0.005 270) 60%, oklch(0.12 0.05 256) 100%)",
                }}
              />
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, oklch(0.74 0.10 80 / 0.15), transparent 50%)",
                }}
              />
              <div className="absolute inset-0 vignette" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <p className="mono text-[0.6rem] tracking-[0.3em] uppercase text-bone/80">Tanmay Wagh</p>
                  <p className="mono text-[0.6rem] tracking-[0.3em] uppercase text-gold mt-1">Est. 2024</p>
                </div>
                <p className="mono text-[0.6rem] tracking-[0.3em] uppercase text-bone/60">PORTRAIT / 01</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4">
              <div>
                <p className="label mb-1">Born</p>
                <p className="text-sm text-bone">2005 · India</p>
              </div>
              <div>
                <p className="label mb-1">Education</p>
                <p className="text-sm text-bone">B.B.M., Ongoing<br /><span className="text-muted-foreground">Class of 2029</span></p>
              </div>
              <div>
                <p className="label mb-1">Practice</p>
                <p className="text-sm text-bone">Independent · 2024 →</p>
              </div>
            </div>
          </Reveal>
        </aside>

        {/* Body */}
        <article className="md:col-span-8 lg:col-span-8 lg:col-start-5 space-y-14">
          <Reveal>
            <p className="display text-2xl md:text-4xl text-bone leading-[1.25] text-balance">
              Twenty years old. An independent operator working at the intersection of
              <span className="italic text-gold"> strategy, narrative, and live experience</span> — building
              the kind of cultural infrastructure that doesn't show up on a feed.
            </p>
          </Reveal>

          <div className="editorial-rule" />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <Reveal>
              <p className="label mb-3">001 / Origin</p>
              <p className="text-bone/85 leading-relaxed text-pretty">
                Began in 2024 inside India's independent music ecosystem — managing artists,
                writing campaigns, and producing live shows when most of his peers were still
                figuring out the brief.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label mb-3">002 / Method</p>
              <p className="text-bone/85 leading-relaxed text-pretty">
                Treats every artist, show, and campaign as a single design problem:
                what is the long-term position, and what sequence of moves makes it real?
                Promotion is a by-product, never the brief.
              </p>
            </Reveal>
            <Reveal>
              <p className="label mb-3">003 / Shift</p>
              <p className="text-bone/85 leading-relaxed text-pretty">
                Now moving deliberately toward original storytelling — books and theatre.
                Same instinct, longer time horizon. Less campaign, more canon.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label mb-3">004 / Standard</p>
              <p className="text-bone/85 leading-relaxed text-pretty">
                Structure over noise. Identity over promotion. Authority earned through
                clarity, not volume. The work either holds — or it doesn't ship.
              </p>
            </Reveal>
          </div>

          <div className="editorial-rule" />

          <Reveal>
            <blockquote className="display text-3xl md:text-5xl text-bone leading-[1.1] text-balance">
              <span className="text-gold/60">“</span>
              I'm not in the visibility business.
              <br className="hidden md:block" />
              I'm in the <span className="italic text-gold">position</span> business.
              <span className="text-gold/60">”</span>
            </blockquote>
          </Reveal>
        </article>
      </section>
    </div>
  );
}
