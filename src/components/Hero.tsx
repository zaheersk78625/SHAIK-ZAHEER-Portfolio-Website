import { motion } from 'motion/react';
import { FileText, Eye, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typingText = useTypewriter([
    'AI Developer',
    'Python Developer',
    'Full Stack Developer',
    'Machine Learning Enthusiast'
  ]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="max-w-5xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase animate-pulse">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4">
            SHAIK <span className="text-gradient">ZAHEER</span>
          </h1>
          <div className="h-8 md:h-12 mb-8">
            <p className="text-xl md:text-3xl font-medium text-slate-400">
              I'm a <span className="text-white border-r-2 border-primary pr-1">{typingText}</span>
            </p>
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Passionate B.Tech CSE student specializing in Artificial Intelligence and Full Stack Development. 
            Building smart solutions for complex problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors"
            >
              View Projects <Eye size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass border border-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 glass-hover"
            >
              Download Resume <FileText size={18} />
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:zaheersk991@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                whileHover={{ y: -5, color: '#3b82f6' }}
                className="p-3 glass rounded-full text-slate-400 hover:text-white transition-all"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
