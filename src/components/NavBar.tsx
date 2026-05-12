import { motion } from "motion/react";
import { PlusSquare } from "lucide-react";
import React from "react";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-brand-primary p-2 rounded-xl">
            <PlusSquare className="text-white" size={24} />
          </div>
          <div>
            <span className="text-xl font-display font-bold text-white block leading-none">KOLATH</span>
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">Medicals</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#" active>Home</NavLink>
          <NavLink href="#departments">Departments</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+919496358682"
            className="hidden sm:block text-sm font-bold text-slate-300 hover:text-brand-primary transition-colors"
          >
            +91 9496358682
          </a>
          <button className="bg-brand-primary text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20">
            Rapid Delivery
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`text-xs font-bold uppercase tracking-widest transition-colors relative group ${active ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </a>
  );
}
