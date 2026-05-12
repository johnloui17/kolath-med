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
                Kerala's 1st ISO Certified Pharmacy
              </span>
              <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-[0.95] tracking-tighter">
                Trusted medicines, <br />
                <span className="text-brand-primary italic">delivered with hope.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-md italic font-sans">
                For over 30 years, Kolath Medicals in Kadavanthra, Kochi has been the community's pharmacy of choice — specialising in allopathic, oncology, nephrology and orthopaedic care.
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

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800/50">
              <div className="space-y-1">
                <h4 className="text-3xl font-display font-bold text-brand-primary">30+</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">Years of<br />service</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl font-display font-bold text-brand-primary">17%</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">Max<br />discount</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl font-display font-bold text-brand-primary">1st</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">ISO Pharmacy<br />in Kerala</p>
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
