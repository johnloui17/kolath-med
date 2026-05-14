import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

export function MedicalBackground3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]" aria-hidden="true">
      {/* 3D Floating Plus Signs - Reduced count on mobile */}
      {[...Array(isMobile ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: `${10 + i * 25}%`, 
            y: `${20 + (i % 3) * 30}%`,
            z: Math.random() * -500,
            rotateX: 0,
            rotateY: 0
          }}
          animate={{
            y: [`${20 + (i % 3) * 30}%`, `${15 + (i % 3) * 30}%`, `${20 + (i % 3) * 30}%`],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute opacity-[0.03] text-brand-primary will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Plus size={isMobile ? 80 + i * 20 : 100 + i * 40} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Floating Molecular Structures - Desktop Only */}
      {!isMobile && [...Array(3)].map((_, i) => (
        <motion.div
          key={`mol-${i}`}
          initial={{ x: `${20 + i * 30}%`, y: `${30 + i * 15}%`, rotate: 0 }}
          animate={{ 
            rotate: 360,
            y: [`${30 + i * 15}%`, `${25 + i * 15}%`, `${30 + i * 15}%`]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute opacity-[0.05]"
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

      {/* Vertical Scanning Pulse - Slower on mobile */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: isMobile ? 12 : 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent blur-[1px] z-[1]"
      />

      {/* Floating HUD Rings - Simplified on mobile */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-80 h-80 border border-brand-primary/5 rounded-full border-dashed opacity-10"
      />
      
      {!isMobile && (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] border border-brand-primary/5 rounded-full border-dashed opacity-10"
        />
      )}

      {/* 3D Grid Floor/Background - Reduced opacity on mobile */}
      <div 
        className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
          backgroundSize: isMobile ? '100px 100px' : '80px 80px',
          transform: 'rotateX(60deg) translateY(-200px) translateZ(-400px)',
          transformOrigin: 'top center',
        }}
      />

      {/* Floating Medical Dots - Reduced count on mobile */}
      {[...Array(isMobile ? 8 : 20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            y: [null, '-20%', '120%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-brand-primary rounded-full blur-[1px]"
        />
      ))}

      {/* Heartbeat / ECG Line Animation - Single line on mobile */}
      <div className="absolute top-1/3 left-0 w-full h-32 opacity-[0.07] z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 L 100 50 L 110 50 L 120 40 L 130 50 L 150 50 L 160 10 L 175 90 L 190 50 L 220 50 L 240 30 L 260 50 L 1000 50"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {!isMobile && (
        <div className="absolute top-2/3 left-0 w-full h-32 opacity-[0.05] z-0 scale-x-[-1]">
          <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <motion.path
              d="M 0 50 L 150 50 L 160 45 L 170 50 L 190 50 L 200 0 L 215 100 L 230 50 L 260 50 L 280 20 L 300 50 L 1000 50"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
          </svg>
        </div>
      )}

      {/* Large Gradient Orbs - Optimized blur/size for mobile */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 -left-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[160px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/5 rounded-full blur-[70px] md:blur-[140px]"
      />
    </div>
  );
}
