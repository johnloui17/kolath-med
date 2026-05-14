import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

/* ── Section colour maps ───────────────────────────────────────────
   Bar bg shifts between slate-950 (darker) ↔ slate-900 (slightly lighter).
   Button colours shift to keep contrast & feel fresh per section.
─────────────────────────────────────────────────────────────────── */

// Sticky bar background
const SECTION_COLORS: Record<string, string> = {
  hero:        "rgba(2,  6,  23, 0.92)",   // slate-950
  departments: "rgba(15, 23, 42, 0.92)",   // slate-900
  features:    "rgba(2,  6,  23, 0.92)",
  about:       "rgba(15, 23, 42, 0.92)",
  contact:     "rgba(2,  6,  23, 0.92)",
  location:    "rgba(2,  6,  23, 0.92)",
  footer:      "rgba(2,  6,  23, 0.92)",
};

// Sticky bar top-border
const BORDER_COLORS: Record<string, string> = {
  hero:        "rgba(30, 41, 59, 0.8)",
  departments: "rgba(51, 65, 85, 0.8)",
  features:    "rgba(30, 41, 59, 0.8)",
  about:       "rgba(51, 65, 85, 0.8)",
  contact:     "rgba(30, 41, 59, 0.8)",
  location:    "rgba(30, 41, 59, 0.8)",
  footer:      "rgba(30, 41, 59, 0.8)",
};

// Call Now button background
const CALL_COLORS: Record<string, string> = {
  hero:        "#10b981",   // emerald-500
  departments: "#34d399",   // emerald-400
  features:    "#10b981",
  about:       "#34d399",
  contact:     "#10b981",
  location:    "#059669",   // emerald-600
  footer:      "#10b981",
};

// WhatsApp button background
const WA_COLORS: Record<string, string> = {
  hero:        "#25D366",   // WhatsApp brand
  departments: "#4ade80",   // green-400
  features:    "#25D366",
  about:       "#4ade80",
  contact:     "#25D366",
  location:    "#16a34a",   // green-600
  footer:      "#25D366",
};

function useActiveSection() {
  const [active, setActive] = useState("hero");
  const lastActive = useRef("hero");

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      departments: "departments",
      about:       "about",
      contact:     "contact",
      location:    "location",
    };

    const observers: IntersectionObserver[] = [];

    const handleIntersect = (key: string) => (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && lastActive.current !== key) {
        lastActive.current = key;
        setActive(key);
      }
    };

    const observe = (el: Element | null, key: string) => {
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect(key), { 
        rootMargin: "-20% 0px -60% 0px", 
        threshold: 0 
      });
      obs.observe(el);
      observers.push(obs);
    };

    observe(document.querySelector("section.bg-slate-950:first-of-type"), "hero");
    observe(document.querySelector("section.bg-slate-950.py-32"), "features");

    Object.entries(sectionMap).forEach(([id, key]) => {
      observe(document.getElementById(id), key);
    });

    observe(document.querySelector("footer"), "footer");

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

/* ── WhatsApp SVG ──────────────────────────────────────────────── */
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Stagger variants ──────────────────────────────────────────── */
const barVariants = {
  hidden:  { y: 100, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 26, staggerChildren: 0.08 },
  },
  exit:    { y: 100, opacity: 0, transition: { duration: 0.22, ease: "easeIn" } },
};

const btnVariants = {
  hidden:  { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 320, damping: 22 } },
};

/* ── Component ─────────────────────────────────────────────────── */
export function WhatsAppSticky() {
  const activeSection = useActiveSection();
  const bgColor   = SECTION_COLORS[activeSection] ?? SECTION_COLORS.hero;
  const bdColor   = BORDER_COLORS[activeSection]  ?? BORDER_COLORS.hero;
  const callColor = CALL_COLORS[activeSection]    ?? CALL_COLORS.hero;
  const waColor   = WA_COLORS[activeSection]      ?? WA_COLORS.hero;

  return (
    <>
      {/* ── Mobile: full-width sticky bottom bar ── */}
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ backgroundColor: bgColor, borderTopColor: bdColor }}
        transition={{ backgroundColor: { duration: 0.6 }, borderTopColor: { duration: 0.6 } }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-3 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg border-t will-change-transform"
      >
        {/* Call button */}
        <motion.a
          href="tel:+919496358682"
          variants={btnVariants}
          whileTap={{ scale: 0.95 }}
          animate={{ backgroundColor: callColor }}
          transition={{ backgroundColor: { duration: 0.6 } }}
          className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 rounded-2xl text-slate-950 font-black text-sm uppercase tracking-widest shadow-lg relative overflow-hidden group"
          aria-label="Call Now - Call Kolath Medicals support at +91 9496358682"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <Phone size={18} className="shrink-0" />
          Call Now
        </motion.a>

        {/* WhatsApp button */}
        <motion.a
          href="https://wa.me/919496358682?text=Hi, I have a medical requirement."
          target="_blank"
          rel="noopener noreferrer"
          variants={btnVariants}
          whileTap={{ scale: 0.95 }}
          animate={{ backgroundColor: waColor }}
          transition={{ backgroundColor: { duration: 0.6 } }}
          className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 rounded-2xl text-slate-950 font-black text-sm uppercase tracking-widest shadow-lg relative overflow-hidden group"
          aria-label="WhatsApp - Order medicines via WhatsApp"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <WhatsAppIcon size={18} className="shrink-0" />
          WhatsApp
        </motion.a>
      </motion.div>

      {/* ── Desktop: FAB bubble bottom-right ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-4 group"
      >
        <div className="bg-slate-900 border border-slate-800 py-2 px-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-sm font-medium">Chat with us on WhatsApp</span>
        </div>
        <motion.a
          href="https://wa.me/919496358682?text=Hi, I have a medical requirement."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12, boxShadow: "0 0 32px rgba(37,211,102,0.5)" }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 380, damping: 16 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 text-white relative overflow-hidden"
          aria-label="WhatsApp - Contact on WhatsApp"
        >
          <WhatsAppIcon size={32} />
        </motion.a>
      </motion.div>
    </>
  );
}
