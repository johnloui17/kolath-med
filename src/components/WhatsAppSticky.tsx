import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppSticky() {
  const handleClick = () => {
    window.open("https://wa.me/919496358682?text=Hi, I have a medical requirement.", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group flex items-center gap-4">
      <div className="bg-slate-900 border border-slate-800 py-2 px-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-sm font-medium">Chat with us on WhatsApp</span>
      </div>
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </motion.button>
    </div>
  );
}
