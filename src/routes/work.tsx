import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Tanmay Wagh" },
      { name: "description", content: "Selected case studies: independent live shows, artist campaigns, strategic writing, and high-pressure media coverage." },
      { property: "og:title", content: "Work — Tanmay Wagh" },
      { property: "og:description", content: "Cinematic case studies from inside India's independent music ecosystem." },
    ],
  }),
  component: Work,
});

type Project = {
  num: string;
  title: string;
  category: string;
  year: string;
  role: string;
  actions: string[];
  impact: string;
  accent: "crimson" | "electric" | "gold";
};

const projects: Project[] = [
  {
    num: "01",
    title: "Five Shows. Zero Team.",
    category: "Independent Live Production",
    year: "2024 — 2026",
    role: "Concept, production, end-to-end execution",
    actions: [
      "Venue scouting, negotiation & coordination",
      "Artist handling, hospitality, run-of-show",
      "Audience experience design across formats",
      "Repeatable production system built show-over-show",
    ],
    impact:
      "Five independent shows produced solo — a continuity rare for an operator at this stage, with a system now ready to scale.",
    accent: "crimson",
  },
  {
    num: "02",
    title: "Positioning, not promotion.",
    category: "Artist Campaign Strategy & Management",
    year: "2024 — Present",
    role: "Lead strategist & manager",
    actions: [
      "Narrative-driven campaign architecture per release",
      "Long-term identity & catalogue positioning",
      "Direct negotiation with labels, venues, brands",
      "Ecosystem building — not one-off pushes",
    ],
    impact:
      "Artists arrive at each release with a position already built. Marketing becomes confirmation, not introduction.",
    accent: "gold",
  },
  {
    num: "03",
    title: "Documents that get read twice.",
    category: "Campaign Writing & Strategic Recognition",
    year: "2025",
    role: "Strategist & writer",
    actions: [
      "Structured campaign decks & narrative briefs",
      "Audience perception mapping",
      "Tonal frameworks for cross-channel rollout",
    ],
    impact:
      "Recognition from A&Rs and senior industry professionals on the depth, structure, and clarity of written strategy.",
    accent: "electric",
  },
  {
    num: "04",
    title: "Live, under pressure.",
    category: "Sports Event Media Coverage",
    year: "2024",
    role: "On-ground media & documentation",
    actions: [
      "Real-time content capture & turnaround",
      "Multi-stakeholder coordination on live ops",
      "Exposure to large-scale event choreography",
    ],
    impact:
      "Sharpened operational reflex under high-pressure, high-visibility conditions — translatable directly to live music environments.",
    accent: "crimson",
  },
];

const accentMap = {
  crimson: "text-crimson",
  electric: "text-electric",
  gold: "text-gold",
} as const;

function ProjectScene({ p, idx }: { p: Project; idx: number }) {
  const reverse = idx % 2 === 1;
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-24 border-t border-border/40">
      <div className="w-full grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Visual block */}
        <Reveal
          className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}
          y={60}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0"
              style={{
                background:
                  p.accent === "crimson"
                    ? "linear-gradient(160deg, oklch(0.22 0.12 22) 0%, oklch(0.08 0.005 270) 70%)"
                    : p.accent === "electric"
                    ? "linear-gradient(160deg, oklch(0.22 0.12 256) 0%, oklch(0.08 0.005 270) 70%)"
                    : "linear-gradient(160deg, oklch(0.28 0.08 80) 0%, oklch(0.08 0.005 270) 70%)",
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 30%, oklch(1 0 0 / 0.08), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 vignette" />
            <div className="absolute top-5 left-5 right-5 flex justify-between">
              <p className={`mono text-[0.6rem] tracking-[0.3em] uppercase ${accentMap[p.accent]}`}>
                Case / {p.num}
              </p>
              <p className="mono text-[0.6rem] tracking-[0.3em] uppercase text-bone/60">{p.year}</p>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="display text-3xl text-bone/90 leading-tight">{p.title}</p>
            </div>
          </div>
        </Reveal>

        {/* Text block */}
        <div className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
          <Reveal>
            <p className="label mb-4">
              <span className={accentMap[p.accent]}>● </span>
              {p.category}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-5xl md:text-7xl text-bone leading-[0.95] tracking-tighter text-balance">
              {p.title}
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            <Reveal delay={0.15}>
              <div>
                <p className="label mb-2">Role</p>
                <p className="text-bone/90">{p.role}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <p className="label mb-3">Process</p>
                <ul className="space-y-2">
                  {p.actions.map((a, i) => (
                    <li key={i} className="flex gap-4 text-bone/80">
                      <span className="mono text-xs text-muted-foreground pt-1.5 w-8 shrink-0">
                        0{i + 1}
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="border-l-2 border-gold/60 pl-5">
                <p className="label mb-2">Outcome</p>
                <p className="text-bone leading-relaxed text-pretty">{p.impact}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <div className="relative">
      {/* Title scene */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-32">
        <Reveal>
          <p className="label mb-6">Chapter 03 — Selected Work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-[18vw] md:text-[14vw] leading-[0.85] text-bone tracking-tighter">
            Case <span className="italic text-gold">files.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-bone/75 text-lg leading-relaxed">
            Four sequences. Each one a deliberate move — produced, written,
            negotiated, or executed independently between 2024 and 2026.
          </p>
        </Reveal>
      </section>

      {projects.map((p, i) => (
        <ProjectScene key={p.num} p={p} idx={i} />
      ))}

      <section className="px-6 md:px-12 py-32 border-t border-border/40 text-center">
        <Reveal>
          <p className="label mb-6">End of reel</p>
          <p className="display text-3xl md:text-5xl text-bone text-balance max-w-3xl mx-auto leading-[1.1]">
            New case file in development —
            <span className="italic text-gold"> long-form storytelling.</span>
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 mono text-xs tracking-[0.3em] uppercase text-bone link-underline"
          >
            → Open a conversation
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
