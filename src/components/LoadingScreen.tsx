import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={(definition) => {
        // Force hide after animation
        const el = document.getElementById('loading-screen');
        if (el) el.style.display = 'none';
      }}
      id="loading-screen"
      className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center p-4"
    >
      <div className="relative mb-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary"
        />
        <div className="absolute inset-0 flex items-center justify-center text-primary font-mono text-xl font-bold">
          SZ
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-white text-2xl font-bold tracking-widest mb-1">SHAIK ZAHEER</h2>
        <div className="flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                />
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
