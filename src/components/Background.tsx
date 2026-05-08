import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Dynamic Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]" 
      />
      
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.4, 0.3],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]" 
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-20" />
    </div>
  );
}
