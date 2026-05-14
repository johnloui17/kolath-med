import React from "react";
import { motion } from "motion/react";
import { Pill, Baby, HeartPulse, Accessibility, Sparkles, Footprints } from "lucide-react";

const departments = [
  {
    name: "General Medicines",
    description: "Prescription and OTC medicines from top brands.",
    icon: Pill,
  },
  {
    name: "Orthopaedic Products",
    description: "Belts, braces, and mobility aids for recovery.",
    icon: Footprints,
  },
  {
    name: "Mother & Baby Care",
    description: "Essential care products for mothers and infants.",
    icon: Baby,
  },
  {
    name: "Diabetic Care",
    description: "Monitors, strips, and supplements for diabetes.",
    icon: HeartPulse,
  },
  {
    name: "Personal Care",
    description: "Skin care, hair care, and hygiene solutions.",
    icon: Sparkles,
  },
  {
    name: "Mobility Aids",
    description: "Wheelchairs, walkers, and support equipment.",
    icon: Accessibility,
  },
];

export function DepartmentsSection() {
  return (
    <section id="departments" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4 italic tracking-tight">Our Specialized Departments</h2>
          <p className="text-lg text-slate-400">
            We offer a wide range of specialized healthcare categories to meet every family's medical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <React.Fragment key={dept.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-10 rounded-[40px] shadow-2xl border border-slate-800 hover:border-brand-primary/30 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="bg-emerald-500/10 w-16 h-16 rounded-[24px] flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-slate-950 transition-colors duration-500">
                  <dept.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{dept.name}</h3>
                <p className="text-slate-400 leading-relaxed italic">{dept.description}</p>
              </motion.div>

              {index === 3 && (
                <motion.a
                  key="whatsapp-btn"
                  href="https://wa.me/919496358682"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:hidden inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-2xl bg-[#25D366] text-slate-950 font-black text-sm uppercase tracking-widest shadow-xl shadow-[#25D366]/20 group"
                  aria-label="Chat on WhatsApp - Order medicines via WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={18}
                    height={18}
                    className="group-hover:scale-110 transition-transform flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.a>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
