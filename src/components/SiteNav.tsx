import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Index", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/work", label: "Work", num: "03" },
  { to: "/services", label: "Services", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
] as const;

export function SiteNav() {
  const loc = useLocation();
  return (
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
  );
}
