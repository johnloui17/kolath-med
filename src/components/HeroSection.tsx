import React from "react";
import { motion } from "motion/react";
import { Star, Phone, ShieldCheck, Map } from "lucide-react";
import { LeadForm } from "./LeadForm";

import { MedicalBackground3D } from "./MedicalBackground3D";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-navy">
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
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gold/[0.08] border border-gold/30 backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(201,160,80,0.1)]">
                  <Star size={14} className="fill-gold text-gold animate-pulse" />
                  <span className="text-[11px] font-black text-gold uppercase tracking-[0.25em]">
                    Trusted for 30+ Years
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-gold" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    1st ISO Pharmacy in Kerala
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-[0.9] tracking-tighter">
                Premium <br />
                Healthcare, <br />
                <span className="text-gold italic">Right at Home.</span>
              </h1>
              
              <div className="space-y-8">
                <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-sans italic">
                  Authorized pharmaceuticals, specialized medical equipment, and doorstep delivery with{" "}
                  <span className="text-white font-semibold italic whitespace-nowrap">Flat 15-17% Discounts</span>{" "}
                  daily.
                </p>
                
                <motion.a 
                  href="https://www.google.com/maps/dir//Kolath+Medicals,+KP+Vallon+Rd,+Giri+Nagar,+Kadavanthra,+Kochi,+Ernakulam,+Kerala+682020/@9.9823468,76.2940103,17z"
                  target="_blank"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl cursor-pointer transition-colors group/loc shadow-xl"
                >
                  <div className="bg-gold/20 p-3 rounded-xl group-hover/loc:bg-gold/30 transition-colors">
                    <Star size={20} className="text-gold" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-gold uppercase tracking-[0.2em]">Our Central Location</p>
                    <p className="text-lg text-white font-medium leading-snug font-display">KP Vallon Road, Kadavanthra, Kochi, Kerala 682020</p>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                      <span>Get Directions</span>
                      <div className="w-1 h-1 bg-navy-light rounded-full" />
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gold text-navy font-black text-sm uppercase tracking-widest shadow-xl shadow-gold/20 group w-full sm:w-auto"
                aria-label="Call Now - Call Kolath Medicals support at +91 9496358682"
              >
                <Phone size={18} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                Call Now
              </motion.a>
              
              <motion.a 
                href="#location"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors group w-full sm:w-auto"
                aria-label="View Map - View our location on the map"
              >
                <Map size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
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


