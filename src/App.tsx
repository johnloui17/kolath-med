import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { DepartmentsSection } from "./components/DepartmentsSection";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { motion } from "motion/react";
import React from "react";
import { ShieldCheck, Truck, Clock, Phone, MapPin, Mail, Instagram, Facebook, Twitter, CheckCircle2, Search, Send, MessageSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-primary selection:text-slate-950">
      <NavBar />
      
      <main>
        <HeroSection />
        
        {/* Discount Section */}
        <section id="discount" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="space-y-6">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-px bg-brand-primary" />
                  Discount Scheme
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter">Your discount, <br /><span className="text-brand-primary italic">your way.</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed italic">
                  A fair, transparent pricing policy that rewards everyone — and rewards planners even more. Applicable on all English (allopathic) medicines.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[32px] space-y-6 relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck size={120} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Always · Everyone</p>
                    <h3 className="text-5xl font-display font-bold text-white">15%</h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Flat Discount</h4>
                    <p className="text-slate-400 text-sm leading-relaxed italic">
                      On all English medicines. No conditions, no minimum — just walk in and save.
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-brand-primary text-sm font-bold uppercase tracking-widest group/btn">
                    Just walk in 
                    <MapPin size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="p-8 bg-brand-primary/5 border-2 border-brand-primary/20 rounded-[32px] space-y-6 relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Clock size={120} className="text-brand-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Plan Ahead · Earn More</p>
                    <h3 className="text-5xl font-display font-bold text-brand-primary">17%</h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Pre-Order Discount</h4>
                    <p className="text-slate-400 text-sm leading-relaxed italic">
                      Order today, save more tomorrow. Applicable on full strips, UPI payment, pre-order placed by 2 PM.
                    </p>
                  </div>
                  <a href="https://wa.me/919496358682" className="flex items-center gap-2 text-brand-primary text-sm font-bold uppercase tracking-widest group/btn">
                    Order via WhatsApp
                    <MessageSquare size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pre-Order Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-800/50">
              <StepItem 
                number="01"
                title="Place your order"
                description="Via WhatsApp or phone before 2 PM."
              />
              <StepItem 
                number="02"
                title="Pay by UPI"
                description="Pay full strips via UPI to confirm pre-order."
              />
              <StepItem 
                number="03"
                title="Pickup next day"
                description="Collect from store or get home delivery by 5 PM."
              />
            </div>
          </div>
        </section>
        
        <DepartmentsSection />

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
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter">Three decades of trust, <br /><span className="text-brand-primary italic">care and precision.</span></h2>
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    Kolath Medicals started as a small neighbourhood pharmacy in Kadavanthra, Kochi — built on the belief that medicine should always be accessible, authentic and affordable. Today, we are proudly <strong>Kerala's first ISO-certified pharmacy</strong>, serving thousands of families, hospitals and specialists across the city.
                  </p>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  From a regular headache tablet to complex oncology regimens, our shelves are stocked by pharmacists who care. We source only from authorised distributors, store every medicine as the manufacturer intended, and double-check every prescription before it leaves our counter.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <CommitmentItem text="Authorised, original sourcing" />
                  <CommitmentItem text="Cold-chain for specialty drugs" />
                  <CommitmentItem text="Registered pharmacists on-duty" />
                  <CommitmentItem text="Pre-order for rare medicines" />
                </div>

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
                <div className="w-[400px] h-[400px] rounded-[60px] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center relative overflow-hidden group">
                  <PlusSquareLarge />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                {/* Decorative glow */}
                <div className="absolute -z-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -top-10 -right-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Catalogue Banner Section */}
        <section id="catalogue" className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-brand-primary/10 to-slate-900 border-2 border-brand-primary/20 rounded-[48px] p-12 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Search size={240} className="text-brand-primary" />
              </div>
              <div className="relative z-10 max-w-3xl space-y-8">
                <div className="space-y-4">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">Catalogue</span>
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter leading-[0.95]">Looking for a specific medicine? <br /><span className="text-brand-primary italic">Search our in-store catalogue.</span></h2>
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    Browse our continuously updated list of stocked medicines. Once you find what you need, order instantly via WhatsApp or call us — as per Indian law, medicines are dispensed against a valid prescription.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <a 
                    href="https://wa.me/919496358682"
                    target="_blank"
                    className="bg-brand-primary hover:bg-emerald-400 text-slate-950 px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
                  >
                    <Search size={20} />
                    Search Medicines
                  </a>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                    * Prescription required for scheduled drugs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-32 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">Need Medicines in a Hurry?</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto italic font-sans">
              Our specialized delivery team is ready to assist you. Reach out via WhatsApp or call us for prompt healthcare support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/919496358682" 
                target="_blank"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-[#25D366]/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+919496358682" 
                className="bg-white hover:bg-slate-100 text-slate-950 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2 rounded-xl">
                  <ShieldCheck className="text-slate-950" size={24} />
                </div>
                <span className="text-2xl font-display font-bold text-white tracking-tighter uppercase mr-2">Kolath <span className="text-brand-primary">Medicals</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed font-medium italic">
                Kadavanthra's most trusted healthcare partner since 1990. Providing relief with quality products.
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
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-10">Compliance</h4>
              <ul className="space-y-4">
                <li className="text-slate-500 text-xs font-bold uppercase tracking-widest">Licensed Drug Retailer</li>
                <li className="text-slate-500 text-xs font-bold uppercase tracking-widest">Registered Pharmacists on-duty</li>
              </ul>
              <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <p className="text-[10px] text-slate-500 leading-relaxed italic font-medium">
                  As per Indian law, prescription medicines are dispensed only against a valid prescription. Online payments and online dispatch of Schedule-H drugs are not offered.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1 items-center md:items-start text-xs text-slate-500 font-bold uppercase tracking-widest">
               <span>&copy; 2026 KOLATH MEDICALS</span>
               <span className="text-brand-primary/50">Drug License: 21/443/KL/2021</span>
            </div>
            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">
              ISO 9001:2015 CERTIFIED CLINIC
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppSticky />
    </div>
  );
}

function StepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="space-y-4">
      <div className="text-brand-primary font-display font-bold text-xl tracking-widest">{number}</div>
      <h4 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h4>
      <p className="text-slate-400 text-sm italic leading-relaxed">{description}</p>
    </div>
  );
}

function CommitmentItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-400 group">
      <CheckCircle2 size={20} className="text-brand-primary group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium italic">{text}</span>
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

function PlusSquareLarge() {
  return (
    <div className="relative w-40 h-40">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 bg-brand-primary h-full rounded-full" />
        <div className="h-1 bg-brand-primary w-full rounded-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-brand-primary/20 rounded-full animate-ping" />
      </div>
    </div>
  );
}

