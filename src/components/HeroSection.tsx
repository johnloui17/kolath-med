import { LeadForm } from "./LeadForm";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-500/5 rounded-l-[200px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                Trusted Medical Supplies Since 1990
              </span>
              <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-[0.95] tracking-tighter">
                Your Health, <br />
                Our <span className="text-brand-primary">Highest</span> <br />
                Priority.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-md italic font-sans">
                Empowering patients with high-quality clinical equipment and surgical supplies with rapid home delivery across Kochi.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-tight">Store Location</h3>
                  <p className="text-slate-400">KP Vallon Rd, Giri Nagar, Kadavanthra, Kochi, Kerala 682020</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-brand-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-tight">Working Hours</h3>
                  <p className="text-slate-400">Mon - Sat: 8:00 AM - 10:00 PM<br />Sunday: Emergency Services Available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <ShieldCheck className="text-brand-primary w-5 h-5" />
                <span>Drug License: 21/443/KL/2021</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <ShieldCheck className="text-brand-primary w-5 h-5" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <div className="lg:pl-8 flex justify-end">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
