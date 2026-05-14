import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Menu, X, Phone } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <ShieldCheck className="text-slate-950" size={20} />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-widest uppercase">Kolath <span className="text-brand-primary">Medicals</span></span>
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
            className="bg-brand-primary/10 text-brand-primary px-6 py-2.5 rounded-xl text-sm font-bold border border-brand-primary/20 hover:bg-brand-primary hover:text-slate-950 transition-all"
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/5 p-6 space-y-6"
        >
          <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#departments" onClick={() => setIsOpen(false)}>Departments</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          <a
            href="https://wa.me/919496358682"
            target="_blank"
            className="block w-full bg-brand-primary text-slate-950 text-center py-4 rounded-xl font-bold"
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
      className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
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

