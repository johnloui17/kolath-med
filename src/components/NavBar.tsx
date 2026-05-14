import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Menu, X, Phone } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-2xl backdrop-saturate-[1.6] border-b border-white/5 shadow-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(201,160,80,0.3)]">
            <ShieldCheck className="text-navy" size={20} />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-widest uppercase">Kolath <span className="text-gold">Medicals</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#departments">Departments</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919496358682"
            target="_blank"
            className="bg-gold/10 text-gold px-6 py-2.5 rounded-xl text-sm font-bold border border-gold/20 hover:bg-gold hover:text-navy transition-all shadow-lg"
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-navy border-b border-white/5 p-6 space-y-6 shadow-2xl"
          role="menu"
        >
          <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#departments" onClick={() => setIsOpen(false)}>Departments</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          <a
            href="https://wa.me/919496358682"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gold text-navy text-center py-4 rounded-xl font-bold shadow-xl"
            aria-label="Order via WhatsApp - Contact medicines via WhatsApp"
          >
            Order via WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="text-sm font-bold text-muted-foreground hover:text-white uppercase tracking-widest transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
    </a>
  );
}

function MobileNavLink({ children, href, onClick }: { children: React.ReactNode; href: string; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-xl font-display font-bold text-white tracking-widest uppercase"
    >
      {children}
    </a>
  );
}

