import React from "react";
import { motion } from "motion/react";
import { Star, Phone, ShieldCheck } from "lucide-react";
import { LeadForm } from "./LeadForm";

import { MedicalBackground3D } from "./MedicalBackground3D";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      <MedicalBackground3D />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-primary/[0.08] border border-brand-primary/30 backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <Star size={14} className="fill-brand-primary text-brand-primary animate-pulse" />
                  <span className="text-[11px] font-black text-brand-primary uppercase tracking-[0.25em]">
                    Trusted for 30+ Years
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-brand-primary" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    1st ISO Pharmacy in Kerala
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-[0.9] tracking-tighter">
                Premium <br />
                Healthcare, <br />
                <span className="text-brand-primary italic">Right at Home.</span>
              </h1>
              
              <div className="space-y-8">
                <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed font-sans italic">
                  Authorized pharmaceuticals, specialized medical equipment, and doorstep delivery with <span className="text-white font-bold not-italic">Flat 15-17% Discounts</span> daily.
                </p>
                
                <motion.a 
                  href="https://www.google.com/maps/dir//Kolath+Medicals,+KP+Vallon+Rd,+Giri+Nagar,+Kadavanthra,+Kochi,+Ernakulam,+Kerala+682020/@9.9823468,76.2940103,17z"
                  target="_blank"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 max-w-2xl cursor-pointer transition-colors group/loc"
                >
                  <div className="bg-brand-primary/20 p-3 rounded-2xl group-hover/loc:bg-brand-primary/30 transition-colors">
                    <Star size={20} className="text-brand-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-brand-primary uppercase tracking-[0.2em]">Our Central Location</p>
                    <p className="text-lg text-slate-200 font-medium leading-snug">KP Vallon Road, Kadavanthra, Kochi, Kerala 682020</p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      <span>Get Directions</span>
                      <div className="w-1 h-1 bg-slate-700 rounded-full" />
                      <span>Open 8 AM - 10 PM</span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a 
                href="tel:+919496358682"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-primary text-slate-950 font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/20 group"
              >
                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                Call Now
              </motion.a>
              
              <motion.a 
                href="#location"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                View Map
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


