import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Sana Engineering College",
    duration: "2023 - 2027 (Expected)",
    location: "Khammam, India",
    desc: "Specializing in Artificial Intelligence and Machine Learning. Consistently maintaining strong academic performance while building practical skills."
  },
  {
    title: "Intermediate (MPC)",
    institution: "TMRJC Junior College",
    duration: "2021 - 2023",
    location: "Telangana, India",
    desc: "Rigorous focus on Mathematics, Physics, and Chemistry, providing a strong analytical foundation for engineering."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-slate-950/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          title="My Education" 
          subtitle="Learning Path"
        />

        <div className="relative">
          {/* Vertical line for the timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 hidden md:block" />

                <div className={`w-full md:w-[45%] glass p-8 rounded-3xl border border-white/5 relative group overflow-hidden ${
                  i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="absolute top-0 right-0 p-8 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm">
                    <Calendar size={16} />
                    {item.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium mb-4">
                    <GraduationCap size={18} className="text-primary" />
                    {item.institution}
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                    <MapPin size={16} />
                    {item.location}
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
