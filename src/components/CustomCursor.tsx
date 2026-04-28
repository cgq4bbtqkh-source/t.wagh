import { useEffect, useRef, useState } from "react";

/**
 * Editorial precision cursor.
 * - Small dot (instant) + lag-following ring (inertial).
 * - Expands on interactive elements; reads optional [data-cursor] label.
 * - Hidden on touch / coarse pointers.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor]';

    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(interactiveSelector) as HTMLElement | null;
      if (el) {
        setHovering(true);
        const custom = el.getAttribute("data-cursor");
        if (custom) setLabel(custom);
        else if (el.tagName === "A") {
          const href = (el as HTMLAnchorElement).getAttribute("href") || "";
          if (href.startsWith("mailto:")) setLabel("EMAIL");
          else if (href.startsWith("http")) setLabel("OPEN");
          else setLabel("VIEW");
        } else if (el.tagName === "BUTTON") {
          setLabel(null);
        } else {
          setLabel(null);
        }
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      target.current.x = -100;
      target.current.y = -100;
    };

    const tick = () => {
      const ease = 0.18;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200]">
      {/* Lag ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border border-bone/60 transition-[width,height,background-color,border-color,opacity] duration-300 ease-out ${
          hovering ? "w-10 h-10 bg-bone/5 border-bone/80" : "w-7 h-7 bg-transparent"
        } ${pressed ? "scale-90" : "scale-100"}`}
        style={{
          boxShadow: hovering
            ? "0 0 24px color-mix(in oklab, var(--color-gold) 25%, transparent)"
            : "0 0 12px color-mix(in oklab, var(--color-bone) 10%, transparent)",
          mixBlendMode: "difference",
        }}
      >
        {label && (
          <span
            ref={labelRef}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 mono text-[0.55rem] tracking-[0.3em] uppercase text-bone whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </div>

      {/* Precision dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full bg-bone transition-[width,height,opacity] duration-200 ease-out ${
          hovering ? "w-0 h-0 opacity-0" : "w-[3px] h-[3px] opacity-90"
        }`}
        style={{ mixBlendMode: "difference" }}
      />
    </div>
  );
}
