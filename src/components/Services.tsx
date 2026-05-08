import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { 
  Monitor, 
  Brain, 
  BarChart3, 
  Zap, 
  Smartphone,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    title: "Web Development",
    icon: Monitor,
    desc: "Creating high-performance, modern web applications with React, Tailwind, and cutting-edge technologies."
  },
  {
    title: "AI/ML Projects",
    icon: Brain,
    desc: "Developing intelligent algorithms, predictive models, and custom AI solutions tailored to specific needs."
  },
  {
    title: "Dashboard Development",
    icon: BarChart3,
    desc: "Crafting interactive data visualization dashboards that turn complex metrics into actionable insights."
  },
  {
    title: "API Integration",
    icon: Zap,
    desc: "Seamlessly connecting third-party services, RESTful APIs, and external data sources to your platform."
  },
  {
    title: "Responsive UI/UX Design",
    icon: Smartphone,
    desc: "Designing user-centric interfaces that provide a flawless experience across all devices and screen sizes."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Services & Specialties" 
          subtitle="What I Do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-bl-[100px] blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center border-dashed border-2 border-white/10"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Need a custom solution?</h3>
            <p className="text-slate-500 mb-6 text-sm">I'm always open to discussing new and unique projects.</p>
            <a href="#contact" className="text-primary font-bold hover:underline">Get in touch →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
