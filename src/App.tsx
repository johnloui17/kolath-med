import React, { useRef } from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { DepartmentsSection } from "./components/DepartmentsSection";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { DiscountPopup } from "./components/DiscountPopup";
import { LocationSection } from "./components/LocationSection";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ShieldCheck, Truck, Clock, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function App() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, {
    margin: "-100px 0px 0px 0px",
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-primary selection:text-slate-950 overflow-x-hidden">
      <NavBar />
      
      <main className="relative">
        {/* Global Background Particles for eye-catching effect */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0,
                rotate: 0
              }}
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 0.2, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20,
              }}
              className="absolute text-brand-primary"
            >
              <PlusIcon className="w-4 h-4 opacity-30" />
            </motion.div>
          ))}
        </div>

        <div ref={heroRef} className="relative z-10">
          <HeroSection />
        </div>
        
        <div className="relative z-10">
          <DepartmentsSection />
        </div>

        {/* Feature Section */}
        <section className="py-32 overflow-hidden bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<ShieldCheck size={32} />}
                title="Genuine Products"
                description="We source directly from authorized distributors to ensure 100% authenticity."
              />
              <FeatureCard 
                icon={<Truck size={32} />}
                title="Rapid Home Delivery"
                description="Prompt delivery service across Kochi to ensure you never miss a dose."
              />
              <FeatureCard 
                icon={<Clock size={32} />}
                title="Extended Hours"
                description="Open late to serve your emergencies and late-night medical requirements."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-slate-900 border-y border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter">Trusted Name in Kochi Since 1990</h2>
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    Kolath Medicals has been a pillar of the Kadavanthra community for over three decades. Our mission is to serve patients by providing quality medicines at a reasonable cost.
                  </p>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  With a wide selection of orthopaedic equipment, diabetic care, and mother & baby care, we are a one-stop-shop for your family's health requirements.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-8">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-display font-bold text-brand-primary tracking-tighter">30+</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years of Excellence</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-display font-bold text-brand-primary tracking-tighter">50k+</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Satisfied Patients</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="w-[400px] h-[400px] rounded-[60px] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center relative group">
                  <AnimatedLogo3D />
                </div>
                {/* Decorative glow */}
                <div className="absolute -z-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -top-10 -right-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-32 bg-slate-950">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter uppercase leading-tight">Need Medicines <span className="text-brand-primary">Immediately?</span></h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto italic font-sans">
              Our specialized pharmaceutical care and delivery team are here for you Mon – Sat · 8 AM – 10 PM. Reach out via WhatsApp or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://wa.me/919496358682" 
                target="_blank"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#25D366]/20 transition-all uppercase tracking-widest"
              >
                WhatsApp Us
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="tel:+919496358682" 
                className="bg-white hover:bg-slate-100 text-slate-950 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all uppercase tracking-widest"
              >
                Call Support
              </motion.a>
            </div>
          </div>
        </section>

        <LocationSection />
      </main>

      <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2 rounded-xl">
                  <PlusIcon className="text-slate-950 w-6 h-6" />
                </div>
                <span className="text-2xl font-display font-bold text-white tracking-tighter uppercase mr-2">Kolath <span className="text-brand-primary">Medicals</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed font-medium italic">
                Kochi's most trusted healthcare partner with 30 years of excellence. The first ISO pharmacy in Kerala.
              </p>
              <div className="flex gap-5">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Facebook size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-10">Product Range</h4>
              <ul className="space-y-4">
                <FooterLink>Surgical Equipment</FooterLink>
                <FooterLink>Orthopaedic Braces</FooterLink>
                <FooterLink>Physiotherapy Aids</FooterLink>
                <FooterLink>Diabetic Monitoring</FooterLink>
                <FooterLink>Mother & Baby Wellness</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-10">Organization</h4>
              <ul className="space-y-4">
                <FooterLink href="#about">Our Story</FooterLink>
                <FooterLink href="#departments">Departmental Care</FooterLink>
                <FooterLink href="#contact">Emergency Contact</FooterLink>
                <FooterLink>Delivery Network</FooterLink>
                <FooterLink>Ethical Sourcing</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-10">Contact Portal</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-brand-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-400 text-sm font-medium leading-relaxed">KP Vallon Rd, Giri Nagar, Kadavanthra, Kochi, Kerala 682020</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-brand-primary shrink-0" size={20} />
                  <span className="text-slate-400 text-sm font-bold">+91 9496358682</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-brand-primary shrink-0" size={20} />
                  <span className="text-slate-400 text-sm font-medium">info@kolathmedicals.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1 items-center md:items-start text-xs text-slate-500 font-bold uppercase tracking-widest text-center md:text-left">
               <span>&copy; {new Date().getFullYear()} KOLATH MEDICALS</span>
               <span className="text-brand-primary/50">1st ISO Certified Pharmacy in Kerala • License: 21/443/KL/2021</span>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {!isHeroInView && <WhatsAppSticky />}
      </AnimatePresence>

      <DiscountPopup />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-10 bg-slate-900 rounded-[40px] border border-slate-800 shadow-2xl hover:border-brand-primary/40 transition-all duration-500 group">
      <div className="text-brand-primary mb-8 bg-brand-primary/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-display font-extrabold text-white mb-4 tracking-tight uppercase group-hover:text-brand-primary transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed italic text-sm">{description}</p>
    </div>
  );
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <li>
      <a href={href} className="text-slate-500 text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-all duration-300 flex items-center group">
        <span className="w-0 group-hover:w-4 h-0.5 bg-brand-primary mr-0 group-hover:mr-2 transition-all duration-300" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-slate-950 hover:-translate-y-1 transition-all duration-300 shadow-lg">
      {icon}
    </a>
  );
}

function AnimatedLogo3D() {
  return (
    <div className="relative group" style={{ perspective: "1200px" }}>
      <motion.div
        animate={{ 
          rotateY: [0, 360],
          rotateX: [5, -5, 5],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-40 h-40 relative"
      >
        {/* Front Face - The "K" */}
        <div 
          className="absolute inset-0 bg-brand-primary rounded-[32px] flex items-center justify-center text-slate-950 text-7xl font-display font-black shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          K
        </div>
        
        {/* Back Face - The Medical Plus */}
        <div 
          className="absolute inset-0 bg-brand-primary rounded-[32px] flex items-center justify-center text-slate-950 text-7xl font-display font-black shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <PlusIcon className="w-20 h-20" />
        </div>

        {/* Thickness layers to simulate 3D volume */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-brand-primary/20 rounded-[32px] border border-brand-primary/10"
            style={{
              transform: `translateZ(${i - 5}px)`,
              backfaceVisibility: "hidden"
            }}
          />
        ))}
      </motion.div>
      
      {/* Floating shadow beneath */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-primary/20 blur-xl rounded-full"
      />
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}


