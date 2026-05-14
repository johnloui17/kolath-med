import React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

export function MedicalBackground3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]" aria-hidden="true">
      {/* 3D Floating Plus Signs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: `${10 + i * 20}%`, 
            y: `${20 + (i % 3) * 25}%`,
            z: Math.random() * -500,
            rotateX: 0,
            rotateY: 0
          }}
          animate={{
            y: [`${20 + (i % 3) * 25}%`, `${15 + (i % 3) * 25}%`, `${20 + (i % 3) * 25}%`],
            rotateX: [0, 360],
            rotateY: [0, 360],
            z: [Math.random() * -500, Math.random() * -200, Math.random() * -500]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute opacity-[0.04] text-brand-primary will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Plus size={100 + i * 40} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Floating Molecular Structures */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`mol-${i}`}
          initial={{ x: `${20 + i * 30}%`, y: `${30 + i * 15}%`, rotate: 0 }}
          animate={{ 
            rotate: 360,
            y: [`${30 + i * 15}%`, `${25 + i * 15}%`, `${30 + i * 15}%`]
          }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute opacity-[0.05] hidden md:block"
        >
          <div className="relative">
            <div className="w-4 h-4 bg-brand-primary rounded-full" />
            <div className="absolute top-8 left-12 w-6 h-6 bg-brand-primary rounded-full" />
            <div className="absolute -top-12 left-6 w-3 h-3 bg-brand-primary rounded-full" />
            <div className="absolute top-4 left-2 w-[50px] h-[1px] bg-brand-primary rotate-[45deg] origin-left" />
            <div className="absolute top-0 left-2 w-[40px] h-[1px] bg-brand-primary rotate-[-60deg] origin-left" />
          </div>
        </motion.div>
      ))}

      {/* Vertical Scanning Pulse */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent blur-[2px] z-[1]"
      />

      {/* Floating HUD Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-80 h-80 border border-brand-primary/10 rounded-full border-dashed opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] border border-brand-primary/5 rounded-full border-dashed opacity-20"
      />

      {/* Simulated 3D DNA Helix */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-[400px] flex flex-col justify-between items-center opacity-[0.08] hidden lg:flex">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`helix-${i}`}
            animate={{
              rotateY: [0, 360],
              x: [0, 40, 0, -40, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15
            }}
            className="flex items-center gap-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_#10b981]" />
            <div className="h-[1px] w-12 bg-gradient-to-r from-brand-primary to-transparent" />
            <div className="w-3 h-3 bg-brand-primary/50 rounded-full shadow-[0_0_10px_#10b981]" />
          </motion.div>
        ))}
      </div>

      {/* 3D Grid Floor/Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'rotateX(60deg) translateY(-200px) translateZ(-400px)',
          transformOrigin: 'top center',
        }}
      />

      {/* Floating Medical Dots/Data Points */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            y: [null, '-20%', '120%'],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-brand-primary rounded-full blur-[1px]"
        />
      ))}

      {/* Heartbeat / ECG Line Animation */}
      <div className="absolute top-1/3 left-0 w-full h-32 opacity-[0.1] z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 L 100 50 L 110 50 L 120 40 L 130 50 L 150 50 L 160 10 L 175 90 L 190 50 L 220 50 L 240 30 L 260 50 L 1000 50"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 0],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Glowing Pulse Head */}
          <motion.circle
            r="3"
            fill="#10b981"
            filter="blur(4px)"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ offsetPath: "path('M 0 50 L 100 50 L 110 50 L 120 40 L 130 50 L 150 50 L 160 10 L 175 90 L 190 50 L 220 50 L 240 30 L 260 50 L 1000 50')" }}
          />
        </svg>
      </div>

      <div className="absolute top-2/3 left-0 w-full h-32 opacity-[0.05] z-0 scale-x-[-1]">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 L 150 50 L 160 45 L 170 50 L 190 50 L 200 0 L 215 100 L 230 50 L 260 50 L 280 20 L 300 50 L 1000 50"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </svg>
      </div>

      {/* Large Gradient Orbs for Depth */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[160px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px]"
      />
    </div>
  );
}
