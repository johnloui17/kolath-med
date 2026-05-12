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
            <motion.div
              key={dept.name}
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
          ))}
        </div>
      </div>
    </section>
  );
}
