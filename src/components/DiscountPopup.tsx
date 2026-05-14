import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, MessageCircle, ShieldCheck, Phone } from "lucide-react";

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // Appear after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919496358682?text=Hi, I'm interested in the medical discounts!", "_blank");
    closePopup();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[60] cursor-pointer"
          />

          {/* Popup Content */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[70] p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-navy-card border border-white/10 rounded-xl overflow-hidden pointer-events-auto relative shadow-[0_0_50px_rgba(201,160,80,0.15)]"
            >
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors z-20 bg-navy-light/50 p-2 rounded-full"
                aria-label="Close discount popup"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="px-8 pt-10 pb-6 border-b border-white/5 bg-gradient-to-br from-gold/5 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-gold fill-gold" />
                  <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Special Offerings</span>
                </div>
                <h2 className="text-3xl font-display font-extrabold text-white tracking-tighter uppercase leading-tight">
                  Your Discount, <span className="text-gold">Your Way</span>
                </h2>
              </div>

              {/* Discount Grid */}
              <div className="grid grid-cols-2">
                <div className="p-8 border-r border-white/5 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Always • Everyone</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-display font-black text-gold tracking-tighter">15%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-lg font-display">Flat Discount</h3>
                    <p className="text-muted-foreground text-xs italic leading-relaxed">On all English medicines — just walk in, any day.</p>
                  </div>
                </div>

                <div className="p-8 space-y-4 bg-gold/[0.02]">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Plan Ahead</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-display font-black text-gold tracking-tighter">17%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-lg font-display">Pre-Order Discount</h3>
                    <p className="text-muted-foreground text-xs italic leading-relaxed">Order today, save more tomorrow — UPI, full strips.</p>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-8 bg-navy/50 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-navy py-4 px-6 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/20 transition-all"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    WhatsApp
                  </motion.button>

                  <motion.a
                    href="tel:+919496358682"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white hover:bg-slate-100 text-navy py-4 px-6 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all"
                  >
                    <Phone size={18} className="text-gold" strokeWidth={3} />
                    Call Us
                  </motion.a>
                </div>
                
                <div className="flex items-center justify-center gap-2 opacity-50">
                  <ShieldCheck size={12} className="text-muted-foreground" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Effective pricing policy • Transparent • Fair</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-[80px] -z-10" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
