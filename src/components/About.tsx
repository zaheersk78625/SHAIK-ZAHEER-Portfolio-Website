import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Cpu, Globe, Database, Sparkles } from 'lucide-react';

const traits = [
  { icon: Cpu, label: "AI/ML Solutions", desc: "Crafting intelligent models and predictive algorithms." },
  { icon: Globe, label: "Full Stack Dev", desc: "Building scalable end-to-end web applications." },
  { icon: Database, label: "Data Analysis", desc: "Extracting meaningful insights from complex datasets." },
  { icon: Sparkles, label: "Real-time Apps", desc: "Developing responsive and interactive user interfaces." }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Introduction"
          center={false}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              
              <h3 className="text-2xl font-bold text-white mb-6">
                I'm <span className="text-primary tracking-wide">Shaik Zaheer</span>, a visionary developer based in India.
              </h3>
              
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed mb-8">
                <p>
                  As a B.Tech CSE student at Sana Engineering College, I've dedicted myself to exploring the frontiers 
                  of **Artificial Intelligence** and **Machine Learning**. My passion lies in creating systems that don't just solve problems 
                  but adapt and improve over time.
                </p>
                <p>
                  I bridge the gap between complex backend logic and sleek, modern frontends. Whether it's training a 
                  Neural Network or crafting a responsive UI with Tailwind, I strive for excellence in every line of code.
                </p>
                <p>
                  I'm particularly interested in **Real-Time Applications** and **LLM Integration**, seeking ways to make 
                  technology more accessible and intelligent for everyone.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {traits.map((trait, i) => (
                  <motion.div 
                    key={trait.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <trait.icon size={18} />
                      <span className="font-semibold text-white/90 text-sm whitespace-nowrap">{trait.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass p-8 rounded-3xl border-l-4 border-l-primary">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold text-primary">10+</div>
                <div>
                  <div className="text-white font-bold uppercase tracking-widest text-sm">Projects</div>
                  <div className="text-slate-400 text-sm">Successfully Built</div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-l-4 border-l-accent">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold text-accent">B.Tech</div>
                <div>
                  <div className="text-white font-bold uppercase tracking-widest text-sm">CSE Student</div>
                  <div className="text-slate-400 text-sm">Expected 2027</div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-video lg:aspect-square group rounded-3xl overflow-hidden glass p-2">
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Coding" 
                 className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6">
                 <p className="text-xs font-mono text-primary uppercase">Code is poetry written with logic.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
