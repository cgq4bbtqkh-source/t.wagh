import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & { children: ReactNode; delay?: number; y?: number };

export function Reveal({ children, delay = 0, y = 30, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerLines({
  lines,
  className = "",
  onLoad = false,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  onLoad?: boolean;
  delay?: number;
}) {
  const animProps = onLoad
    ? { initial: { y: "110%" }, animate: { y: 0 } }
    : { initial: { y: "110%" }, whileInView: { y: 0 }, viewport: { once: true, margin: "-60px" } };

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            {...animProps}
            transition={{ duration: 1.1, delay: delay + i * 0.08, ease: [0.65, 0, 0.35, 1] }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
