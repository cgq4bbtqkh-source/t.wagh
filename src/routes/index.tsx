import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StaggerLines } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanmay Wagh — I don't build visibility. I build position." },
      { name: "description", content: "Strategic positioning, campaign architecture, and live experience design by independent operator Tanmay Wagh." },
      { property: "og:title", content: "Tanmay Wagh — Strategic Creative Operator" },
      { property: "og:description", content: "I don't build visibility. I build position." },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative">
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Cinematic backdrop */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.18 0.02 22 / 0.5), transparent 60%), radial-gradient(circle at 80% 80%, oklch(0.25 0.05 256 / 0.25), transparent 50%), oklch(0.08 0.005 270)",
            }}
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 vignette"
          />
        </motion.div>

        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex-1 flex items-end pt-32"
        >
          <div className="px-6 md:px-12 w-full">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="label mb-3">Reel — 2024 / 2026</p>
                <p className="mono text-xs text-muted-foreground">N 19.0760° · E 72.8777°</p>
              </div>
              <div className="hidden md:block text-right">
                <p className="label mb-3">Scene 01 / Opening</p>
                <p className="mono text-xs text-muted-foreground">Mumbai · Independent</p>
              </div>
            </div>

            <StaggerLines
              className="display text-[16vw] md:text-[11vw] leading-[0.88] text-bone tracking-tighter text-balance"
              lines={["I don't build", <span key="2" className="italic text-gold glow-gold">visibility.</span> as unknown as string]}
            />
            <div className="mt-2 md:mt-4">
              <StaggerLines
                className="display text-[16vw] md:text-[11vw] leading-[0.88] text-bone/90 tracking-tighter"
                lines={["I build position."]}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="px-6 md:px-12 pb-10 pt-16"
        >
          <div className="editorial-rule mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="label mb-2">Discipline</p>
              <p className="text-sm text-bone">Strategic Positioning</p>
            </div>
            <div>
              <p className="label mb-2">Method</p>
              <p className="text-sm text-bone">Campaign Architecture</p>
            </div>
            <div>
              <p className="label mb-2">Format</p>
              <p className="text-sm text-bone">Live Experience Design</p>
            </div>
            <div className="flex md:justify-end items-end">
              <Link to="/work" className="mono text-[0.7rem] tracking-[0.3em] uppercase text-gold link-underline">
                Enter the work →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mono text-[0.6rem] tracking-[0.4em] uppercase text-muted-foreground"
          >
            scroll
          </motion.div>
        </motion.div>
      </section>

      {/* Manifesto strip */}
      <section className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border/50">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="label">Manifesto / 001</p>
          </div>
          <div className="md:col-span-9">
            <p className="display text-3xl md:text-5xl lg:text-6xl text-bone leading-[1.1] text-balance">
              Most people chase <span className="italic text-muted-foreground">attention.</span> I architect
              the <span className="italic text-gold">position</span> that makes attention inevitable —
              and, once it arrives, irreplaceable.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4">
              <Link to="/about" className="mono text-xs tracking-[0.25em] uppercase text-bone link-underline">
                → Read the operator
              </Link>
              <Link to="/services" className="mono text-xs tracking-[0.25em] uppercase text-bone link-underline">
                → See the offering
              </Link>
              <Link to="/contact" className="mono text-xs tracking-[0.25em] uppercase text-gold link-underline">
                → Begin a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
