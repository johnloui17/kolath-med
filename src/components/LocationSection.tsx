import React from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6"
          >
            <MapPin size={14} className="text-brand-primary" />
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">Visit Us</span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
            Centrally Located for <span className="text-brand-primary">Your Convenience</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl italic">
            Find us centrally located at KP Vallon Road. Mon – Sat · 8 AM – 10 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-brand-primary/30 transition-colors">
              <div className="bg-brand-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/20">
                <Navigation size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Our Address</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                KP Vallon Road, Giri Nagar,<br />
                Kadavanthra, Kochi,<br />
                Kerala 682020
              </p>
            </div>

            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-brand-primary/30 transition-colors">
              <div className="bg-brand-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/20">
                <Clock size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Service Hours</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mon – Sat: 8:00 AM – 10:00 PM<br />
                Delivery: 8:00 AM - 10:00 PM
              </p>
            </div>

            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-brand-primary/30 transition-colors">
              <div className="bg-brand-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/20">
                <Phone size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Fast Response</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Emergency: +91 94963 58682<br />
                Support: 0495 231 6882
              </p>
            </div>
          </motion.div>

          {/* Google Maps Wrapper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[400px] lg:h-[750px] rounded-[40px] overflow-hidden border border-white/10 relative shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6553359300283!2d76.29806257695095!3d9.962607090140985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872c5e5f449f3%3A0xbec6817e0b298d24!2sKolath%20Medicals!5e0!3m2!1sen!2sin!4v1778747785053!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%] opacity-80 hover:opacity-100 transition-opacity"
              title="Kolath Medicals Location Map"
            ></iframe>
            
            {/* Overlay Action Button */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
              <motion.a
                href="https://www.google.com/maps/dir//Kolath+Medicals,+KP+Vallon+Rd,+Giri+Nagar,+Kadavanthra,+Kochi,+Ernakulam,+Kerala+682020/@9.9823468,76.2940103,17z"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-primary text-slate-950 font-black text-sm uppercase tracking-widest shadow-2xl"
              >
                <Navigation size={18} />
                Get Directions
              </motion.a>
            </div>
            
            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-950/20 rounded-[40px]" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/4" />
    </section>
  );
}
