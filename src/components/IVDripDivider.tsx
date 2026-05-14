import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function IVDripDivider() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Tube grows as user scrolls
  const pathLength = useTransform(smooth, [0.05, 0.82], [0, 1]);

  // Liquid in bag drains as tube fills
  const liquidY      = useTransform(smooth, [0, 0.75], [28, 56]);
  const liquidHeight = useTransform(smooth, [0, 0.75], [76, 48]);

  // Glow behind bag
  const glowOpacity = useTransform(smooth, [0, 0.4, 0.9], [0, 0.55, 0.1]);

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-start overflow-visible"
      style={{
        height: 280,
        background: "linear-gradient(to bottom, rgba(15,23,42,0.5) 0%, rgba(2,6,23,1) 100%)",
      }}
    >
      {/* Ambient glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[80px] bg-emerald-500/20 pointer-events-none"
      />

      <svg
        viewBox="0 0 120 430"
        width="120"
        height="430"
        className="overflow-visible"
        style={{ marginTop: -16 }}
      >
        <defs>
          <linearGradient id="ivLiquid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="ivTube" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
          </linearGradient>
          <filter id="ivGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Hook ── */}
        <path d="M 46 5 Q 60 1 74 5" stroke="#10b981" strokeWidth="2" strokeOpacity="0.7" fill="none" strokeLinecap="round" />
        <line x1="60" y1="4" x2="60" y2="17" stroke="#10b981" strokeWidth="2" strokeOpacity="0.65" />

        {/* ── Bag body ── */}
        <rect x="14" y="17" width="92" height="100" rx="16"
          fill="rgba(16,185,129,0.04)"
          stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5"
        />
        {/* Shine */}
        <rect x="17" y="20" width="28" height="92" rx="10" fill="rgba(255,255,255,0.025)" />

        {/* Liquid — drains as scroll progresses */}
        <motion.rect
          x="18" width="84" rx="10"
          fill="url(#ivLiquid)"
          style={{ y: liquidY, height: liquidHeight }}
        />

        {/* Label lines */}
        <line x1="24" y1="35" x2="96" y2="35" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.2" />
        <line x1="24" y1="42" x2="86" y2="42" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.14" />
        <line x1="24" y1="49" x2="76" y2="49" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.09" />

        {/* ── Port / nozzle ── */}
        <rect x="52" y="117" width="16" height="13" rx="3.5"
          fill="rgba(16,185,129,0.18)"
          stroke="#10b981" strokeWidth="1.3" strokeOpacity="0.65"
        />
        <line x1="60" y1="130" x2="60" y2="138" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.6" />

        {/* ── Drip chamber ── */}
        <rect x="47" y="138" width="26" height="42" rx="8"
          fill="rgba(16,185,129,0.05)"
          stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.45"
        />

        {/* Fast liquid drops inside drip chamber — 5 staggered drops */}
        {[0, 0.18, 0.36, 0.54, 0.72].map((delay, i) => (
          <motion.ellipse
            key={i}
            cx="60"
            rx={i % 2 === 0 ? 2.8 : 2.2}
            ry={i % 2 === 0 ? 4.5 : 3.5}
            fill="#10b981"
            filter="url(#ivGlow)"
            animate={{
              cy:      [143, 174],
              opacity: [0, 1, 1, 0],
              scaleY:  [0.5, 1.1, 1.3, 0.8],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeIn",
              delay,
              times: [0, 0.25, 0.75, 1],
            }}
          />
        ))}

        {/* ── Connector ── */}
        <line x1="60" y1="180" x2="60" y2="190" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.6" />

        {/* Ghost track — curvy, solid, faint */}
        <path
          d="M 60 190 C 30 250, 90 310, 60 430"
          stroke="#10b981" strokeWidth="2" strokeOpacity="0.15"
          fill="none" strokeLinecap="round"
        />

        {/* ── Animated tube — scroll-driven, curvy ── */}
        <motion.path
          d="M 60 190 C 30 250, 90 310, 60 430"
          stroke="url(#ivTube)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
          filter="url(#ivGlow)"
        />
      </svg>
    </div>
  );
}
