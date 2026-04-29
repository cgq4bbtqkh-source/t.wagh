import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/work", label: "Work", num: "03" },
  { to: "/services", label: "Services", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
] as const;

export function SiteNav() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link to="/" className="mono text-[0.7rem] tracking-[0.3em] uppercase text-bone">
            T.Wagh<span className="text-gold">/</span>2026
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active = loc.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-baseline gap-2 mono text-[0.7rem] tracking-[0.25em] uppercase text-bone"
                >
                  <span className="text-gold/60">{l.num}</span>
                  <span className={`link-underline ${active ? "text-gold" : ""}`}>{l.label}</span>
                </Link>
              );
            })}
          </nav>
          <a
            href="mailto:hello@tanmaywagh.com"
            className="hidden md:inline mono text-[0.7rem] tracking-[0.25em] uppercase text-bone link-underline"
          >
            Inquiries →
          </a>
        </div>
      </motion.header>

      {/* Mobile hamburger trigger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center"
      >
        <span className="relative block h-[14px] w-6">
          <span
            className={`absolute left-0 top-0 h-px w-6 bg-bone transition-transform duration-300 ease-out ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 bottom-0 h-px w-6 bg-bone transition-transform duration-300 ease-out ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden fixed inset-0 z-50 bg-ink grain"
          >
            <div className="absolute inset-0 vignette pointer-events-none" />
            <nav className="relative h-full w-full flex flex-col justify-center px-8">
              <ul className="flex flex-col gap-6">
                {links.map((l, i) => {
                  const active = loc.pathname === l.to;
                  return (
                    <motion.li
                      key={l.to}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.06,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4"
                      >
                        <span className="mono text-[0.7rem] tracking-[0.3em] text-gold/70">
                          {l.num}
                        </span>
                        <span
                          className={`display text-5xl ${
                            active ? "text-gold" : "text-bone"
                          }`}
                        >
                          {l.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-10 left-8 right-8 flex flex-col gap-2"
              >
                <div className="editorial-rule mb-4" />
                <a
                  href="mailto:contact@tellmetanmay.com"
                  className="mono text-[0.7rem] tracking-[0.25em] uppercase text-bone/80"
                >
                  contact@tellmetanmay.com
                </a>
                <a
                  href="https://instagram.com/tellmetanmay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[0.7rem] tracking-[0.25em] uppercase text-bone/80"
                >
                  instagram.com/tellmetanmay
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
