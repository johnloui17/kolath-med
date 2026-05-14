import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Phone } from "lucide-react";
import { motion } from "motion/react";

export function LeadForm() {
  const handleWhatsApp = () => {
    const whatsappUrl = "https://wa.me/919496358682?text=Hi, I have a medical requirement.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="w-full max-w-[400px] bg-navy-card/60 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-10 rounded-xl flex flex-col items-center justify-center gap-10 overflow-hidden relative group">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 blur-[60px] rounded-full group-hover:bg-gold/20 transition-colors" />
        
        <div className="text-center space-y-3 relative z-10">
           <h2 className="text-3xl font-display font-extrabold text-white tracking-tighter uppercase leading-none">Consult <br /> <span className="text-gold">Pharmacist</span></h2>
           <p className="text-muted-foreground text-sm italic font-medium">Check availability & expert medical advice instantly.</p>
        </div>

        <div className="w-full space-y-4 relative z-10">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-gold hover:bg-gold-light text-navy font-black py-8 rounded-xl shadow-[0_10px_40px_rgba(201,160,80,0.3)] transition-all active:scale-[0.97] text-lg uppercase tracking-widest group/btn relative overflow-hidden"
            aria-label="WhatsApp Now - Contact pharmacist via WhatsApp"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              WhatsApp Now
              <Send className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true" />
            </span>
          </Button>

          <Button 
            asChild
            className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black py-8 rounded-xl transition-all active:scale-[0.97] text-lg uppercase tracking-widest group/call"
          >
            <a href="tel:+919496358682" className="flex items-center justify-center gap-3" aria-label="Call Support - Call medical support at +91 9496358682">
              Call Support
              <Phone className="h-5 w-5 group-hover/call:rotate-12 transition-transform text-gold" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="pt-4 border-t border-white/5 w-full text-center">
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Response time: &lt; 5 mins</p>
        </div>
      </Card>
    </motion.div>
  );
}


