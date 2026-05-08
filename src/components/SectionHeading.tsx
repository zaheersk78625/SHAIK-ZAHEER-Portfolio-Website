import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
      >
        {title}
        <span className="text-primary">.</span>
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 bg-gradient-to-r from-primary to-accent mt-4 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
